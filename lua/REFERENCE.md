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
local blue = client:blue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:blue():load({ id = "blue_id" })
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
local bolsa = client:bolsa(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:bolsa():load({ id = "bolsa_id" })
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
local brl = client:brl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:brl():load({ id = "brl_id" })
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
local clp = client:clp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:clp():load({ id = "clp_id" })
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
local contadoconliqui = client:contadoconliqui(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:contadoconliqui():load({ id = "contadoconliqui_id" })
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
local cotizacion_ambito = client:cotizacion_ambito(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `variacion` | ``$NUMBER`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:cotizacion_ambito():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:cotizacion_ambito():load({ id = "cotizacion_ambito_id" })
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
local cotizacione = client:cotizacione(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:cotizacione():list()
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
local cripto = client:cripto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:cripto():load({ id = "cripto_id" })
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
local dolare = client:dolare(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:dolare():list()
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
local estado = client:estado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:estado():load({ id = "estado_id" })
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
local eur = client:eur(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:eur():load({ id = "eur_id" })
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
local mayorista = client:mayorista(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:mayorista():load({ id = "mayorista_id" })
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
local oficial = client:oficial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:oficial():load({ id = "oficial_id" })
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
local tarjeta = client:tarjeta(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:tarjeta():load({ id = "tarjeta_id" })
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
local uyu = client:uyu(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | Yes |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha_actualizacion` | ``$STRING`` | Yes |  |
| `moneda` | ``$STRING`` | Yes |  |
| `nombre` | ``$STRING`` | Yes |  |
| `venta` | ``$NUMBER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:uyu():load({ id = "uyu_id" })
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

