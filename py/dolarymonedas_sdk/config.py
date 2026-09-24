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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "blue",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "blue",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "bolsa",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "bolsa",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "brl",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "brl",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "clp",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "clp",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "contadoconliqui",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "contadoconliqui",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "variacion",
            "title": "Variacion",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "cotizacion_ambito",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
              {
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
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "cotizacione",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "cotizaciones",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "cripto",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "cripto",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "dolare",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Aleatorio",
            "type": "`$INTEGER`",
          },
          {
            "name": "estado",
            "title": "Estado",
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
                "parts": [
                  "v1",
                  "estado",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "eur",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "eur",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "mayorista",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "mayorista",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "oficial",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "oficial",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "tarjeta",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "dolares",
                  "tarjeta",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Casa",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "compra",
            "title": "Compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fechaActualizacion",
            "title": "Fecha Actualizacion",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "moneda",
            "title": "Moneda",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "nombre",
            "title": "Nombre",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "venta",
            "title": "Venta",
            "type": "`$NUMBER`",
            "req": True,
          },
        ],
        "name": "uyu",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "v1",
                  "cotizaciones",
                  "uyu",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
