# DolarYMonedas PHP SDK



The PHP SDK for the DolarYMonedas API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Blue()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases](https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'dolarymonedas_sdk.php';

$client = new DolarYMonedasSDK();
```

### 3. Load a blue

```php
try {
    // load() returns the bare Blue record (throws on error).
    $blue = $client->Blue()->load();
    print_r($blue);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $blue = $client->Blue()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = DolarYMonedasSDK::test();

// Entity ops return the bare mock record (throws on error).
$blue = $client->Blue()->load();
print_r($blue);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new DolarYMonedasSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
DOLAR_Y_MONEDAS_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### DolarYMonedasSDK

```php
require_once 'dolarymonedas_sdk.php';
$client = new DolarYMonedasSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = DolarYMonedasSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### DolarYMonedasSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Blue` | `($data): BlueEntity` | Create a Blue entity instance. |
| `Bolsa` | `($data): BolsaEntity` | Create a Bolsa entity instance. |
| `Brl` | `($data): BrlEntity` | Create a Brl entity instance. |
| `Clp` | `($data): ClpEntity` | Create a Clp entity instance. |
| `Contadoconliqui` | `($data): ContadoconliquiEntity` | Create a Contadoconliqui entity instance. |
| `CotizacionAmbito` | `($data): CotizacionAmbitoEntity` | Create a CotizacionAmbito entity instance. |
| `Cotizacione` | `($data): CotizacioneEntity` | Create a Cotizacione entity instance. |
| `Cripto` | `($data): CriptoEntity` | Create a Cripto entity instance. |
| `Dolare` | `($data): DolareEntity` | Create a Dolare entity instance. |
| `Estado` | `($data): EstadoEntity` | Create an Estado entity instance. |
| `Eur` | `($data): EurEntity` | Create an Eur entity instance. |
| `Mayorista` | `($data): MayoristaEntity` | Create a Mayorista entity instance. |
| `Oficial` | `($data): OficialEntity` | Create an Oficial entity instance. |
| `Tarjeta` | `($data): TarjetaEntity` | Create a Tarjeta entity instance. |
| `Uyu` | `($data): UyuEntity` | Create an Uyu entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Blue

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
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
| `fecha_actualizacion` |  |
| `moneda` |  |
| `nombre` |  |
| `venta` |  |

Operations: Load.

API path: `/v1/cotizaciones/uyu`



## Entities


### Blue

Create an instance: `$blue = $client->Blue();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Blue record (throws on error).
$blue = $client->Blue()->load();
```


### Bolsa

Create an instance: `$bolsa = $client->Bolsa();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Bolsa record (throws on error).
$bolsa = $client->Bolsa()->load();
```


### Brl

Create an instance: `$brl = $client->Brl();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Brl record (throws on error).
$brl = $client->Brl()->load();
```


### Clp

Create an instance: `$clp = $client->Clp();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Clp record (throws on error).
$clp = $client->Clp()->load();
```


### Contadoconliqui

Create an instance: `$contadoconliqui = $client->Contadoconliqui();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Contadoconliqui record (throws on error).
$contadoconliqui = $client->Contadoconliqui()->load();
```


### CotizacionAmbito

Create an instance: `$cotizacion_ambito = $client->CotizacionAmbito();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `variacion` | `float` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare CotizacionAmbito record (throws on error).
$cotizacion_ambito = $client->CotizacionAmbito()->load();
```

#### Example: List

```php
// list() returns an array of CotizacionAmbito records (throws on error).
$cotizacion_ambitos = $client->CotizacionAmbito()->list();
```


### Cotizacione

Create an instance: `$cotizacione = $client->Cotizacione();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: List

```php
// list() returns an array of Cotizacione records (throws on error).
$cotizaciones = $client->Cotizacione()->list();
```


### Cripto

Create an instance: `$cripto = $client->Cripto();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Cripto record (throws on error).
$cripto = $client->Cripto()->load();
```


### Dolare

Create an instance: `$dolare = $client->Dolare();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: List

```php
// list() returns an array of Dolare records (throws on error).
$dolares = $client->Dolare()->list();
```


### Estado

Create an instance: `$estado = $client->Estado();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `int` |  |
| `estado` | `string` |  |

#### Example: Load

```php
// load() returns the bare Estado record (throws on error).
$estado = $client->Estado()->load();
```


### Eur

Create an instance: `$eur = $client->Eur();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Eur record (throws on error).
$eur = $client->Eur()->load();
```


### Mayorista

Create an instance: `$mayorista = $client->Mayorista();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Mayorista record (throws on error).
$mayorista = $client->Mayorista()->load();
```


### Oficial

Create an instance: `$oficial = $client->Oficial();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Oficial record (throws on error).
$oficial = $client->Oficial()->load();
```


### Tarjeta

Create an instance: `$tarjeta = $client->Tarjeta();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Tarjeta record (throws on error).
$tarjeta = $client->Tarjeta()->load();
```


### Uyu

Create an instance: `$uyu = $client->Uyu();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha_actualizacion` | `string` |  |
| `moneda` | `string` |  |
| `nombre` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Uyu record (throws on error).
$uyu = $client->Uyu()->load();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── dolarymonedas_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`dolarymonedas_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$blue = $client->Blue();
$blue->load();

// $blue->data_get() now returns the blue data from the last load
// $blue->match_get() returns the last match criteria
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
