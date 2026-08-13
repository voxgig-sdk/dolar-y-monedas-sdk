# DolarYMonedas Lua SDK



The Lua SDK for the DolarYMonedas API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Blue()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("dolar-y-monedas_sdk")

local client = sdk.new()
```

### 3. Load a blue

```lua
local blue, err = client:Blue():load()
if err then error(err) end
print(blue)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local cripto, err = client:Cripto():load()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Cripto():load()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### DolarYMonedasSDK

```lua
local sdk = require("dolar-y-monedas_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DolarYMonedasSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local blue, err = client:Blue():load()
    if err then error(err) end
    -- blue is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local blue = client:Blue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local blue, err = client:Blue():load()
```


### Bolsa

Create an instance: `local bolsa = client:Bolsa(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local bolsa, err = client:Bolsa():load()
```


### Brl

Create an instance: `local brl = client:Brl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local brl, err = client:Brl():load()
```


### Clp

Create an instance: `local clp = client:Clp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local clp, err = client:Clp():load()
```


### Contadoconliqui

Create an instance: `local contadoconliqui = client:Contadoconliqui(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local contadoconliqui, err = client:Contadoconliqui():load()
```


### CotizacionAmbito

Create an instance: `local cotizacion_ambito = client:CotizacionAmbito(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `variacion` | `number` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local cotizacion_ambito, err = client:CotizacionAmbito():load()
```

#### Example: List

```lua
local cotizacion_ambitos, err = client:CotizacionAmbito():list()
```


### Cotizacione

Create an instance: `local cotizacione = client:Cotizacione(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: List

```lua
local cotizaciones, err = client:Cotizacione():list()
```


### Cripto

Create an instance: `local cripto = client:Cripto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local cripto, err = client:Cripto():load()
```


### Dolare

Create an instance: `local dolare = client:Dolare(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: List

```lua
local dolares, err = client:Dolare():list()
```


### Estado

Create an instance: `local estado = client:Estado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `number` |  |
| `estado` | `string` |  |

#### Example: Load

```lua
local estado, err = client:Estado():load()
```


### Eur

Create an instance: `local eur = client:Eur(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local eur, err = client:Eur():load()
```


### Mayorista

Create an instance: `local mayorista = client:Mayorista(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local mayorista, err = client:Mayorista():load()
```


### Oficial

Create an instance: `local oficial = client:Oficial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local oficial, err = client:Oficial():load()
```


### Tarjeta

Create an instance: `local tarjeta = client:Tarjeta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local tarjeta, err = client:Tarjeta():load()
```


### Uyu

Create an instance: `local uyu = client:Uyu(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fechaActualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local uyu, err = client:Uyu():load()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── dolar-y-monedas_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`dolar-y-monedas_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local cripto = client:Cripto()
cripto:load()

-- cripto:data_get() now returns the cripto data from the last load
-- cripto:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
