-- DolarYMonedas SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DolarYMonedas",
      slug = "dolar-y-monedas",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "blue",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "blue",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "bolsa",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "bolsa",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "cotizaciones",
                  },
                  {
                    ["lit"] = "brl",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "brl",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "cotizaciones",
                  },
                  {
                    ["lit"] = "clp",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "clp",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "contadoconliqui",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "contadoconliqui",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "blue",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/bolsa",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "bolsa",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/contadoconliqui",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "contadoconliqui",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/cripto",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "cripto",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/mayorista",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "mayorista",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/oficial",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "oficial",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ambito/dolares/tarjeta",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ambito",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "tarjeta",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "cotizaciones",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "cotizaciones",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "cripto",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "cripto",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "estado",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "estado",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "cotizaciones",
                  },
                  {
                    ["lit"] = "eur",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "eur",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "mayorista",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "mayorista",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "oficial",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "oficial",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "dolares",
                  },
                  {
                    ["lit"] = "tarjeta",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "dolares",
                  "tarjeta",
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
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "cotizaciones",
                  },
                  {
                    ["lit"] = "uyu",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "uyu",
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
