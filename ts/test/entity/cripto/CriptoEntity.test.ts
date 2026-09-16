

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CriptoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DOLAR_Y_MONEDAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DOLAR_Y_MONEDAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DolarYMonedasSDK.test()
    const ent = testsdk.Cripto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DOLAR_Y_MONEDAS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cripto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"casa","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"compra","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"fechaActualizacion","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"moneda","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"nombre","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"venta","req":true,"type":"`$NUMBER`","index$":5}],"name":"cripto","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/dolares/cripto","json":"{\"operationId\":\"get-dolar-cripto\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fechaActualizacion\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"venta\":{\"type\":\"number\"}},\"required\":[\"venta\",\"casa\",\"nombre\",\"moneda\",\"fechaActualizacion\"],\"title\":\"Cotizacion\",\"type\":\"object\"}}},\"description\":\"Devuelve la cotización del Dólar Cripto\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/dolares/cripto","segments":[{"lit":"v1"},{"lit":"dolares"},{"lit":"cripto"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cripto","name__orig":"cripto","Name":"Cripto","name_":"cripto","name-":"cripto","NAME":"CRIPTO","index$":7}, {"active":true,"entity":"cripto","key$":"BasicCriptoFlow","kind":"basic","name":"BasicCriptoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"cripto_ref01","srcdatavar":"cripto_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cripto_ref01"}}],"index$":0}]}, 'Cripto')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cripto_ref01_data = Object.values(setup.data.existing.cripto)[0] as any

    // LOAD
    const cripto_ref01_ent = client.Cripto()
    const cripto_ref01_match_dt0: any = {}
    const cripto_ref01_data_dt0 = (await cripto_ref01_ent.load(cripto_ref01_match_dt0)).data()
    assert(null != cripto_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cripto/CriptoTestData.json')

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
    ['cripto01','cripto02','cripto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DOLAR_Y_MONEDAS_TEST_CRIPTO_ENTID': idmap,
    'DOLAR_Y_MONEDAS_TEST_LIVE': 'FALSE',
    'DOLAR_Y_MONEDAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DOLAR_Y_MONEDAS_TEST_CRIPTO_ENTID']

  const live = 'TRUE' === env.DOLAR_Y_MONEDAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DOLAR_Y_MONEDAS_TEST_CRIPTO_ENTID']
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
  
