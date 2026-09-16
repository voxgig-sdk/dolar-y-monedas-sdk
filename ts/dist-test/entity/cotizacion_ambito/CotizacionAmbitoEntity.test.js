"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CotizacionAmbitoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DOLAR_Y_MONEDAS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DolarYMonedasSDK.test();
        const ent = testsdk.CotizacionAmbito();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cotizacion_ambito.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "casa", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "compra", "req": false, "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "fechaActualizacion", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "moneda", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "nombre", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "variacion", "req": true, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "venta", "req": true, "type": "`$NUMBER`", "index$": 6 }], "name": "cotizacion_ambito", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares", "json": "{\"operationId\":\"get-ambito-dolares\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve todas las cotizaciones\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/blue", "json": "{\"operationId\":\"get-ambito-dolar-blue\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Blue\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/blue", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "blue" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/bolsa", "json": "{\"operationId\":\"get-ambito-dolar-bolsa\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Bolsa\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/bolsa", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "bolsa" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/contadoconliqui", "json": "{\"operationId\":\"get-ambito-dolar-contadoconliqui\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Contado con liquidación\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/contadoconliqui", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "contadoconliqui" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/cripto", "json": "{\"operationId\":\"get-ambito-dolar-cripto\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Cripto\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/cripto", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "cripto" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/mayorista", "json": "{\"operationId\":\"get-ambito-dolar-mayorista\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Mayorista\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/mayorista", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "mayorista" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/oficial", "json": "{\"operationId\":\"get-ambito-dolar-oficial\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Oficial\",\"headers\":{}}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/oficial", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "oficial" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/ambito/dolares/tarjeta", "json": "{\"operationId\":\"get-ambito-dolar-tarjeta\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"variacion\":{\"type\":\"number\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"variacion\",\"fechaActualizacion\"],\"title\":\"CotizacionAmbito\",\"type\":\"object\"}}},\"description\":\"Devuelve el valor del Dólar Tarjeta\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/ambito/dolares/tarjeta", "segments": [{ "lit": "v1" }, { "lit": "ambito" }, { "lit": "dolares" }, { "lit": "tarjeta" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "cotizacion_ambito", "name__orig": "cotizacion_ambito", "Name": "CotizacionAmbito", "name_": "cotizacion_ambito", "name-": "cotizacion-ambito", "NAME": "COTIZACION_AMBITO", "index$": 5 }, { "active": true, "entity": "cotizacion_ambito", "key$": "BasicCotizacionAmbitoFlow", "kind": "basic", "name": "BasicCotizacionAmbitoFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "cotizacion_ambito_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "cotizacion_ambito_ref01", "srcdatavar": "cotizacion_ambito_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cotizacion_ambito_ref01" } }], "index$": 1 }] }, 'CotizacionAmbito');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cotizacion_ambito_ref01_data = Object.values(setup.data.existing.cotizacion_ambito)[0];
        // LIST
        const cotizacion_ambito_ref01_ent = client.CotizacionAmbito();
        const cotizacion_ambito_ref01_match = {};
        const cotizacion_ambito_ref01_list = (await cotizacion_ambito_ref01_ent.list(cotizacion_ambito_ref01_match)).map((e) => e.data());
        // LOAD
        const cotizacion_ambito_ref01_match_dt0 = {};
        const cotizacion_ambito_ref01_data_dt0 = (await cotizacion_ambito_ref01_ent.load(cotizacion_ambito_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != cotizacion_ambito_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cotizacion_ambito/CotizacionAmbitoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DolarYMonedasSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cotizacion_ambito01', 'cotizacion_ambito02', 'cotizacion_ambito03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID': idmap,
        'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
        'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID'];
    const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DolarYMonedasSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CotizacionAmbitoEntity.test.js.map