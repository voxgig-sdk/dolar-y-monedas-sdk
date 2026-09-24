

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


describe('BrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.Brl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'brl.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"casa":{"a":true,"h":"Casa","n":"casa","r":true,"t":"`$STRING`","key$":"casa","index$":0},"compra":{"a":true,"h":"Compra","n":"compra","r":false,"t":"`$NUMBER`","key$":"compra","index$":1},"fechaActualizacion":{"a":true,"h":"Fecha Actualizacion","n":"fechaActualizacion","r":true,"t":"`$STRING`","key$":"fechaActualizacion","index$":2},"moneda":{"a":true,"h":"Moneda","n":"moneda","r":true,"t":"`$STRING`","key$":"moneda","index$":3},"nombre":{"a":true,"h":"Nombre","n":"nombre","r":true,"t":"`$STRING`","key$":"nombre","index$":4},"venta":{"a":true,"h":"Venta","n":"venta","r":true,"t":"`$NUMBER`","key$":"venta","index$":5}},"name":"brl","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/cotizaciones/brl","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/cotizaciones/brl","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"cotizaciones"},{"lit":"brl"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"brl","name__orig":"brl","Name":"Brl","name_":"brl","name-":"brl","NAME":"BRL","index$":2}, {"active":true,"entity":"brl","key$":"BasicBrlFlow","kind":"basic","name":"BasicBrlFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"brl_ref01","srcdatavar":"brl_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-brl_ref01"}}],"index$":0}]}, 'Brl', {"GET /v1/cotizaciones/brl":{"protocol":"http","operationId":"get-cotizacion-brl","responses":{"200":{"description":"Devuelve la cotización del Real Brasileño","content":{"application/json":{"schema":{"title":"Cotizacion","type":"object","x-stoplight":{"id":"ce96aa7960850"},"x-examples":{"Example 1":{"fechaActualizacion":"2021-01-01T00:00:00.000Z","compra":123.99,"venta":132.99}},"properties":{"compra":{"key$":"compra","type":"number"},"venta":{"key$":"venta","type":"number"},"casa":{"key$":"casa","type":"string"},"nombre":{"key$":"nombre","type":"string"},"moneda":{"key$":"moneda","type":"string"},"fechaActualizacion":{"key$":"fechaActualizacion","type":"string"}},"required":["venta","casa","nombre","moneda","fechaActualizacion"],"x-ref":"#/components/schemas/Cotizacion","index$":0}}},"headers":{}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let brl_ref01_data = Object.values(setup.data.existing.brl)[0] as any

    // LOAD
    const brl_ref01_ent = client.Brl()
    const brl_ref01_match_dt0: any = {}
    const brl_ref01_data_dt0 = (await brl_ref01_ent.load(brl_ref01_match_dt0)).data()
    assert(null != brl_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/brl/BrlTestData.json')

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
    ['brl01','brl02','brl03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_BRL_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_BRL_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_BRL_ENTID']
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
  
