# DolarYMonedas PHP SDK Reference

Complete API reference for the DolarYMonedas PHP SDK.


## DolarYMonedasSDK

### Constructor

```php
require_once __DIR__ . '/dolarymonedas_sdk.php';

$client = new DolarYMonedasSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DolarYMonedasSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = DolarYMonedasSDK::test();
```


### Instance Methods

#### `Blue($data = null)`

Create a new `BlueEntity` instance. Pass `null` for no initial data.

#### `Bolsa($data = null)`

Create a new `BolsaEntity` instance. Pass `null` for no initial data.

#### `Brl($data = null)`

Create a new `BrlEntity` instance. Pass `null` for no initial data.

#### `Clp($data = null)`

Create a new `ClpEntity` instance. Pass `null` for no initial data.

#### `Contadoconliqui($data = null)`

Create a new `ContadoconliquiEntity` instance. Pass `null` for no initial data.

#### `CotizacionAmbito($data = null)`

Create a new `CotizacionAmbitoEntity` instance. Pass `null` for no initial data.

#### `Cotizacione($data = null)`

Create a new `CotizacioneEntity` instance. Pass `null` for no initial data.

#### `Cripto($data = null)`

Create a new `CriptoEntity` instance. Pass `null` for no initial data.

#### `Dolare($data = null)`

Create a new `DolareEntity` instance. Pass `null` for no initial data.

#### `Estado($data = null)`

Create a new `EstadoEntity` instance. Pass `null` for no initial data.

#### `Eur($data = null)`

Create a new `EurEntity` instance. Pass `null` for no initial data.

#### `Mayorista($data = null)`

Create a new `MayoristaEntity` instance. Pass `null` for no initial data.

#### `Oficial($data = null)`

Create a new `OficialEntity` instance. Pass `null` for no initial data.

#### `Tarjeta($data = null)`

Create a new `TarjetaEntity` instance. Pass `null` for no initial data.

#### `Uyu($data = null)`

Create a new `UyuEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): DolarYMonedasUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BlueEntity

```php
$blue = $client->Blue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Blue()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BlueEntity`

Create a new `BlueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BolsaEntity

```php
$bolsa = $client->Bolsa();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Bolsa()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BolsaEntity`

Create a new `BolsaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrlEntity

```php
$brl = $client->Brl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Brl()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrlEntity`

Create a new `BrlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClpEntity

```php
$clp = $client->Clp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Clp()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClpEntity`

Create a new `ClpEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContadoconliquiEntity

```php
$contadoconliqui = $client->Contadoconliqui();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Contadoconliqui()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContadoconliquiEntity`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CotizacionAmbitoEntity

```php
$cotizacion_ambito = $client->CotizacionAmbito();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `variacion` | `float` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CotizacionAmbito()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CotizacionAmbito()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CotizacionAmbitoEntity`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CotizacioneEntity

```php
$cotizacione = $client->Cotizacione();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cotizacione()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CotizacioneEntity`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CriptoEntity

```php
$cripto = $client->Cripto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cripto()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CriptoEntity`

Create a new `CriptoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DolareEntity

```php
$dolare = $client->Dolare();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dolare()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DolareEntity`

Create a new `DolareEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EstadoEntity

```php
$estado = $client->Estado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `int` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Estado()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EstadoEntity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EurEntity

```php
$eur = $client->Eur();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Eur()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EurEntity`

Create a new `EurEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MayoristaEntity

```php
$mayorista = $client->Mayorista();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Mayorista()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MayoristaEntity`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OficialEntity

```php
$oficial = $client->Oficial();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Oficial()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OficialEntity`

Create a new `OficialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TarjetaEntity

```php
$tarjeta = $client->Tarjeta();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tarjeta()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TarjetaEntity`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UyuEntity

```php
$uyu = $client->Uyu();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float` | No |  |
| `fecha_actualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Uyu()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UyuEntity`

Create a new `UyuEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new DolarYMonedasSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

