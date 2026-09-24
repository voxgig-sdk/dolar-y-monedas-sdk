"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
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
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "blue"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "blue"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "bolsa"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "bolsa"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "brl"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "brl"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "clp"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "clp"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "contadoconliqui"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "contadoconliqui"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "variacion",
                    "title": "Variacion",
                    "type": "`$NUMBER`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "ambito"
                                },
                                {
                                    "lit": "dolares"
                                }
                            ],
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "blue"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "bolsa"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "contadoconliqui"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "cripto"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "mayorista"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "oficial"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
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
                            "parts": [
                                "v1",
                                "ambito",
                                "dolares",
                                "tarjeta"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cotizaciones"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "cripto"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "cripto"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Aleatorio",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "estado",
                    "title": "Estado",
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
                            "parts": [
                                "v1",
                                "estado"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "eur"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "eur"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "mayorista"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "mayorista"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "oficial"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "oficial"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "dolares"
                                },
                                {
                                    "lit": "tarjeta"
                                }
                            ],
                            "parts": [
                                "v1",
                                "dolares",
                                "tarjeta"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Casa",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "compra",
                    "title": "Compra",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "fechaActualizacion",
                    "title": "Fecha Actualizacion",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "moneda",
                    "title": "Moneda",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "nombre",
                    "title": "Nombre",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "venta",
                    "title": "Venta",
                    "type": "`$NUMBER`",
                    "req": true
                }
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
                                    "lit": "v1"
                                },
                                {
                                    "lit": "cotizaciones"
                                },
                                {
                                    "lit": "uyu"
                                }
                            ],
                            "parts": [
                                "v1",
                                "cotizaciones",
                                "uyu"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
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