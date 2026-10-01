"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "blue",
        "accessor": "Blue",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/blue",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "bolsa",
        "accessor": "Bolsa",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/bolsa",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "brl",
        "accessor": "Brl",
        "op": "load",
        "method": "GET",
        "path": "/v1/cotizaciones/brl",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "clp",
        "accessor": "Clp",
        "op": "load",
        "method": "GET",
        "path": "/v1/cotizaciones/clp",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "contadoconliqui",
        "accessor": "Contadoconliqui",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/contadoconliqui",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "cotizacion_ambito",
        "accessor": "CotizacionAmbito",
        "op": "list",
        "method": "GET",
        "path": "/v1/ambito/dolares",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "compra": 1,
                "venta": 1,
                "casa": "x",
                "nombre": "x",
                "moneda": "x",
                "variacion": 1,
                "fechaActualizacion": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "cotizacione",
        "accessor": "Cotizacione",
        "op": "list",
        "method": "GET",
        "path": "/v1/cotizaciones",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "compra": 1,
                "venta": 1,
                "casa": "x",
                "nombre": "x",
                "moneda": "x",
                "fechaActualizacion": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "cripto",
        "accessor": "Cripto",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/cripto",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "dolare",
        "accessor": "Dolare",
        "op": "list",
        "method": "GET",
        "path": "/v1/dolares",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "compra": 1,
                "venta": 1,
                "casa": "x",
                "nombre": "x",
                "moneda": "x",
                "fechaActualizacion": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "estado",
        "accessor": "Estado",
        "op": "load",
        "method": "GET",
        "path": "/v1/estado",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "estado": "x",
            "aleatorio": 1
        },
        "idField": "id"
    },
    {
        "entity": "eur",
        "accessor": "Eur",
        "op": "load",
        "method": "GET",
        "path": "/v1/cotizaciones/eur",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "mayorista",
        "accessor": "Mayorista",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/mayorista",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "oficial",
        "accessor": "Oficial",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/oficial",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "tarjeta",
        "accessor": "Tarjeta",
        "op": "load",
        "method": "GET",
        "path": "/v1/dolares/tarjeta",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "uyu",
        "accessor": "Uyu",
        "op": "load",
        "method": "GET",
        "path": "/v1/cotizaciones/uyu",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "compra": 1,
            "venta": 1,
            "casa": "x",
            "nombre": "x",
            "moneda": "x",
            "fechaActualizacion": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map