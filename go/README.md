# DolarYMonedas Golang SDK



The Golang SDK for the DolarYMonedas API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/dolar-y-monedas-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/dolar-y-monedas-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/dolar-y-monedas-sdk/go=../dolar-y-monedas-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/dolar-y-monedas-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single blue — the value is the loaded record.
    blue, err := client.Blue(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(blue)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

blue, err := client.Blue(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(blue) // the loaded mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewDolarYMonedasSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewDolarYMonedasSDK

```go
func NewDolarYMonedasSDK(options map[string]any) *DolarYMonedasSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *DolarYMonedasSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DolarYMonedasSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Blue` | `(data map[string]any) DolarYMonedasEntity` | Create a Blue entity instance. |
| `Bolsa` | `(data map[string]any) DolarYMonedasEntity` | Create a Bolsa entity instance. |
| `Brl` | `(data map[string]any) DolarYMonedasEntity` | Create a Brl entity instance. |
| `Clp` | `(data map[string]any) DolarYMonedasEntity` | Create a Clp entity instance. |
| `Contadoconliqui` | `(data map[string]any) DolarYMonedasEntity` | Create a Contadoconliqui entity instance. |
| `CotizacionAmbito` | `(data map[string]any) DolarYMonedasEntity` | Create a CotizacionAmbito entity instance. |
| `Cotizacione` | `(data map[string]any) DolarYMonedasEntity` | Create a Cotizacione entity instance. |
| `Cripto` | `(data map[string]any) DolarYMonedasEntity` | Create a Cripto entity instance. |
| `Dolare` | `(data map[string]any) DolarYMonedasEntity` | Create a Dolare entity instance. |
| `Estado` | `(data map[string]any) DolarYMonedasEntity` | Create an Estado entity instance. |
| `Eur` | `(data map[string]any) DolarYMonedasEntity` | Create an Eur entity instance. |
| `Mayorista` | `(data map[string]any) DolarYMonedasEntity` | Create a Mayorista entity instance. |
| `Oficial` | `(data map[string]any) DolarYMonedasEntity` | Create an Oficial entity instance. |
| `Tarjeta` | `(data map[string]any) DolarYMonedasEntity` | Create a Tarjeta entity instance. |
| `Uyu` | `(data map[string]any) DolarYMonedasEntity` | Create an Uyu entity instance. |

### Entity interface (DolarYMonedasEntity)

All entities implement the `DolarYMonedasEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    blue, err := client.Blue(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // blue is the loaded record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Blue

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/blue`

#### Bolsa

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/bolsa`

#### Brl

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/cotizaciones/brl`

#### Clp

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/cotizaciones/clp`

#### Contadoconliqui

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/contadoconliqui`

#### CotizacionAmbito

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"variacion"` |  |
| `"venta"` |  |

Operations: List, Load.

API path: `/v1/ambito/dolares`

#### Cotizacione

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: List.

API path: `/v1/cotizaciones`

#### Cripto

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/cripto`

#### Dolare

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: List.

API path: `/v1/dolares`

#### Estado

| Field | Description |
| --- | --- |
| `"aleatorio"` |  |
| `"estado"` |  |

Operations: Load.

API path: `/v1/estado`

#### Eur

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/cotizaciones/eur`

#### Mayorista

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/mayorista`

#### Oficial

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/oficial`

#### Tarjeta

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/dolares/tarjeta`

#### Uyu

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha_actualizacion"` |  |
| `"moneda"` |  |
| `"nombre"` |  |
| `"venta"` |  |

Operations: Load.

API path: `/v1/cotizaciones/uyu`



## Entities


### Blue

Create an instance: `blue := client.Blue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
blue, err := client.Blue(nil).Load(map[string]any{"id": "blue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(blue) // the loaded record
```


### Bolsa

Create an instance: `bolsa := client.Bolsa(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
bolsa, err := client.Bolsa(nil).Load(map[string]any{"id": "bolsa_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bolsa) // the loaded record
```


### Brl

Create an instance: `brl := client.Brl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
brl, err := client.Brl(nil).Load(map[string]any{"id": "brl_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(brl) // the loaded record
```


### Clp

Create an instance: `clp := client.Clp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
clp, err := client.Clp(nil).Load(map[string]any{"id": "clp_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(clp) // the loaded record
```


### Contadoconliqui

Create an instance: `contadoconliqui := client.Contadoconliqui(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
contadoconliqui, err := client.Contadoconliqui(nil).Load(map[string]any{"id": "contadoconliqui_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contadoconliqui) // the loaded record
```


### CotizacionAmbito

Create an instance: `cotizacion_ambito := client.CotizacionAmbito(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `variacion` | ``$NUMBER`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
cotizacion_ambito, err := client.CotizacionAmbito(nil).Load(map[string]any{"id": "cotizacion_ambito_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cotizacion_ambito) // the loaded record
```

#### Example: List

```go
cotizacion_ambitos, err := client.CotizacionAmbito(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cotizacion_ambitos) // the array of records
```


### Cotizacione

Create an instance: `cotizacione := client.Cotizacione(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: List

```go
cotizaciones, err := client.Cotizacione(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cotizaciones) // the array of records
```


### Cripto

Create an instance: `cripto := client.Cripto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
cripto, err := client.Cripto(nil).Load(map[string]any{"id": "cripto_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cripto) // the loaded record
```


### Dolare

Create an instance: `dolare := client.Dolare(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: List

```go
dolares, err := client.Dolare(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dolares) // the array of records
```


### Estado

Create an instance: `estado := client.Estado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | ``$INTEGER`` |  |
| `estado` | ``$STRING`` |  |

#### Example: Load

```go
estado, err := client.Estado(nil).Load(map[string]any{"id": "estado_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(estado) // the loaded record
```


### Eur

Create an instance: `eur := client.Eur(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
eur, err := client.Eur(nil).Load(map[string]any{"id": "eur_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(eur) // the loaded record
```


### Mayorista

Create an instance: `mayorista := client.Mayorista(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
mayorista, err := client.Mayorista(nil).Load(map[string]any{"id": "mayorista_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mayorista) // the loaded record
```


### Oficial

Create an instance: `oficial := client.Oficial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
oficial, err := client.Oficial(nil).Load(map[string]any{"id": "oficial_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oficial) // the loaded record
```


### Tarjeta

Create an instance: `tarjeta := client.Tarjeta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
tarjeta, err := client.Tarjeta(nil).Load(map[string]any{"id": "tarjeta_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tarjeta) // the loaded record
```


### Uyu

Create an instance: `uyu := client.Uyu(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha_actualizacion` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
uyu, err := client.Uyu(nil).Load(map[string]any{"id": "uyu_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(uyu) // the loaded record
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/dolar-y-monedas-sdk/go/
├── dolar-y-monedas.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/dolar-y-monedas-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
blue := client.Blue(nil)
blue.Load(map[string]any{"id": "example_id"}, nil)

// blue.Data() now returns the loaded blue data
// blue.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
