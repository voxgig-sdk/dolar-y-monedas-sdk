# DolarYMonedas Ruby SDK



The Ruby SDK for the DolarYMonedas API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
gem install voxgig-sdk-dolar-y-monedas
```

Or add to your `Gemfile`:

```ruby
gem "voxgig-sdk-dolar-y-monedas"
```

Then run:

```bash
bundle install
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "DolarYMonedas_sdk"

client = DolarYMonedasSDK.new({
  "apikey" => ENV["DOLAR-Y-MONEDAS_APIKEY"],
})
```

### 3. Load a blue

```ruby
result, err = client.Blue().load({ "id" => "example_id" })
raise err if err
puts result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
raise err if err

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
end
```

### Prepare a request without sending it

```ruby
fetchdef, err = client.prepare({
  "path" => "/api/resource/{id}",
  "method" => "DELETE",
  "params" => { "id" => "example" },
})
raise err if err

puts fetchdef["url"]
puts fetchdef["method"]
puts fetchdef["headers"]
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = DolarYMonedasSDK.test

result, err = client.DolarYMonedas().load({ "id" => "test01" })
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = DolarYMonedasSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DOLAR-Y-MONEDAS_TEST_LIVE=TRUE
DOLAR-Y-MONEDAS_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### DolarYMonedasSDK

```ruby
require_relative "DolarYMonedas_sdk"
client = DolarYMonedasSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = DolarYMonedasSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DolarYMonedasSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> [Hash, err]` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> [Hash, err]` | Build and send an HTTP request. |
| `Blue` | `(data) -> BlueEntity` | Create a Blue entity instance. |
| `Bolsa` | `(data) -> BolsaEntity` | Create a Bolsa entity instance. |
| `Brl` | `(data) -> BrlEntity` | Create a Brl entity instance. |
| `Clp` | `(data) -> ClpEntity` | Create a Clp entity instance. |
| `Contadoconliqui` | `(data) -> ContadoconliquiEntity` | Create a Contadoconliqui entity instance. |
| `CotizacionAmbito` | `(data) -> CotizacionAmbitoEntity` | Create a CotizacionAmbito entity instance. |
| `Cotizacione` | `(data) -> CotizacioneEntity` | Create a Cotizacione entity instance. |
| `Cripto` | `(data) -> CriptoEntity` | Create a Cripto entity instance. |
| `Dolare` | `(data) -> DolareEntity` | Create a Dolare entity instance. |
| `Estado` | `(data) -> EstadoEntity` | Create a Estado entity instance. |
| `Eur` | `(data) -> EurEntity` | Create a Eur entity instance. |
| `Mayorista` | `(data) -> MayoristaEntity` | Create a Mayorista entity instance. |
| `Oficial` | `(data) -> OficialEntity` | Create a Oficial entity instance. |
| `Tarjeta` | `(data) -> TarjetaEntity` | Create a Tarjeta entity instance. |
| `Uyu` | `(data) -> UyuEntity` | Create a Uyu entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> [any, err]` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> [any, err]` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> [any, err]` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> [any, err]` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> [any, err]` | Remove an entity. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return `[any, err]`. The first value is a
`Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `false` and `err` contains the error value.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: List, Load.

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

Operations: List.

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

Operations: Load.

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

Operations: List.

API path: `/v1/dolares`

#### Estado

| Field | Description |
| --- | --- |
| `aleatorio` |  |
| `estado` |  |

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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

Operations: Load.

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
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── DolarYMonedas_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`DolarYMonedas_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
moon = client.Moon
moon.load({ "planet_id" => "earth", "id" => "luna" })

# moon.data_get now returns the loaded moon data
# moon.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
