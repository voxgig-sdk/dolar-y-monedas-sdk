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

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
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

        $config = DolarYMonedasConfig::shared_config();

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

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = DolarYMonedasHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = DolarYMonedasHelpers::to_map($feature_opts[$fname] ?? null);
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

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new DolarYMonedasError($op . "_allow",
                "DolarYMonedasSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
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

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new DolarYMonedasError("graphql_error",
                "DolarYMonedasSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_blue = null;

    // Canonical facade: $client->Blue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->blue()
    // resolves here too.
    public function Blue($data = null)
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

    // Canonical facade: $client->Bolsa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bolsa()
    // resolves here too.
    public function Bolsa($data = null)
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

    // Canonical facade: $client->Brl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->brl()
    // resolves here too.
    public function Brl($data = null)
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

    // Canonical facade: $client->Clp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->clp()
    // resolves here too.
    public function Clp($data = null)
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

    // Canonical facade: $client->Contadoconliqui()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contadoconliqui()
    // resolves here too.
    public function Contadoconliqui($data = null)
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

    // Canonical facade: $client->CotizacionAmbito()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cotizacion_ambito()
    // resolves here too.
    public function CotizacionAmbito($data = null)
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

    // Canonical facade: $client->Cotizacione()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cotizacione()
    // resolves here too.
    public function Cotizacione($data = null)
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

    // Canonical facade: $client->Cripto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cripto()
    // resolves here too.
    public function Cripto($data = null)
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

    // Canonical facade: $client->Dolare()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dolare()
    // resolves here too.
    public function Dolare($data = null)
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

    // Canonical facade: $client->Estado()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->estado()
    // resolves here too.
    public function Estado($data = null)
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

    // Canonical facade: $client->Eur()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->eur()
    // resolves here too.
    public function Eur($data = null)
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

    // Canonical facade: $client->Mayorista()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->mayorista()
    // resolves here too.
    public function Mayorista($data = null)
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

    // Canonical facade: $client->Oficial()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oficial()
    // resolves here too.
    public function Oficial($data = null)
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

    // Canonical facade: $client->Tarjeta()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tarjeta()
    // resolves here too.
    public function Tarjeta($data = null)
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

    // Canonical facade: $client->Uyu()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->uyu()
    // resolves here too.
    public function Uyu($data = null)
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
