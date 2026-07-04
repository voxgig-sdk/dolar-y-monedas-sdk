# DolarYMonedas TypeScript SDK



The TypeScript SDK for the DolarYMonedas API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases](https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { DolarYMonedasSDK } from '@voxgig-sdk/dolar-y-monedas'

const client = new DolarYMonedasSDK()
```

### 3. Load a blue

`load()` returns the entity directly and throws on failure:

```ts
try {
  const blue = await client.Blue().load({ id: 'example_id' })
  console.log(blue)
} catch (err) {
  console.error('load failed:', err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = DolarYMonedasSDK.test()

const blue = await client.Blue().load({ id: 'test01' })
// blue is a bare entity populated with mock response data
console.log(blue)
```

You can also use the instance method:

```ts
const client = new DolarYMonedasSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Blue()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new DolarYMonedasSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DOLAR_Y_MONEDAS_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### DolarYMonedasSDK

#### Constructor

```ts
new DolarYMonedasSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Blue(data?)` | `BlueEntity` | Create a Blue entity instance. |
| `Bolsa(data?)` | `BolsaEntity` | Create a Bolsa entity instance. |
| `Brl(data?)` | `BrlEntity` | Create a Brl entity instance. |
| `Clp(data?)` | `ClpEntity` | Create a Clp entity instance. |
| `Contadoconliqui(data?)` | `ContadoconliquiEntity` | Create a Contadoconliqui entity instance. |
| `CotizacionAmbito(data?)` | `CotizacionAmbitoEntity` | Create a CotizacionAmbito entity instance. |
| `Cotizacione(data?)` | `CotizacioneEntity` | Create a Cotizacione entity instance. |
| `Cripto(data?)` | `CriptoEntity` | Create a Cripto entity instance. |
| `Dolare(data?)` | `DolareEntity` | Create a Dolare entity instance. |
| `Estado(data?)` | `EstadoEntity` | Create an Estado entity instance. |
| `Eur(data?)` | `EurEntity` | Create an Eur entity instance. |
| `Mayorista(data?)` | `MayoristaEntity` | Create a Mayorista entity instance. |
| `Oficial(data?)` | `OficialEntity` | Create an Oficial entity instance. |
| `Tarjeta(data?)` | `TarjetaEntity` | Create a Tarjeta entity instance. |
| `Uyu(data?)` | `UyuEntity` | Create an Uyu entity instance. |
| `tester(testopts?, sdkopts?)` | `DolarYMonedasSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `DolarYMonedasSDK.test(testopts?, sdkopts?)` | `DolarYMonedasSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): DolarYMonedasSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Blue

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/blue`

#### Bolsa

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/bolsa`

#### Brl

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/cotizaciones/brl`

#### Clp

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/cotizaciones/clp`

#### Contadoconliqui

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/contadoconliqui`

#### CotizacionAmbito

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `variacion` |  |
| `venta` |  |

Operations: list, load.

API path: `/v1/ambito/dolares`

#### Cotizacione

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: list.

API path: `/v1/cotizaciones`

#### Cripto

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/cripto`

#### Dolare

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: list.

API path: `/v1/dolares`

#### Estado

| Field | Description |
| --- | --- |
| `aleatorio` |  |
| `estado` |  |

Operations: load.

API path: `/v1/estado`

#### Eur

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/cotizaciones/eur`

#### Mayorista

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/mayorista`

#### Oficial

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/oficial`

#### Tarjeta

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/dolares/tarjeta`

#### Uyu

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: load.

API path: `/v1/cotizaciones/uyu`



## Entities


### Blue

Create an instance: `const blue = client.Blue()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const blue = await client.Blue().load({ id: 'blue_id' })
```


### Bolsa

Create an instance: `const bolsa = client.Bolsa()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const bolsa = await client.Bolsa().load({ id: 'bolsa_id' })
```


### Brl

Create an instance: `const brl = client.Brl()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const brl = await client.Brl().load({ id: 'brl_id' })
```


### Clp

Create an instance: `const clp = client.Clp()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const clp = await client.Clp().load({ id: 'clp_id' })
```


### Contadoconliqui

Create an instance: `const contadoconliqui = client.Contadoconliqui()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const contadoconliqui = await client.Contadoconliqui().load({ id: 'contadoconliqui_id' })
```


### CotizacionAmbito

Create an instance: `const cotizacion_ambito = client.CotizacionAmbito()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `variacion` | ``$NUMBER`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const cotizacion_ambito = await client.CotizacionAmbito().load({ id: 'cotizacion_ambito_id' })
```

#### Example: List

```ts
const cotizacion_ambitos = await client.CotizacionAmbito().list()
```


### Cotizacione

Create an instance: `const cotizacione = client.Cotizacione()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: List

```ts
const cotizaciones = await client.Cotizacione().list()
```


### Cripto

Create an instance: `const cripto = client.Cripto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const cripto = await client.Cripto().load({ id: 'cripto_id' })
```


### Dolare

Create an instance: `const dolare = client.Dolare()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: List

```ts
const dolares = await client.Dolare().list()
```


### Estado

Create an instance: `const estado = client.Estado()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | ``$INTEGER`` |  |
| `estado` | ``$STRING`` |  |

#### Example: Load

```ts
const estado = await client.Estado().load({ id: 'estado_id' })
```


### Eur

Create an instance: `const eur = client.Eur()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const eur = await client.Eur().load({ id: 'eur_id' })
```


### Mayorista

Create an instance: `const mayorista = client.Mayorista()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const mayorista = await client.Mayorista().load({ id: 'mayorista_id' })
```


### Oficial

Create an instance: `const oficial = client.Oficial()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const oficial = await client.Oficial().load({ id: 'oficial_id' })
```


### Tarjeta

Create an instance: `const tarjeta = client.Tarjeta()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const tarjeta = await client.Tarjeta().load({ id: 'tarjeta_id' })
```


### Uyu

Create an instance: `const uyu = client.Uyu()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const uyu = await client.Uyu().load({ id: 'uyu_id' })
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
dolar-y-monedas/
├── src/
│   ├── DolarYMonedasSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { DolarYMonedasSDK } from '@voxgig-sdk/dolar-y-monedas'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const blue = client.Blue()
await blue.load({ id: "example_id" })

// blue.data() now returns the loaded blue data
// blue.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
