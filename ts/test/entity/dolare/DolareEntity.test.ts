

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


describe('DolareEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.Dolare()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('dolare hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of DolarYMonedasSDK.test(offline).Dolare().stream('list')) { }
    }, /offline/)

    for await (const _item of DolarYMonedasSDK.test(offline).Dolare()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = DolarYMonedasSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Dolare().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of DolarYMonedasSDK.test().Dolare().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new DolarYMonedasSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Dolare().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Dolare().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = DolarYMonedasSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Dolare().list({"casa":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dolare.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"casa":{"a":true,"h":"Casa","n":"casa","r":true,"t":"`$STRING`","key$":"casa","index$":0},"compra":{"a":true,"h":"Compra","n":"compra","r":false,"t":"`$NUMBER`","key$":"compra","index$":1},"fechaActualizacion":{"a":true,"h":"Fecha Actualizacion","n":"fechaActualizacion","r":true,"t":"`$STRING`","key$":"fechaActualizacion","index$":2},"moneda":{"a":true,"h":"Moneda","n":"moneda","r":true,"t":"`$STRING`","key$":"moneda","index$":3},"nombre":{"a":true,"h":"Nombre","n":"nombre","r":true,"t":"`$STRING`","key$":"nombre","index$":4},"venta":{"a":true,"h":"Venta","n":"venta","r":true,"t":"`$NUMBER`","key$":"venta","index$":5}},"name":"dolare","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/dolares","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/dolares","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"dolares"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"dolare","name__orig":"dolare","Name":"Dolare","name_":"dolare","name-":"dolare","NAME":"DOLARE","index$":8}, {"active":true,"entity":"dolare","key$":"BasicDolareFlow","kind":"basic","name":"BasicDolareFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dolare_ref01"}}],"index$":0}]}, 'Dolare', {"GET /v1/dolares":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dolare_ref01_data = Object.values(setup.data.existing.dolare)[0] as any

    // LIST
    const dolare_ref01_ent = client.Dolare()
    const dolare_ref01_match: any = {}

    const dolare_ref01_list = (await dolare_ref01_ent.list(dolare_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/dolare/DolareTestData.json')

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
    ['dolare01','dolare02','dolare03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_DOLARE_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_DOLARE_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_DOLARE_ENTID']
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
  
