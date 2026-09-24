
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DolarYMonedasSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DolarYMonedasSDK.test()
    equal(testsdk instanceof DolarYMonedasSDK, true,
      'DolarYMonedasSDK.test() must return a client synchronously')
  })

})
