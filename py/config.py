# DolarYMonedas SDK configuration


def make_config():
    return {
        "main": {
            "name": "DolarYMonedas",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "blue",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/blue",
                "parts": [
                  "v1",
                  "dolares",
                  "blue",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "bolsa",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/bolsa",
                "parts": [
                  "v1",
                  "dolares",
                  "bolsa",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "brl",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones/brl",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "brl",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "clp",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones/clp",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "clp",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "contadoconliqui",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/contadoconliqui",
                "parts": [
                  "v1",
                  "dolares",
                  "contadoconliqui",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "variacion",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
        ],
        "name": "cotizacion_ambito",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/blue",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "blue",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/bolsa",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "bolsa",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/contadoconliqui",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "contadoconliqui",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 2,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/cripto",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "cripto",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 3,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/mayorista",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "mayorista",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 4,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/oficial",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "oficial",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 5,
              },
              {
                "method": "GET",
                "orig": "/v1/ambito/dolares/tarjeta",
                "parts": [
                  "v1",
                  "ambito",
                  "dolares",
                  "tarjeta",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 6,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "cotizacione",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones",
                "parts": [
                  "v1",
                  "cotizaciones",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "cripto",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/cripto",
                "parts": [
                  "v1",
                  "dolares",
                  "cripto",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "dolare",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares",
                "parts": [
                  "v1",
                  "dolares",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "estado",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "estado",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/estado",
                "parts": [
                  "v1",
                  "estado",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "eur",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones/eur",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "eur",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "mayorista",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/mayorista",
                "parts": [
                  "v1",
                  "dolares",
                  "mayorista",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "oficial",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/oficial",
                "parts": [
                  "v1",
                  "dolares",
                  "oficial",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "tarjeta",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/dolares/tarjeta",
                "parts": [
                  "v1",
                  "dolares",
                  "tarjeta",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha_actualizacion",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "venta",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "uyu",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones/uyu",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "uyu",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
