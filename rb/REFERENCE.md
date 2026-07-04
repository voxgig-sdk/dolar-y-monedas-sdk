# DolarYMonedas Ruby SDK Reference

Complete API reference for the DolarYMonedas Ruby SDK.


## DolarYMonedasSDK

### Constructor

```ruby
require_relative 'dolar-y-monedas_sdk'

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
blue = client.blue
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.blue.load({ "id" => "blue_id" })
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
bolsa = client.bolsa
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.bolsa.load({ "id" => "bolsa_id" })
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
brl = client.brl
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.brl.load({ "id" => "brl_id" })
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
clp = client.clp
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.clp.load({ "id" => "clp_id" })
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
contadoconliqui = client.contadoconliqui
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.contadoconliqui.load({ "id" => "contadoconliqui_id" })
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
cotizacion_ambito = client.cotizacion_ambito
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.cotizacion_ambito.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.cotizacion_ambito.load({ "id" => "cotizacion_ambito_id" })
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
cotizacione = client.cotizacione
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.cotizacione.list(nil)
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
cripto = client.cripto
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.cripto.load({ "id" => "cripto_id" })
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
dolare = client.dolare
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.dolare.list(nil)
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
estado = client.estado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.estado.load({ "id" => "estado_id" })
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
eur = client.eur
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.eur.load({ "id" => "eur_id" })
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
mayorista = client.mayorista
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.mayorista.load({ "id" => "mayorista_id" })
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
oficial = client.oficial
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.oficial.load({ "id" => "oficial_id" })
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
tarjeta = client.tarjeta
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.tarjeta.load({ "id" => "tarjeta_id" })
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
uyu = client.uyu
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.uyu.load({ "id" => "uyu_id" })
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

