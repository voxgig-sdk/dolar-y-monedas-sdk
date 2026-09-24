

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


describe('CotizacioneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.Cotizacione()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cotizacione.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"casa":{"a":true,"h":"Casa","n":"casa","r":true,"t":"`$STRING`","key$":"casa","index$":0},"compra":{"a":true,"h":"Compra","n":"compra","r":false,"t":"`$NUMBER`","key$":"compra","index$":1},"fechaActualizacion":{"a":true,"h":"Fecha Actualizacion","n":"fechaActualizacion","r":true,"t":"`$STRING`","key$":"fechaActualizacion","index$":2},"moneda":{"a":true,"h":"Moneda","n":"moneda","r":true,"t":"`$STRING`","key$":"moneda","index$":3},"nombre":{"a":true,"h":"Nombre","n":"nombre","r":true,"t":"`$STRING`","key$":"nombre","index$":4},"venta":{"a":true,"h":"Venta","n":"venta","r":true,"t":"`$NUMBER`","key$":"venta","index$":5}},"name":"cotizacione","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/cotizaciones","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/cotizaciones","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"cotizaciones"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cotizacione","name__orig":"cotizacione","Name":"Cotizacione","name_":"cotizacione","name-":"cotizacione","NAME":"COTIZACIONE","index$":6}, {"active":true,"entity":"cotizacione","key$":"BasicCotizacioneFlow","kind":"basic","name":"BasicCotizacioneFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cotizacione_ref01"}}],"index$":0}]}, 'Cotizacione', {"GET /v1/cotizaciones":{"protocol":"http","operationId":"get-cotizaciones","responses":{"200":{"description":"Devuelve todas las cotizaciones","content":{"application/json":{"schema":{"type":"array","items":{"title":"Cotizacion","type":"object","x-stoplight":{"id":"ce96aa7960850"},"x-examples":{"Example 1":{"fechaActualizacion":"2021-01-01T00:00:00.000Z","compra":123.99,"venta":132.99}},"properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","fechaActualizacion"],"x-ref":"#/components/schemas/Cotizacion","index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cotizacione_ref01_data = Object.values(setup.data.existing.cotizacione)[0] as any

    // LIST
    const cotizacione_ref01_ent = client.Cotizacione()
    const cotizacione_ref01_match: any = {}

    const cotizacione_ref01_list = (await cotizacione_ref01_ent.list(cotizacione_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cotizacione/CotizacioneTestData.json')

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
    ['cotizacione01','cotizacione02','cotizacione03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_COTIZACIONE_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_COTIZACIONE_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_COTIZACIONE_ENTID']
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
  
