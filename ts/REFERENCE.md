# DolarYMonedas TypeScript SDK Reference

Complete API reference for the DolarYMonedas TypeScript SDK.


## DolarYMonedasSDK

### Constructor

```ts
new DolarYMonedasSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DolarYMonedasSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = DolarYMonedasSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `DolarYMonedasSDK` instance in test mode.


### Instance Methods

#### `Blue(data?: object)`

Create a new `Blue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BlueEntity` instance.

#### `Bolsa(data?: object)`

Create a new `Bolsa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BolsaEntity` instance.

#### `Brl(data?: object)`

Create a new `Brl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrlEntity` instance.

#### `Clp(data?: object)`

Create a new `Clp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClpEntity` instance.

#### `Contadoconliqui(data?: object)`

Create a new `Contadoconliqui` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContadoconliquiEntity` instance.

#### `CotizacionAmbito(data?: object)`

Create a new `CotizacionAmbito` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CotizacionAmbitoEntity` instance.

#### `Cotizacione(data?: object)`

Create a new `Cotizacione` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CotizacioneEntity` instance.

#### `Cripto(data?: object)`

Create a new `Cripto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CriptoEntity` instance.

#### `Dolare(data?: object)`

Create a new `Dolare` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DolareEntity` instance.

#### `Estado(data?: object)`

Create a new `Estado` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EstadoEntity` instance.

#### `Eur(data?: object)`

Create a new `Eur` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EurEntity` instance.

#### `Mayorista(data?: object)`

Create a new `Mayorista` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MayoristaEntity` instance.

#### `Oficial(data?: object)`

Create a new `Oficial` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OficialEntity` instance.

#### `Tarjeta(data?: object)`

Create a new `Tarjeta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TarjetaEntity` instance.

#### `Uyu(data?: object)`

Create a new `Uyu` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UyuEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `DolarYMonedasSDK.test()`.

**Returns:** `DolarYMonedasSDK` instance in test mode.


---

## BlueEntity

```ts
const blue = client.Blue()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Blue().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BlueEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BolsaEntity

```ts
const bolsa = client.Bolsa()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Bolsa().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BolsaEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrlEntity

```ts
const brl = client.Brl()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Brl().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrlEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClpEntity

```ts
const clp = client.Clp()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Clp().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClpEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContadoconliquiEntity

```ts
const contadoconliqui = client.Contadoconliqui()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Contadoconliqui().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CotizacionAmbitoEntity

```ts
const cotizacion_ambito = client.CotizacionAmbito()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CotizacionAmbito().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CotizacionAmbito().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CotizacioneEntity

```ts
const cotizacione = client.Cotizacione()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cotizacione().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CriptoEntity

```ts
const cripto = client.Cripto()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cripto().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CriptoEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DolareEntity

```ts
const dolare = client.Dolare()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dolare().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DolareEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EstadoEntity

```ts
const estado = client.Estado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `number` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Estado().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EstadoEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EurEntity

```ts
const eur = client.Eur()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Eur().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EurEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MayoristaEntity

```ts
const mayorista = client.Mayorista()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Mayorista().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OficialEntity

```ts
const oficial = client.Oficial()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Oficial().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OficialEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TarjetaEntity

```ts
const tarjeta = client.Tarjeta()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tarjeta().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UyuEntity

```ts
const uyu = client.Uyu()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Uyu().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UyuEntity` instance with the same client and
options.

#### `client()`

Return the parent `DolarYMonedasSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new DolarYMonedasSDK({
  feature: {
    test: { active: true },
  }
})
```

