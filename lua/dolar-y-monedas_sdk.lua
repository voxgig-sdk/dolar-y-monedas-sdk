-- DolarYMonedas SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local DolarYMonedasSDK = {}
DolarYMonedasSDK.__index = DolarYMonedasSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

DolarYMonedasSDK._make_feature = _make_feature


function DolarYMonedasSDK.new(options)
  local self = setmetatable({}, DolarYMonedasSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features from config.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local feature_items = vs.items(feature_opts)
    if feature_items ~= nil then
      for _, item in ipairs(feature_items) do
        local fname = item[1]
        local fopts = helpers.to_map(item[2])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function DolarYMonedasSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function DolarYMonedasSDK:get_utility()
  return Utility.copy(self._utility)
end


function DolarYMonedasSDK:get_root_ctx()
  return self._rootctx
end


function DolarYMonedasSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function DolarYMonedasSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:blue():list() / client:blue():load({ id = ... })
function DolarYMonedasSDK:blue(data)
  local EntityMod = require("entity.blue_entity")
  if data == nil then
    if self._blue == nil then
      self._blue = EntityMod.new(self, nil)
    end
    return self._blue
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:blue() instead.
function DolarYMonedasSDK:Blue(data)
  local EntityMod = require("entity.blue_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:bolsa():list() / client:bolsa():load({ id = ... })
function DolarYMonedasSDK:bolsa(data)
  local EntityMod = require("entity.bolsa_entity")
  if data == nil then
    if self._bolsa == nil then
      self._bolsa = EntityMod.new(self, nil)
    end
    return self._bolsa
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:bolsa() instead.
function DolarYMonedasSDK:Bolsa(data)
  local EntityMod = require("entity.bolsa_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:brl():list() / client:brl():load({ id = ... })
function DolarYMonedasSDK:brl(data)
  local EntityMod = require("entity.brl_entity")
  if data == nil then
    if self._brl == nil then
      self._brl = EntityMod.new(self, nil)
    end
    return self._brl
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:brl() instead.
function DolarYMonedasSDK:Brl(data)
  local EntityMod = require("entity.brl_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:clp():list() / client:clp():load({ id = ... })
function DolarYMonedasSDK:clp(data)
  local EntityMod = require("entity.clp_entity")
  if data == nil then
    if self._clp == nil then
      self._clp = EntityMod.new(self, nil)
    end
    return self._clp
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:clp() instead.
function DolarYMonedasSDK:Clp(data)
  local EntityMod = require("entity.clp_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:contadoconliqui():list() / client:contadoconliqui():load({ id = ... })
function DolarYMonedasSDK:contadoconliqui(data)
  local EntityMod = require("entity.contadoconliqui_entity")
  if data == nil then
    if self._contadoconliqui == nil then
      self._contadoconliqui = EntityMod.new(self, nil)
    end
    return self._contadoconliqui
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:contadoconliqui() instead.
function DolarYMonedasSDK:Contadoconliqui(data)
  local EntityMod = require("entity.contadoconliqui_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cotizacion_ambito():list() / client:cotizacion_ambito():load({ id = ... })
function DolarYMonedasSDK:cotizacion_ambito(data)
  local EntityMod = require("entity.cotizacion_ambito_entity")
  if data == nil then
    if self._cotizacion_ambito == nil then
      self._cotizacion_ambito = EntityMod.new(self, nil)
    end
    return self._cotizacion_ambito
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cotizacion_ambito() instead.
function DolarYMonedasSDK:CotizacionAmbito(data)
  local EntityMod = require("entity.cotizacion_ambito_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cotizacione():list() / client:cotizacione():load({ id = ... })
function DolarYMonedasSDK:cotizacione(data)
  local EntityMod = require("entity.cotizacione_entity")
  if data == nil then
    if self._cotizacione == nil then
      self._cotizacione = EntityMod.new(self, nil)
    end
    return self._cotizacione
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cotizacione() instead.
function DolarYMonedasSDK:Cotizacione(data)
  local EntityMod = require("entity.cotizacione_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cripto():list() / client:cripto():load({ id = ... })
function DolarYMonedasSDK:cripto(data)
  local EntityMod = require("entity.cripto_entity")
  if data == nil then
    if self._cripto == nil then
      self._cripto = EntityMod.new(self, nil)
    end
    return self._cripto
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cripto() instead.
function DolarYMonedasSDK:Cripto(data)
  local EntityMod = require("entity.cripto_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:dolare():list() / client:dolare():load({ id = ... })
function DolarYMonedasSDK:dolare(data)
  local EntityMod = require("entity.dolare_entity")
  if data == nil then
    if self._dolare == nil then
      self._dolare = EntityMod.new(self, nil)
    end
    return self._dolare
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:dolare() instead.
function DolarYMonedasSDK:Dolare(data)
  local EntityMod = require("entity.dolare_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:estado():list() / client:estado():load({ id = ... })
function DolarYMonedasSDK:estado(data)
  local EntityMod = require("entity.estado_entity")
  if data == nil then
    if self._estado == nil then
      self._estado = EntityMod.new(self, nil)
    end
    return self._estado
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:estado() instead.
function DolarYMonedasSDK:Estado(data)
  local EntityMod = require("entity.estado_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:eur():list() / client:eur():load({ id = ... })
function DolarYMonedasSDK:eur(data)
  local EntityMod = require("entity.eur_entity")
  if data == nil then
    if self._eur == nil then
      self._eur = EntityMod.new(self, nil)
    end
    return self._eur
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:eur() instead.
function DolarYMonedasSDK:Eur(data)
  local EntityMod = require("entity.eur_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:mayorista():list() / client:mayorista():load({ id = ... })
function DolarYMonedasSDK:mayorista(data)
  local EntityMod = require("entity.mayorista_entity")
  if data == nil then
    if self._mayorista == nil then
      self._mayorista = EntityMod.new(self, nil)
    end
    return self._mayorista
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:mayorista() instead.
function DolarYMonedasSDK:Mayorista(data)
  local EntityMod = require("entity.mayorista_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:oficial():list() / client:oficial():load({ id = ... })
function DolarYMonedasSDK:oficial(data)
  local EntityMod = require("entity.oficial_entity")
  if data == nil then
    if self._oficial == nil then
      self._oficial = EntityMod.new(self, nil)
    end
    return self._oficial
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:oficial() instead.
function DolarYMonedasSDK:Oficial(data)
  local EntityMod = require("entity.oficial_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:tarjeta():list() / client:tarjeta():load({ id = ... })
function DolarYMonedasSDK:tarjeta(data)
  local EntityMod = require("entity.tarjeta_entity")
  if data == nil then
    if self._tarjeta == nil then
      self._tarjeta = EntityMod.new(self, nil)
    end
    return self._tarjeta
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:tarjeta() instead.
function DolarYMonedasSDK:Tarjeta(data)
  local EntityMod = require("entity.tarjeta_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:uyu():list() / client:uyu():load({ id = ... })
function DolarYMonedasSDK:uyu(data)
  local EntityMod = require("entity.uyu_entity")
  if data == nil then
    if self._uyu == nil then
      self._uyu = EntityMod.new(self, nil)
    end
    return self._uyu
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:uyu() instead.
function DolarYMonedasSDK:Uyu(data)
  local EntityMod = require("entity.uyu_entity")
  return EntityMod.new(self, data)
end




function DolarYMonedasSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = DolarYMonedasSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return DolarYMonedasSDK
