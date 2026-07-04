# DolarYMonedas PHP SDK Reference

Complete API reference for the DolarYMonedas PHP SDK.


## DolarYMonedasSDK

### Constructor

```php
require_once __DIR__ . '/dolar-y-monedas_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
$blue = $client->blue();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->blue()->load(["id" => "blue_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BlueEntity`

Create a new `BlueEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## BolsaEntity

```php
$bolsa = $client->bolsa();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->bolsa()->load(["id" => "bolsa_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BolsaEntity`

Create a new `BolsaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## BrlEntity

```php
$brl = $client->brl();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->brl()->load(["id" => "brl_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BrlEntity`

Create a new `BrlEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ClpEntity

```php
$clp = $client->clp();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->clp()->load(["id" => "clp_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ClpEntity`

Create a new `ClpEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ContadoconliquiEntity

```php
$contadoconliqui = $client->contadoconliqui();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->contadoconliqui()->load(["id" => "contadoconliqui_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ContadoconliquiEntity`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CotizacionAmbitoEntity

```php
$cotizacion_ambito = $client->cotizacion_ambito();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->cotizacion_ambito()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->cotizacion_ambito()->load(["id" => "cotizacion_ambito_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CotizacionAmbitoEntity`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CotizacioneEntity

```php
$cotizacione = $client->cotizacione();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->cotizacione()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CotizacioneEntity`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CriptoEntity

```php
$cripto = $client->cripto();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->cripto()->load(["id" => "cripto_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CriptoEntity`

Create a new `CriptoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DolareEntity

```php
$dolare = $client->dolare();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->dolare()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DolareEntity`

Create a new `DolareEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## EstadoEntity

```php
$estado = $client->estado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->estado()->load(["id" => "estado_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EstadoEntity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## EurEntity

```php
$eur = $client->eur();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->eur()->load(["id" => "eur_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EurEntity`

Create a new `EurEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MayoristaEntity

```php
$mayorista = $client->mayorista();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->mayorista()->load(["id" => "mayorista_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MayoristaEntity`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## OficialEntity

```php
$oficial = $client->oficial();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->oficial()->load(["id" => "oficial_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): OficialEntity`

Create a new `OficialEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TarjetaEntity

```php
$tarjeta = $client->tarjeta();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->tarjeta()->load(["id" => "tarjeta_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TarjetaEntity`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## UyuEntity

```php
$uyu = $client->uyu();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->uyu()->load(["id" => "uyu_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): UyuEntity`

Create a new `UyuEntity` instance with the same client and
options.

#### `getName(): string`

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

