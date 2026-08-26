# DolarYMonedas SDK configuration


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
                "parts": [
                  "v1",
                  "dolares",
                  "blue",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "bolsa",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "brl",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "clp",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "contadoconliqui",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/bolsa",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/contadoconliqui",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/cripto",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/mayorista",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/oficial",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ambito/dolares/tarjeta",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "cotizaciones",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "cripto",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "estado",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "eur",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "mayorista",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "oficial",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "dolares",
                  "tarjeta",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "uyu",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
