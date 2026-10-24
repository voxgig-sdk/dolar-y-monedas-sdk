

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DolarYMonedasSDK, BaseFeature, config, stdutil } from '../../..'

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


describe('ContadoconliquiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.Contadoconliqui()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = DolarYMonedasSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Contadoconliqui().load({"casa":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contadoconliqui.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"casa":{"a":true,"h":"Casa","n":"casa","r":true,"t":"`$STRING`","key$":"casa","index$":0},"compra":{"a":true,"h":"Compra","n":"compra","r":false,"t":"`$NUMBER`","key$":"compra","index$":1},"fechaActualizacion":{"a":true,"h":"Fecha Actualizacion","n":"fechaActualizacion","r":true,"t":"`$STRING`","key$":"fechaActualizacion","index$":2},"moneda":{"a":true,"h":"Moneda","n":"moneda","r":true,"t":"`$STRING`","key$":"moneda","index$":3},"nombre":{"a":true,"h":"Nombre","n":"nombre","r":true,"t":"`$STRING`","key$":"nombre","index$":4},"venta":{"a":true,"h":"Venta","n":"venta","r":true,"t":"`$NUMBER`","key$":"venta","index$":5}},"name":"contadoconliqui","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/dolares/contadoconliqui","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/dolares/contadoconliqui","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"dolares"},{"lit":"contadoconliqui"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"contadoconliqui","name__orig":"contadoconliqui","Name":"Contadoconliqui","name_":"contadoconliqui","name-":"contadoconliqui","NAME":"CONTADOCONLIQUI","index$":4}, {"active":true,"entity":"contadoconliqui","key$":"BasicContadoconliquiFlow","kind":"basic","name":"BasicContadoconliquiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contadoconliqui_ref01","srcdatavar":"contadoconliqui_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contadoconliqui_ref01"}}],"index$":0}]}, 'Contadoconliqui', {"GET /v1/dolares/contadoconliqui":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contadoconliqui_ref01_data = Object.values(setup.data.existing.contadoconliqui)[0] as any

    // LOAD
    const contadoconliqui_ref01_ent = client.Contadoconliqui()
    const contadoconliqui_ref01_match_dt0: any = {}
    const contadoconliqui_ref01_data_dt0 = (await contadoconliqui_ref01_ent.load(contadoconliqui_ref01_match_dt0)).data()
    assert(null != contadoconliqui_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contadoconliqui/ContadoconliquiTestData.json')

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
    ['contadoconliqui01','contadoconliqui02','contadoconliqui03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_CONTADOCONLIQUI_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_CONTADOCONLIQUI_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_CONTADOCONLIQUI_ENTID']
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
  
