<?php
declare(strict_types=1);

// DolarYMonedas SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

class DolarYMonedasSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new DolarYMonedasUtility();
        $this->_utility = $utility;

        $config = DolarYMonedasConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features from config.
        $feature_opts = DolarYMonedasHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $items = Struct::items($feature_opts);
            if ($items) {
                foreach ($items as $item) {
                    $fname = $item[0];
                    $fopts = DolarYMonedasHelpers::to_map($item[1]);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, DolarYMonedasFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return DolarYMonedasUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = DolarYMonedasHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = DolarYMonedasHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = DolarYMonedasHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new DolarYMonedasSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = DolarYMonedasHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = DolarYMonedasHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_blue = null;

    // Idiomatic facade: $client->blue()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Blue() (PHP method
    // names are case-insensitive).
    public function blue($data = null)
    {
        require_once __DIR__ . '/entity/blue_entity.php';
        if ($data === null) {
            if ($this->_blue === null) {
                $this->_blue = new BlueEntity($this, null);
            }
            return $this->_blue;
        }
        return new BlueEntity($this, $data);
    }


    private $_bolsa = null;

    // Idiomatic facade: $client->bolsa()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Bolsa() (PHP method
    // names are case-insensitive).
    public function bolsa($data = null)
    {
        require_once __DIR__ . '/entity/bolsa_entity.php';
        if ($data === null) {
            if ($this->_bolsa === null) {
                $this->_bolsa = new BolsaEntity($this, null);
            }
            return $this->_bolsa;
        }
        return new BolsaEntity($this, $data);
    }


    private $_brl = null;

    // Idiomatic facade: $client->brl()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Brl() (PHP method
    // names are case-insensitive).
    public function brl($data = null)
    {
        require_once __DIR__ . '/entity/brl_entity.php';
        if ($data === null) {
            if ($this->_brl === null) {
                $this->_brl = new BrlEntity($this, null);
            }
            return $this->_brl;
        }
        return new BrlEntity($this, $data);
    }


    private $_clp = null;

    // Idiomatic facade: $client->clp()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Clp() (PHP method
    // names are case-insensitive).
    public function clp($data = null)
    {
        require_once __DIR__ . '/entity/clp_entity.php';
        if ($data === null) {
            if ($this->_clp === null) {
                $this->_clp = new ClpEntity($this, null);
            }
            return $this->_clp;
        }
        return new ClpEntity($this, $data);
    }


    private $_contadoconliqui = null;

    // Idiomatic facade: $client->contadoconliqui()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Contadoconliqui() (PHP method
    // names are case-insensitive).
    public function contadoconliqui($data = null)
    {
        require_once __DIR__ . '/entity/contadoconliqui_entity.php';
        if ($data === null) {
            if ($this->_contadoconliqui === null) {
                $this->_contadoconliqui = new ContadoconliquiEntity($this, null);
            }
            return $this->_contadoconliqui;
        }
        return new ContadoconliquiEntity($this, $data);
    }


    private $_cotizacion_ambito = null;

    // Idiomatic facade: $client->cotizacion_ambito()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias CotizacionAmbito() (PHP method
    // names are case-insensitive).
    public function cotizacion_ambito($data = null)
    {
        require_once __DIR__ . '/entity/cotizacion_ambito_entity.php';
        if ($data === null) {
            if ($this->_cotizacion_ambito === null) {
                $this->_cotizacion_ambito = new CotizacionAmbitoEntity($this, null);
            }
            return $this->_cotizacion_ambito;
        }
        return new CotizacionAmbitoEntity($this, $data);
    }


    private $_cotizacione = null;

    // Idiomatic facade: $client->cotizacione()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Cotizacione() (PHP method
    // names are case-insensitive).
    public function cotizacione($data = null)
    {
        require_once __DIR__ . '/entity/cotizacione_entity.php';
        if ($data === null) {
            if ($this->_cotizacione === null) {
                $this->_cotizacione = new CotizacioneEntity($this, null);
            }
            return $this->_cotizacione;
        }
        return new CotizacioneEntity($this, $data);
    }


    private $_cripto = null;

    // Idiomatic facade: $client->cripto()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Cripto() (PHP method
    // names are case-insensitive).
    public function cripto($data = null)
    {
        require_once __DIR__ . '/entity/cripto_entity.php';
        if ($data === null) {
            if ($this->_cripto === null) {
                $this->_cripto = new CriptoEntity($this, null);
            }
            return $this->_cripto;
        }
        return new CriptoEntity($this, $data);
    }


    private $_dolare = null;

    // Idiomatic facade: $client->dolare()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Dolare() (PHP method
    // names are case-insensitive).
    public function dolare($data = null)
    {
        require_once __DIR__ . '/entity/dolare_entity.php';
        if ($data === null) {
            if ($this->_dolare === null) {
                $this->_dolare = new DolareEntity($this, null);
            }
            return $this->_dolare;
        }
        return new DolareEntity($this, $data);
    }


    private $_estado = null;

    // Idiomatic facade: $client->estado()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Estado() (PHP method
    // names are case-insensitive).
    public function estado($data = null)
    {
        require_once __DIR__ . '/entity/estado_entity.php';
        if ($data === null) {
            if ($this->_estado === null) {
                $this->_estado = new EstadoEntity($this, null);
            }
            return $this->_estado;
        }
        return new EstadoEntity($this, $data);
    }


    private $_eur = null;

    // Idiomatic facade: $client->eur()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Eur() (PHP method
    // names are case-insensitive).
    public function eur($data = null)
    {
        require_once __DIR__ . '/entity/eur_entity.php';
        if ($data === null) {
            if ($this->_eur === null) {
                $this->_eur = new EurEntity($this, null);
            }
            return $this->_eur;
        }
        return new EurEntity($this, $data);
    }


    private $_mayorista = null;

    // Idiomatic facade: $client->mayorista()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Mayorista() (PHP method
    // names are case-insensitive).
    public function mayorista($data = null)
    {
        require_once __DIR__ . '/entity/mayorista_entity.php';
        if ($data === null) {
            if ($this->_mayorista === null) {
                $this->_mayorista = new MayoristaEntity($this, null);
            }
            return $this->_mayorista;
        }
        return new MayoristaEntity($this, $data);
    }


    private $_oficial = null;

    // Idiomatic facade: $client->oficial()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Oficial() (PHP method
    // names are case-insensitive).
    public function oficial($data = null)
    {
        require_once __DIR__ . '/entity/oficial_entity.php';
        if ($data === null) {
            if ($this->_oficial === null) {
                $this->_oficial = new OficialEntity($this, null);
            }
            return $this->_oficial;
        }
        return new OficialEntity($this, $data);
    }


    private $_tarjeta = null;

    // Idiomatic facade: $client->tarjeta()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Tarjeta() (PHP method
    // names are case-insensitive).
    public function tarjeta($data = null)
    {
        require_once __DIR__ . '/entity/tarjeta_entity.php';
        if ($data === null) {
            if ($this->_tarjeta === null) {
                $this->_tarjeta = new TarjetaEntity($this, null);
            }
            return $this->_tarjeta;
        }
        return new TarjetaEntity($this, $data);
    }


    private $_uyu = null;

    // Idiomatic facade: $client->uyu()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Uyu() (PHP method
    // names are case-insensitive).
    public function uyu($data = null)
    {
        require_once __DIR__ . '/entity/uyu_entity.php';
        if ($data === null) {
            if ($this->_uyu === null) {
                $this->_uyu = new UyuEntity($this, null);
            }
            return $this->_uyu;
        }
        return new UyuEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new DolarYMonedasSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
