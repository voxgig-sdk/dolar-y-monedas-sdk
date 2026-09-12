"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'DolarYMonedas',
        slug: "dolar-y-monedas",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://dolarapi.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            blue: {},
            bolsa: {},
            brl: {},
            clp: {},
            contadoconliqui: {},
            cotizacion_ambito: {},
            cotizacione: {},
            cripto: {},
            dolare: {},
            estado: {},
            eur: {},
            mayorista: {},
            oficial: {},
            tarjeta: {},
            uyu: {},
        }
    };
    entity = {
        "blue": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "blue"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "blue"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "bolsa": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "bolsa"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "bolsa"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "brl": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "brl"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "brl"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "clp": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "clp"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "clp"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "contadoconliqui": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "contadoconliqui"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "contadoconliqui"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "cotizacion_ambito": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "variacion",
                    "req": true,
                    "type": "`$NUMBER`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares"
                            ]
                        }
                    ]
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "blue"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "blue"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/bolsa",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "bolsa"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "bolsa"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/contadoconliqui",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "contadoconliqui"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "contadoconliqui"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/cripto",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "cripto"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "cripto"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/mayorista",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "mayorista"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "mayorista"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/oficial",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "oficial"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "oficial"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/ambito/dolares/tarjeta",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "tarjeta"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "tarjeta"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "cotizacione": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "cotizaciones"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "cripto": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "cripto"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "cripto"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "dolare": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "estado": {
            "fields": [
                {
                    "name": "aleatorio",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "estado",
                    "type": "`$STRING`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "estado"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "estado"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "eur": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "eur"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "eur"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "mayorista": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "mayorista"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "mayorista"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "oficial": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "oficial"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "oficial"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tarjeta": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "tarjeta"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "dolares",
                                "tarjeta"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "uyu": {
            "fields": [
                {
                    "name": "casa",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "moneda",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "nombre",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "venta",
                    "req": true,
                    "type": "`$NUMBER`"
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "uyu"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "uyu"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map