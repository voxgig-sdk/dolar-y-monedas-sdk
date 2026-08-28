# DolarYMonedas Golang SDK Reference

Complete API reference for the DolarYMonedas Golang SDK.


## DolarYMonedasSDK

### Constructor

```go
func NewDolarYMonedasSDK(options map[string]any) *DolarYMonedasSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DolarYMonedasSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DolarYMonedasSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Blue(data map[string]any) DolarYMonedasEntity`

Create a new `Blue` entity instance. Pass `nil` for no initial data.

#### `Bolsa(data map[string]any) DolarYMonedasEntity`

Create a new `Bolsa` entity instance. Pass `nil` for no initial data.

#### `Brl(data map[string]any) DolarYMonedasEntity`

Create a new `Brl` entity instance. Pass `nil` for no initial data.

#### `Clp(data map[string]any) DolarYMonedasEntity`

Create a new `Clp` entity instance. Pass `nil` for no initial data.

#### `Contadoconliqui(data map[string]any) DolarYMonedasEntity`

Create a new `Contadoconliqui` entity instance. Pass `nil` for no initial data.

#### `CotizacionAmbito(data map[string]any) DolarYMonedasEntity`

Create a new `CotizacionAmbito` entity instance. Pass `nil` for no initial data.

#### `Cotizacione(data map[string]any) DolarYMonedasEntity`

Create a new `Cotizacione` entity instance. Pass `nil` for no initial data.

#### `Cripto(data map[string]any) DolarYMonedasEntity`

Create a new `Cripto` entity instance. Pass `nil` for no initial data.

#### `Dolare(data map[string]any) DolarYMonedasEntity`

Create a new `Dolare` entity instance. Pass `nil` for no initial data.

#### `Estado(data map[string]any) DolarYMonedasEntity`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `Eur(data map[string]any) DolarYMonedasEntity`

Create a new `Eur` entity instance. Pass `nil` for no initial data.

#### `Mayorista(data map[string]any) DolarYMonedasEntity`

Create a new `Mayorista` entity instance. Pass `nil` for no initial data.

#### `Oficial(data map[string]any) DolarYMonedasEntity`

Create a new `Oficial` entity instance. Pass `nil` for no initial data.

#### `Tarjeta(data map[string]any) DolarYMonedasEntity`

Create a new `Tarjeta` entity instance. Pass `nil` for no initial data.

#### `Uyu(data map[string]any) DolarYMonedasEntity`

Create a new `Uyu` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BlueEntity

```go
blue := client.Blue(nil)
fmt.Println(blue.GetName()) // "blue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Blue(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BlueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BolsaEntity

```go
bolsa := client.Bolsa(nil)
fmt.Println(bolsa.GetName()) // "bolsa"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Bolsa(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BolsaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrlEntity

```go
brl := client.Brl(nil)
fmt.Println(brl.GetName()) // "brl"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Brl(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrlEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClpEntity

```go
clp := client.Clp(nil)
fmt.Println(clp.GetName()) // "clp"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Clp(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContadoconliquiEntity

```go
contadoconliqui := client.Contadoconliqui(nil)
fmt.Println(contadoconliqui.GetName()) // "contadoconliqui"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Contadoconliqui(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContadoconliquiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CotizacionAmbitoEntity

```go
cotizacionAmbito := client.CotizacionAmbito(nil)
fmt.Println(cotizacionAmbito.GetName()) // "cotizacion_ambito"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `variacion` | `float64` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CotizacionAmbito(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CotizacionAmbito(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CotizacionAmbitoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CotizacioneEntity

```go
cotizacione := client.Cotizacione(nil)
fmt.Println(cotizacione.GetName()) // "cotizacione"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cotizacione(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CotizacioneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CriptoEntity

```go
cripto := client.Cripto(nil)
fmt.Println(cripto.GetName()) // "cripto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cripto(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CriptoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DolareEntity

```go
dolare := client.Dolare(nil)
fmt.Println(dolare.GetName()) // "dolare"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Dolare(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DolareEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EstadoEntity

```go
estado := client.Estado(nil)
fmt.Println(estado.GetName()) // "estado"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `int` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Estado(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EurEntity

```go
eur := client.Eur(nil)
fmt.Println(eur.GetName()) // "eur"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Eur(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EurEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MayoristaEntity

```go
mayorista := client.Mayorista(nil)
fmt.Println(mayorista.GetName()) // "mayorista"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Mayorista(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MayoristaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OficialEntity

```go
oficial := client.Oficial(nil)
fmt.Println(oficial.GetName()) // "oficial"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Oficial(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OficialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TarjetaEntity

```go
tarjeta := client.Tarjeta(nil)
fmt.Println(tarjeta.GetName()) // "tarjeta"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tarjeta(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TarjetaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UyuEntity

```go
uyu := client.Uyu(nil)
fmt.Println(uyu.GetName()) // "uyu"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | Yes |  |
| `compra` | `float64` | No |  |
| `fechaActualizacion` | `string` | Yes |  |
| `moneda` | `string` | Yes |  |
| `nombre` | `string` | Yes |  |
| `venta` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Uyu(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UyuEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewDolarYMonedasSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

