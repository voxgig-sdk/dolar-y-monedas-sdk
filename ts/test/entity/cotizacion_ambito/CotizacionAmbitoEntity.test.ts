

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DolarYMonedasSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CotizacionAmbitoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.CotizacionAmbito()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cotizacion_ambito.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"casa":{"a":true,"h":"Casa","n":"casa","r":true,"t":"`$STRING`","key$":"casa","index$":0},"compra":{"a":true,"h":"Compra","n":"compra","r":false,"t":"`$NUMBER`","key$":"compra","index$":1},"fechaActualizacion":{"a":true,"h":"Fecha Actualizacion","n":"fechaActualizacion","r":true,"t":"`$STRING`","key$":"fechaActualizacion","index$":2},"moneda":{"a":true,"h":"Moneda","n":"moneda","r":true,"t":"`$STRING`","key$":"moneda","index$":3},"nombre":{"a":true,"h":"Nombre","n":"nombre","r":true,"t":"`$STRING`","key$":"nombre","index$":4},"variacion":{"a":true,"h":"Variacion","n":"variacion","r":true,"t":"`$NUMBER`","key$":"variacion","index$":5},"venta":{"a":true,"h":"Venta","n":"venta","r":true,"t":"`$NUMBER`","key$":"venta","index$":6}},"name":"cotizacion_ambito","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/ambito/dolares","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/ambito/dolares/blue","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/blue","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"blue"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/ambito/dolares/bolsa","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/bolsa","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"bolsa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /v1/ambito/dolares/contadoconliqui","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/contadoconliqui","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"contadoconliqui"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /v1/ambito/dolares/cripto","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/cripto","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"cripto"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /v1/ambito/dolares/mayorista","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/mayorista","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"mayorista"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /v1/ambito/dolares/oficial","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/oficial","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"oficial"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /v1/ambito/dolares/tarjeta","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ambito/dolares/tarjeta","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"ambito"},{"lit":"dolares"},{"lit":"tarjeta"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cotizacion_ambito","name__orig":"cotizacion_ambito","Name":"CotizacionAmbito","name_":"cotizacion_ambito","name-":"cotizacion-ambito","NAME":"COTIZACION_AMBITO","index$":5}, {"active":true,"entity":"cotizacion_ambito","key$":"BasicCotizacionAmbitoFlow","kind":"basic","name":"BasicCotizacionAmbitoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cotizacion_ambito_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"cotizacion_ambito_ref01","srcdatavar":"cotizacion_ambito_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cotizacion_ambito_ref01"}}],"index$":1}]}, 'CotizacionAmbito', {"GET /v1/ambito/dolares":{"protocol":"http","operationId":"get-ambito-dolares","responses":{"200":{"description":"Devuelve todas las cotizaciones","content":{"application/json":{"schema":{"type":"array","items":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/blue":{"protocol":"http","operationId":"get-ambito-dolar-blue","responses":{"200":{"description":"Devuelve la cotización del Dólar Blue","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/bolsa":{"protocol":"http","operationId":"get-ambito-dolar-bolsa","responses":{"200":{"description":"Devuelve la cotización del Dólar Bolsa","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/contadoconliqui":{"protocol":"http","operationId":"get-ambito-dolar-contadoconliqui","responses":{"200":{"description":"Devuelve la cotización del Dólar Contado con liquidación","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/cripto":{"protocol":"http","operationId":"get-ambito-dolar-cripto","responses":{"200":{"description":"Devuelve la cotización del Dólar Cripto","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/mayorista":{"protocol":"http","operationId":"get-ambito-dolar-mayorista","responses":{"200":{"description":"Devuelve la cotización del Dólar Mayorista","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/oficial":{"protocol":"http","operationId":"get-ambito-dolar-oficial","responses":{"200":{"description":"Devuelve la cotización del Dólar Oficial","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}},"headers":{}}},"parameters":[],"securitySource":"unspecified"},"GET /v1/ambito/dolares/tarjeta":{"protocol":"http","operationId":"get-ambito-dolar-tarjeta","responses":{"200":{"description":"Devuelve el valor del Dólar Tarjeta","content":{"application/json":{"schema":{"title":"CotizacionAmbito","type":"object","properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"variacion":{"key$":"variacion","type":"number"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","variacion","fechaActualizacion"],"x-ref":"#/components/schemas/CotizacionAmbito","index$":0}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cotizacion_ambito_ref01_data = Object.values(setup.data.existing.cotizacion_ambito)[0] as any

    // LIST
    const cotizacion_ambito_ref01_ent = client.CotizacionAmbito()
    const cotizacion_ambito_ref01_match: any = {}

    const cotizacion_ambito_ref01_list = (await cotizacion_ambito_ref01_ent.list(cotizacion_ambito_ref01_match)).map((e: any) => e.data())


    // LOAD
    const cotizacion_ambito_ref01_match_dt0: any = {}
    const cotizacion_ambito_ref01_data_dt0 = (await cotizacion_ambito_ref01_ent.load(cotizacion_ambito_ref01_match_dt0)).data()
    assert(null != cotizacion_ambito_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cotizacion_ambito/CotizacionAmbitoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DolarYMonedasSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cotizacion_ambito01','cotizacion_ambito02','cotizacion_ambito03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_COTIZACION_AMBITO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DolarYMonedasSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
