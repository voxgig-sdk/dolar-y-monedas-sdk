# DolarYMonedas Ruby SDK



The Ruby SDK for the DolarYMonedas API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Blue` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases](https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "DolarYMonedas_sdk"

client = DolarYMonedasSDK.new
```

### 3. Load a blue

```ruby
begin
  # load returns the ENTITY — call data_get for the Blue record (raises on error).
  blue = client.Blue.load()
  puts blue
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  cripto = client.Cripto.load()
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = DolarYMonedasSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
cripto = client.Cripto.load()
puts cripto
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
DOLAR_Y_MONEDAS_TEST_LIVE=TRUE
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
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Blue` | `(data) -> BlueEntity` | Create a Blue entity instance. |
| `Bolsa` | `(data) -> BolsaEntity` | Create a Bolsa entity instance. |
| `Brl` | `(data) -> BrlEntity` | Create a Brl entity instance. |
| `Clp` | `(data) -> ClpEntity` | Create a Clp entity instance. |
| `Contadoconliqui` | `(data) -> ContadoconliquiEntity` | Create a Contadoconliqui entity instance. |
| `CotizacionAmbito` | `(data) -> CotizacionAmbitoEntity` | Create a CotizacionAmbito entity instance. |
| `Cotizacione` | `(data) -> CotizacioneEntity` | Create a Cotizacione entity instance. |
| `Cripto` | `(data) -> CriptoEntity` | Create a Cripto entity instance. |
| `Dolare` | `(data) -> DolareEntity` | Create a Dolare entity instance. |
| `Estado` | `(data) -> EstadoEntity` | Create an Estado entity instance. |
| `Eur` | `(data) -> EurEntity` | Create an Eur entity instance. |
| `Mayorista` | `(data) -> MayoristaEntity` | Create a Mayorista entity instance. |
| `Oficial` | `(data) -> OficialEntity` | Create an Oficial entity instance. |
| `Tarjeta` | `(data) -> TarjetaEntity` | Create a Tarjeta entity instance. |
| `Uyu` | `(data) -> UyuEntity` | Create an Uyu entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `DolarYMonedasError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Blue

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
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
| `fechaActualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: Load.

API path: `/v1/cotizaciones/uyu`



## Entities


### Blue

Create an instance: `blue = client.Blue`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Blue record (raises on error).
blue = client.Blue.load()
```


### Bolsa

Create an instance: `bolsa = client.Bolsa`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Bolsa record (raises on error).
bolsa = client.Bolsa.load()
```


### Brl

Create an instance: `brl = client.Brl`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Brl record (raises on error).
brl = client.Brl.load()
```


### Clp

Create an instance: `clp = client.Clp`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Clp record (raises on error).
clp = client.Clp.load()
```


### Contadoconliqui

Create an instance: `contadoconliqui = client.Contadoconliqui`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Contadoconliqui record (raises on error).
contadoconliqui = client.Contadoconliqui.load()
```


### CotizacionAmbito

Create an instance: `cotizacion_ambito = client.CotizacionAmbito`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `variacion` | `Float` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CotizacionAmbito record (raises on error).
cotizacion_ambito = client.CotizacionAmbito.load()
```

#### Example: List

```ruby
# list returns an Array of CotizacionAmbito records (raises on error).
cotizacion_ambitos = client.CotizacionAmbito.list
```


### Cotizacione

Create an instance: `cotizacione = client.Cotizacione`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of Cotizacione records (raises on error).
cotizaciones = client.Cotizacione.list
```


### Cripto

Create an instance: `cripto = client.Cripto`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Cripto record (raises on error).
cripto = client.Cripto.load()
```


### Dolare

Create an instance: `dolare = client.Dolare`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of Dolare records (raises on error).
dolares = client.Dolare.list
```


### Estado

Create an instance: `estado = client.Estado`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `Integer` |  |
| `estado` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Estado record (raises on error).
estado = client.Estado.load()
```


### Eur

Create an instance: `eur = client.Eur`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Eur record (raises on error).
eur = client.Eur.load()
```


### Mayorista

Create an instance: `mayorista = client.Mayorista`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Mayorista record (raises on error).
mayorista = client.Mayorista.load()
```


### Oficial

Create an instance: `oficial = client.Oficial`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Oficial record (raises on error).
oficial = client.Oficial.load()
```


### Tarjeta

Create an instance: `tarjeta = client.Tarjeta`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Tarjeta record (raises on error).
tarjeta = client.Tarjeta.load()
```


### Uyu

Create an instance: `uyu = client.Uyu`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fechaActualizacion` | `String` |  |
| `moneda` | `String` |  |
| `nombre` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Uyu record (raises on error).
uyu = client.Uyu.load()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

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
cripto = client.Cripto
cripto.load()

# cripto.data_get now returns the cripto data from the last load
# cripto.match_get returns the last match criteria
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
