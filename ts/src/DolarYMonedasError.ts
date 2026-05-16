
import { Context } from './Context'


class DolarYMonedasError extends Error {

  isDolarYMonedasError = true

  sdk = 'DolarYMonedas'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DolarYMonedasError
}

