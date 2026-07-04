# DolarYMonedas SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'DolarYMonedas_types'


class DolarYMonedasSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = DolarYMonedasUtility.new
    @_utility = utility

    config = DolarYMonedasConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = DolarYMonedasHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = DolarYMonedasHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, DolarYMonedasFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    DolarYMonedasUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = DolarYMonedasHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = DolarYMonedasHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = DolarYMonedasHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = DolarYMonedasSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    utility.make_fetch_def.call(ctx)
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue DolarYMonedasError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = DolarYMonedasHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = DolarYMonedasHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Idiomatic facade: client.blue.list / client.blue.load({ "id" => ... })
  def blue
    require_relative 'entity/blue_entity'
    @blue ||= BlueEntity.new(self, nil)
  end

  # Deprecated: use client.blue instead.
  def Blue(data = nil)
    require_relative 'entity/blue_entity'
    BlueEntity.new(self, data)
  end


  # Idiomatic facade: client.bolsa.list / client.bolsa.load({ "id" => ... })
  def bolsa
    require_relative 'entity/bolsa_entity'
    @bolsa ||= BolsaEntity.new(self, nil)
  end

  # Deprecated: use client.bolsa instead.
  def Bolsa(data = nil)
    require_relative 'entity/bolsa_entity'
    BolsaEntity.new(self, data)
  end


  # Idiomatic facade: client.brl.list / client.brl.load({ "id" => ... })
  def brl
    require_relative 'entity/brl_entity'
    @brl ||= BrlEntity.new(self, nil)
  end

  # Deprecated: use client.brl instead.
  def Brl(data = nil)
    require_relative 'entity/brl_entity'
    BrlEntity.new(self, data)
  end


  # Idiomatic facade: client.clp.list / client.clp.load({ "id" => ... })
  def clp
    require_relative 'entity/clp_entity'
    @clp ||= ClpEntity.new(self, nil)
  end

  # Deprecated: use client.clp instead.
  def Clp(data = nil)
    require_relative 'entity/clp_entity'
    ClpEntity.new(self, data)
  end


  # Idiomatic facade: client.contadoconliqui.list / client.contadoconliqui.load({ "id" => ... })
  def contadoconliqui
    require_relative 'entity/contadoconliqui_entity'
    @contadoconliqui ||= ContadoconliquiEntity.new(self, nil)
  end

  # Deprecated: use client.contadoconliqui instead.
  def Contadoconliqui(data = nil)
    require_relative 'entity/contadoconliqui_entity'
    ContadoconliquiEntity.new(self, data)
  end


  # Idiomatic facade: client.cotizacion_ambito.list / client.cotizacion_ambito.load({ "id" => ... })
  def cotizacion_ambito
    require_relative 'entity/cotizacion_ambito_entity'
    @cotizacion_ambito ||= CotizacionAmbitoEntity.new(self, nil)
  end

  # Deprecated: use client.cotizacion_ambito instead.
  def CotizacionAmbito(data = nil)
    require_relative 'entity/cotizacion_ambito_entity'
    CotizacionAmbitoEntity.new(self, data)
  end


  # Idiomatic facade: client.cotizacione.list / client.cotizacione.load({ "id" => ... })
  def cotizacione
    require_relative 'entity/cotizacione_entity'
    @cotizacione ||= CotizacioneEntity.new(self, nil)
  end

  # Deprecated: use client.cotizacione instead.
  def Cotizacione(data = nil)
    require_relative 'entity/cotizacione_entity'
    CotizacioneEntity.new(self, data)
  end


  # Idiomatic facade: client.cripto.list / client.cripto.load({ "id" => ... })
  def cripto
    require_relative 'entity/cripto_entity'
    @cripto ||= CriptoEntity.new(self, nil)
  end

  # Deprecated: use client.cripto instead.
  def Cripto(data = nil)
    require_relative 'entity/cripto_entity'
    CriptoEntity.new(self, data)
  end


  # Idiomatic facade: client.dolare.list / client.dolare.load({ "id" => ... })
  def dolare
    require_relative 'entity/dolare_entity'
    @dolare ||= DolareEntity.new(self, nil)
  end

  # Deprecated: use client.dolare instead.
  def Dolare(data = nil)
    require_relative 'entity/dolare_entity'
    DolareEntity.new(self, data)
  end


  # Idiomatic facade: client.estado.list / client.estado.load({ "id" => ... })
  def estado
    require_relative 'entity/estado_entity'
    @estado ||= EstadoEntity.new(self, nil)
  end

  # Deprecated: use client.estado instead.
  def Estado(data = nil)
    require_relative 'entity/estado_entity'
    EstadoEntity.new(self, data)
  end


  # Idiomatic facade: client.eur.list / client.eur.load({ "id" => ... })
  def eur
    require_relative 'entity/eur_entity'
    @eur ||= EurEntity.new(self, nil)
  end

  # Deprecated: use client.eur instead.
  def Eur(data = nil)
    require_relative 'entity/eur_entity'
    EurEntity.new(self, data)
  end


  # Idiomatic facade: client.mayorista.list / client.mayorista.load({ "id" => ... })
  def mayorista
    require_relative 'entity/mayorista_entity'
    @mayorista ||= MayoristaEntity.new(self, nil)
  end

  # Deprecated: use client.mayorista instead.
  def Mayorista(data = nil)
    require_relative 'entity/mayorista_entity'
    MayoristaEntity.new(self, data)
  end


  # Idiomatic facade: client.oficial.list / client.oficial.load({ "id" => ... })
  def oficial
    require_relative 'entity/oficial_entity'
    @oficial ||= OficialEntity.new(self, nil)
  end

  # Deprecated: use client.oficial instead.
  def Oficial(data = nil)
    require_relative 'entity/oficial_entity'
    OficialEntity.new(self, data)
  end


  # Idiomatic facade: client.tarjeta.list / client.tarjeta.load({ "id" => ... })
  def tarjeta
    require_relative 'entity/tarjeta_entity'
    @tarjeta ||= TarjetaEntity.new(self, nil)
  end

  # Deprecated: use client.tarjeta instead.
  def Tarjeta(data = nil)
    require_relative 'entity/tarjeta_entity'
    TarjetaEntity.new(self, data)
  end


  # Idiomatic facade: client.uyu.list / client.uyu.load({ "id" => ... })
  def uyu
    require_relative 'entity/uyu_entity'
    @uyu ||= UyuEntity.new(self, nil)
  end

  # Deprecated: use client.uyu instead.
  def Uyu(data = nil)
    require_relative 'entity/uyu_entity'
    UyuEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = DolarYMonedasSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
