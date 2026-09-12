# DolarYMonedas SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DolarYMonedas",
            "slug": "dolar-y-monedas",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://dolarapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "blue": {},
                "bolsa": {},
                "brl": {},
                "clp": {},
                "contadoconliqui": {},
                "cotizacion_ambito": {},
                "cotizacione": {},
                "cripto": {},
                "dolare": {},
                "estado": {},
                "eur": {},
                "mayorista": {},
                "oficial": {},
                "tarjeta": {},
                "uyu": {},
            },
        },
        "entity": {
      "blue": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "blue",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/blue",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "blue",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "blue",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bolsa": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "bolsa",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/bolsa",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "bolsa",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "bolsa",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "brl": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "brl",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/brl",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "cotizaciones",
                  },
                  {
                    "lit": "brl",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "cotizaciones",
                  "brl",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "clp": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "clp",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/clp",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "cotizaciones",
                  },
                  {
                    "lit": "clp",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "cotizaciones",
                  "clp",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "contadoconliqui": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "contadoconliqui",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/contadoconliqui",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "contadoconliqui",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "contadoconliqui",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cotizacion_ambito": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "variacion",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "cotizacion_ambito",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/blue",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "blue",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/bolsa",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "bolsa",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/contadoconliqui",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "contadoconliqui",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/cripto",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "cripto",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/mayorista",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "mayorista",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/oficial",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "oficial",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/tarjeta",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "ambito",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "tarjeta",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cotizacione": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "cotizacione",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "cotizaciones",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "cotizaciones",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cripto": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "cripto",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/cripto",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "cripto",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "cripto",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "dolare": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "dolare",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "estado": {
        "fields": [
          {
            "name": "aleatorio",
            "type": "`$INTEGER`",
          },
          {
            "name": "estado",
            "type": "`$STRING`",
          },
        ],
        "name": "estado",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/estado",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "estado",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "estado",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "eur": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "eur",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/eur",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "cotizaciones",
                  },
                  {
                    "lit": "eur",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "cotizaciones",
                  "eur",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "mayorista": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "mayorista",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/mayorista",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "mayorista",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "mayorista",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "oficial": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "oficial",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/oficial",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "oficial",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "oficial",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tarjeta": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "tarjeta",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/dolares/tarjeta",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "dolares",
                  },
                  {
                    "lit": "tarjeta",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "dolares",
                  "tarjeta",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "uyu": {
        "fields": [
          {
            "name": "casa",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
          },
        ],
        "name": "uyu",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/uyu",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "cotizaciones",
                  },
                  {
                    "lit": "uyu",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "cotizaciones",
                  "uyu",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
