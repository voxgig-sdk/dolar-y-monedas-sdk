
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DolarYMonedasSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DolarYMonedasSDK.test()
    equal(null !== testsdk, true)
  })

})
