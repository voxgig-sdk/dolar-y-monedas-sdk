-- DolarYMonedas SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DolarYMonedas",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://dolarapi.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["blue"] = {},
        ["bolsa"] = {},
        ["brl"] = {},
        ["clp"] = {},
        ["contadoconliqui"] = {},
        ["cotizacion_ambito"] = {},
        ["cotizacione"] = {},
        ["cripto"] = {},
        ["dolare"] = {},
        ["estado"] = {},
        ["eur"] = {},
        ["mayorista"] = {},
        ["oficial"] = {},
        ["tarjeta"] = {},
        ["uyu"] = {},
      },
    },
    entity = {
      ["blue"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "blue",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/blue",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "blue",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["bolsa"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "bolsa",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/bolsa",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "bolsa",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["brl"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "brl",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/brl",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "brl",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["clp"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "clp",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/clp",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "clp",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["contadoconliqui"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "contadoconliqui",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/contadoconliqui",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "contadoconliqui",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cotizacion_ambito"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "variacion",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "cotizacion_ambito",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/blue",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/bolsa",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/contadoconliqui",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/cripto",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/mayorista",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/oficial",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/tarjeta",
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cotizacione"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "cotizacione",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cripto"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "cripto",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/cripto",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "cripto",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["dolare"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "dolare",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares",
                ["parts"] = {
                  "v1",
                  "dolares",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["estado"] = {
        ["fields"] = {
          {
            ["name"] = "aleatorio",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "estado",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "estado",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/estado",
                ["parts"] = {
                  "v1",
                  "estado",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["eur"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "eur",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/eur",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "eur",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["mayorista"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "mayorista",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/mayorista",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "mayorista",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["oficial"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "oficial",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/oficial",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "oficial",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tarjeta"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "tarjeta",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/dolares/tarjeta",
                ["parts"] = {
                  "v1",
                  "dolares",
                  "tarjeta",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["uyu"] = {
        ["fields"] = {
          {
            ["name"] = "casa",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "compra",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "fechaActualizacion",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "moneda",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nombre",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venta",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "uyu",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/uyu",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "uyu",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
