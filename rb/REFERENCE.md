# DolarYMonedas Ruby SDK Reference

Complete API reference for the DolarYMonedas Ruby SDK.


## DolarYMonedasSDK

### Constructor

```ruby
require_relative 'DolarYMonedas_sdk'

client = DolarYMonedasSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DolarYMonedasSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = DolarYMonedasSDK.test
```


### Instance Methods

#### `Blue(data = nil)`

Create a new `Blue` entity instance. Pass `nil` for no initial data.

#### `Bolsa(data = nil)`

Create a new `Bolsa` entity instance. Pass `nil` for no initial data.

#### `Brl(data = nil)`

Create a new `Brl` entity instance. Pass `nil` for no initial data.

#### `Clp(data = nil)`

Create a new `Clp` entity instance. Pass `nil` for no initial data.

#### `Contadoconliqui(data = nil)`

Create a new `Contadoconliqui` entity instance. Pass `nil` for no initial data.

#### `CotizacionAmbito(data = nil)`

Create a new `CotizacionAmbito` entity instance. Pass `nil` for no initial data.

#### `Cotizacione(data = nil)`

Create a new `Cotizacione` entity instance. Pass `nil` for no initial data.

#### `Cripto(data = nil)`

Create a new `Cripto` entity instance. Pass `nil` for no initial data.

#### `Dolare(data = nil)`

Create a new `Dolare` entity instance. Pass `nil` for no initial data.

#### `Estado(data = nil)`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `Eur(data = nil)`

Create a new `Eur` entity instance. Pass `nil` for no initial data.

#### `Mayorista(data = nil)`

Create a new `Mayorista` entity instance. Pass `nil` for no initial data.

#### `Oficial(data = nil)`

Create a new `Oficial` entity instance. Pass `nil` for no initial data.

#### `Tarjeta(data = nil)`

Create a new `Tarjeta` entity instance. Pass `nil` for no initial data.

#### `Uyu(data = nil)`

Create a new `Uyu` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## BlueEntity

```ruby
blue = client.Blue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Blue.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BlueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BolsaEntity

```ruby
bolsa = client.Bolsa
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Bolsa.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BolsaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BrlEntity

```ruby
brl = client.Brl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Brl.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BrlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClpEntity

```ruby
clp = client.Clp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Clp.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContadoconliquiEntity

```ruby
contadoconliqui = client.Contadoconliqui
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Contadoconliqui.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CotizacionAmbitoEntity

```ruby
cotizacion_ambito = client.CotizacionAmbito
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `variacion` | `Float` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CotizacionAmbito.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CotizacionAmbito.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CotizacioneEntity

```ruby
cotizacione = client.Cotizacione
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cotizacione.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CriptoEntity

```ruby
cripto = client.Cripto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Cripto.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CriptoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DolareEntity

```ruby
dolare = client.Dolare
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Dolare.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DolareEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EstadoEntity

```ruby
estado = client.Estado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `Integer` | No |  |
| `estado` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Estado.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EurEntity

```ruby
eur = client.Eur
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Eur.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EurEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MayoristaEntity

```ruby
mayorista = client.Mayorista
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Mayorista.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OficialEntity

```ruby
oficial = client.Oficial
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Oficial.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OficialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TarjetaEntity

```ruby
tarjeta = client.Tarjeta
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tarjeta.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UyuEntity

```ruby
uyu = client.Uyu
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | Yes |  |
| `compra` | `Float` | No |  |
| `fecha_actualizacion` | `String` | Yes |  |
| `moneda` | `String` | Yes |  |
| `nombre` | `String` | Yes |  |
| `venta` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Uyu.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UyuEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = DolarYMonedasSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

