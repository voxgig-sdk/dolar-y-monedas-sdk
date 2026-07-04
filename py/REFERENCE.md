# DolarYMonedas Python SDK Reference

Complete API reference for the DolarYMonedas Python SDK.


## DolarYMonedasSDK

### Constructor

```python
from dolar-y-monedas_sdk import DolarYMonedasSDK

client = DolarYMonedasSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DolarYMonedasSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DolarYMonedasSDK.test()
```


### Instance Methods

#### `Blue(data=None)`

Create a new `BlueEntity` instance. Pass `None` for no initial data.

#### `Bolsa(data=None)`

Create a new `BolsaEntity` instance. Pass `None` for no initial data.

#### `Brl(data=None)`

Create a new `BrlEntity` instance. Pass `None` for no initial data.

#### `Clp(data=None)`

Create a new `ClpEntity` instance. Pass `None` for no initial data.

#### `Contadoconliqui(data=None)`

Create a new `ContadoconliquiEntity` instance. Pass `None` for no initial data.

#### `CotizacionAmbito(data=None)`

Create a new `CotizacionAmbitoEntity` instance. Pass `None` for no initial data.

#### `Cotizacione(data=None)`

Create a new `CotizacioneEntity` instance. Pass `None` for no initial data.

#### `Cripto(data=None)`

Create a new `CriptoEntity` instance. Pass `None` for no initial data.

#### `Dolare(data=None)`

Create a new `DolareEntity` instance. Pass `None` for no initial data.

#### `Estado(data=None)`

Create a new `EstadoEntity` instance. Pass `None` for no initial data.

#### `Eur(data=None)`

Create a new `EurEntity` instance. Pass `None` for no initial data.

#### `Mayorista(data=None)`

Create a new `MayoristaEntity` instance. Pass `None` for no initial data.

#### `Oficial(data=None)`

Create a new `OficialEntity` instance. Pass `None` for no initial data.

#### `Tarjeta(data=None)`

Create a new `TarjetaEntity` instance. Pass `None` for no initial data.

#### `Uyu(data=None)`

Create a new `UyuEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BlueEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.blue.load({"id": "blue_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BolsaEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.bolsa.load({"id": "bolsa_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BolsaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrlEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.brl.load({"id": "brl_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClpEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.clp.load({"id": "clp_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContadoconliquiEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.contadoconliqui.load({"id": "contadoconliqui_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContadoconliquiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CotizacionAmbitoEntity

```python
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.cotizacion_ambito.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.cotizacion_ambito.load({"id": "cotizacion_ambito_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacionAmbitoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CotizacioneEntity

```python
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.cotizacione.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacioneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CriptoEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.cripto.load({"id": "cripto_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CriptoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DolareEntity

```python
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.dolare.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DolareEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EstadoEntity

```python
estado = client.estado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.estado.load({"id": "estado_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EstadoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EurEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.eur.load({"id": "eur_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EurEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MayoristaEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.mayorista.load({"id": "mayorista_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MayoristaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OficialEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.oficial.load({"id": "oficial_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OficialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TarjetaEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.tarjeta.load({"id": "tarjeta_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TarjetaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UyuEntity

```python
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.uyu.load({"id": "uyu_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UyuEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DolarYMonedasSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

