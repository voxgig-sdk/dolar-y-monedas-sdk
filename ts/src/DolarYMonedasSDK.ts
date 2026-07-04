// DolarYMonedas Ts SDK

import { BlueEntity } from './entity/BlueEntity'
import { BolsaEntity } from './entity/BolsaEntity'
import { BrlEntity } from './entity/BrlEntity'
import { ClpEntity } from './entity/ClpEntity'
import { ContadoconliquiEntity } from './entity/ContadoconliquiEntity'
import { CotizacionAmbitoEntity } from './entity/CotizacionAmbitoEntity'
import { CotizacioneEntity } from './entity/CotizacioneEntity'
import { CriptoEntity } from './entity/CriptoEntity'
import { DolareEntity } from './entity/DolareEntity'
import { EstadoEntity } from './entity/EstadoEntity'
import { EurEntity } from './entity/EurEntity'
import { MayoristaEntity } from './entity/MayoristaEntity'
import { OficialEntity } from './entity/OficialEntity'
import { TarjetaEntity } from './entity/TarjetaEntity'
import { UyuEntity } from './entity/UyuEntity'

export type * from './DolarYMonedasTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { DolarYMonedasEntityBase } from './DolarYMonedasEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class DolarYMonedasSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _blue?: BlueEntity

  // Idiomatic facade: `client.blue.list()` / `client.blue.load({ id })`.
  get blue(): BlueEntity {
    return (this._blue ??= new BlueEntity(this, undefined))
  }

  /** @deprecated Use `client.blue` instead. */
  Blue(data?: any) {
    const self = this
    return new BlueEntity(self,data)
  }


  _bolsa?: BolsaEntity

  // Idiomatic facade: `client.bolsa.list()` / `client.bolsa.load({ id })`.
  get bolsa(): BolsaEntity {
    return (this._bolsa ??= new BolsaEntity(this, undefined))
  }

  /** @deprecated Use `client.bolsa` instead. */
  Bolsa(data?: any) {
    const self = this
    return new BolsaEntity(self,data)
  }


  _brl?: BrlEntity

  // Idiomatic facade: `client.brl.list()` / `client.brl.load({ id })`.
  get brl(): BrlEntity {
    return (this._brl ??= new BrlEntity(this, undefined))
  }

  /** @deprecated Use `client.brl` instead. */
  Brl(data?: any) {
    const self = this
    return new BrlEntity(self,data)
  }


  _clp?: ClpEntity

  // Idiomatic facade: `client.clp.list()` / `client.clp.load({ id })`.
  get clp(): ClpEntity {
    return (this._clp ??= new ClpEntity(this, undefined))
  }

  /** @deprecated Use `client.clp` instead. */
  Clp(data?: any) {
    const self = this
    return new ClpEntity(self,data)
  }


  _contadoconliqui?: ContadoconliquiEntity

  // Idiomatic facade: `client.contadoconliqui.list()` / `client.contadoconliqui.load({ id })`.
  get contadoconliqui(): ContadoconliquiEntity {
    return (this._contadoconliqui ??= new ContadoconliquiEntity(this, undefined))
  }

  /** @deprecated Use `client.contadoconliqui` instead. */
  Contadoconliqui(data?: any) {
    const self = this
    return new ContadoconliquiEntity(self,data)
  }


  _cotizacion_ambito?: CotizacionAmbitoEntity

  // Idiomatic facade: `client.cotizacion_ambito.list()` / `client.cotizacion_ambito.load({ id })`.
  get cotizacion_ambito(): CotizacionAmbitoEntity {
    return (this._cotizacion_ambito ??= new CotizacionAmbitoEntity(this, undefined))
  }

  /** @deprecated Use `client.cotizacion_ambito` instead. */
  CotizacionAmbito(data?: any) {
    const self = this
    return new CotizacionAmbitoEntity(self,data)
  }


  _cotizacione?: CotizacioneEntity

  // Idiomatic facade: `client.cotizacione.list()` / `client.cotizacione.load({ id })`.
  get cotizacione(): CotizacioneEntity {
    return (this._cotizacione ??= new CotizacioneEntity(this, undefined))
  }

  /** @deprecated Use `client.cotizacione` instead. */
  Cotizacione(data?: any) {
    const self = this
    return new CotizacioneEntity(self,data)
  }


  _cripto?: CriptoEntity

  // Idiomatic facade: `client.cripto.list()` / `client.cripto.load({ id })`.
  get cripto(): CriptoEntity {
    return (this._cripto ??= new CriptoEntity(this, undefined))
  }

  /** @deprecated Use `client.cripto` instead. */
  Cripto(data?: any) {
    const self = this
    return new CriptoEntity(self,data)
  }


  _dolare?: DolareEntity

  // Idiomatic facade: `client.dolare.list()` / `client.dolare.load({ id })`.
  get dolare(): DolareEntity {
    return (this._dolare ??= new DolareEntity(this, undefined))
  }

  /** @deprecated Use `client.dolare` instead. */
  Dolare(data?: any) {
    const self = this
    return new DolareEntity(self,data)
  }


  _estado?: EstadoEntity

  // Idiomatic facade: `client.estado.list()` / `client.estado.load({ id })`.
  get estado(): EstadoEntity {
    return (this._estado ??= new EstadoEntity(this, undefined))
  }

  /** @deprecated Use `client.estado` instead. */
  Estado(data?: any) {
    const self = this
    return new EstadoEntity(self,data)
  }


  _eur?: EurEntity

  // Idiomatic facade: `client.eur.list()` / `client.eur.load({ id })`.
  get eur(): EurEntity {
    return (this._eur ??= new EurEntity(this, undefined))
  }

  /** @deprecated Use `client.eur` instead. */
  Eur(data?: any) {
    const self = this
    return new EurEntity(self,data)
  }


  _mayorista?: MayoristaEntity

  // Idiomatic facade: `client.mayorista.list()` / `client.mayorista.load({ id })`.
  get mayorista(): MayoristaEntity {
    return (this._mayorista ??= new MayoristaEntity(this, undefined))
  }

  /** @deprecated Use `client.mayorista` instead. */
  Mayorista(data?: any) {
    const self = this
    return new MayoristaEntity(self,data)
  }


  _oficial?: OficialEntity

  // Idiomatic facade: `client.oficial.list()` / `client.oficial.load({ id })`.
  get oficial(): OficialEntity {
    return (this._oficial ??= new OficialEntity(this, undefined))
  }

  /** @deprecated Use `client.oficial` instead. */
  Oficial(data?: any) {
    const self = this
    return new OficialEntity(self,data)
  }


  _tarjeta?: TarjetaEntity

  // Idiomatic facade: `client.tarjeta.list()` / `client.tarjeta.load({ id })`.
  get tarjeta(): TarjetaEntity {
    return (this._tarjeta ??= new TarjetaEntity(this, undefined))
  }

  /** @deprecated Use `client.tarjeta` instead. */
  Tarjeta(data?: any) {
    const self = this
    return new TarjetaEntity(self,data)
  }


  _uyu?: UyuEntity

  // Idiomatic facade: `client.uyu.list()` / `client.uyu.load({ id })`.
  get uyu(): UyuEntity {
    return (this._uyu ??= new UyuEntity(this, undefined))
  }

  /** @deprecated Use `client.uyu` instead. */
  Uyu(data?: any) {
    const self = this
    return new UyuEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new DolarYMonedasSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return DolarYMonedasSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'DolarYMonedas' }
  }

  toString() {
    return 'DolarYMonedas ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = DolarYMonedasSDK


export {
  stdutil,

  BaseFeature,
  DolarYMonedasEntityBase,

  DolarYMonedasSDK,
  SDK,
}


