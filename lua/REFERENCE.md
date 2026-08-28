# DolarYMonedas Lua SDK Reference

Complete API reference for the DolarYMonedas Lua SDK.


## DolarYMonedasSDK

### Constructor

```lua
local sdk = require("dolar-y-monedas_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Blue(data)`

Create a new `Blue` entity instance. Pass `nil` for no initial data.

#### `Bolsa(data)`

Create a new `Bolsa` entity instance. Pass `nil` for no initial data.

#### `Brl(data)`

Create a new `Brl` entity instance. Pass `nil` for no initial data.

#### `Clp(data)`

Create a new `Clp` entity instance. Pass `nil` for no initial data.

#### `Contadoconliqui(data)`

Create a new `Contadoconliqui` entity instance. Pass `nil` for no initial data.

#### `CotizacionAmbito(data)`

Create a new `CotizacionAmbito` entity instance. Pass `nil` for no initial data.

#### `Cotizacione(data)`

Create a new `Cotizacione` entity instance. Pass `nil` for no initial data.

#### `Cripto(data)`

Create a new `Cripto` entity instance. Pass `nil` for no initial data.

#### `Dolare(data)`

Create a new `Dolare` entity instance. Pass `nil` for no initial data.

#### `Estado(data)`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `Eur(data)`

Create a new `Eur` entity instance. Pass `nil` for no initial data.

#### `Mayorista(data)`

Create a new `Mayorista` entity instance. Pass `nil` for no initial data.

#### `Oficial(data)`

Create a new `Oficial` entity instance. Pass `nil` for no initial data.

#### `Tarjeta(data)`

Create a new `Tarjeta` entity instance. Pass `nil` for no initial data.

#### `Uyu(data)`

Create a new `Uyu` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## BlueEntity

```lua
local blue = client:Blue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Blue():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BolsaEntity

```lua
local bolsa = client:Bolsa(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Bolsa():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BolsaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrlEntity

```lua
local brl = client:Brl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Brl():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClpEntity

```lua
local clp = client:Clp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Clp():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContadoconliquiEntity

```lua
local contadoconliqui = client:Contadoconliqui(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Contadoconliqui():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CotizacionAmbitoEntity

```lua
local cotizacion_ambito = client:CotizacionAmbito(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `variacion` | `number` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CotizacionAmbito():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CotizacionAmbito():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CotizacioneEntity

```lua
local cotizacione = client:Cotizacione(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cotizacione():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CriptoEntity

```lua
local cripto = client:Cripto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cripto():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CriptoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DolareEntity

```lua
local dolare = client:Dolare(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Dolare():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DolareEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EstadoEntity

```lua
local estado = client:Estado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `number` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Estado():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EurEntity

```lua
local eur = client:Eur(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Eur():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EurEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MayoristaEntity

```lua
local mayorista = client:Mayorista(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Mayorista():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OficialEntity

```lua
local oficial = client:Oficial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Oficial():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OficialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TarjetaEntity

```lua
local tarjeta = client:Tarjeta(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tarjeta():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UyuEntity

```lua
local uyu = client:Uyu(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `number` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Uyu():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UyuEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

