# DolarYMonedas SDK

Up-to-date quotations for the US dollar in Argentina, plus other Latin American currency exchange rates

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About DolarApi.com

[DolarApi.com](https://dolarapi.com) is an open API that publishes the many parallel US dollar quotations used in Argentina (oficial, blue, MEP/bolsa, contado con liqui, mayorista, tarjeta, cripto) along with other Latin American currency exchange rates. It is built on the EsJS framework and maintained by [Enzo Notario](https://github.com/enzonotario) as a free public service.

What you get from the API:

- All Argentine dollar variants in one call (`/dolares`) or individually under `/dolar/{tipo}`.
- Cross-rates against the Argentine peso for Euro, Brazilian real, Chilean peso, Uruguayan peso, and more under `/cotizaciones` and `/cotizacion/{moneda}`.
- Snapshots from [Ámbito Financiero](https://www.ambito.com) (`/ambito`) and an API health endpoint (`/estado`).

The service is HTTP-only with no authentication required. Data is sourced from publicly available financial sites and refreshed periodically; consult the docs for the current refresh cadence before relying on it in production.

## Try it

**TypeScript**
```bash
npm install dolar-y-monedas
```

**Python**
```bash
pip install dolar-y-monedas-sdk
```

**PHP**
```bash
composer require voxgig/dolar-y-monedas-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/dolar-y-monedas-sdk/go
```

**Ruby**
```bash
gem install dolar-y-monedas-sdk
```

**Lua**
```bash
luarocks install dolar-y-monedas-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DolarYMonedasSDK } from 'dolar-y-monedas'

const client = new DolarYMonedasSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o dolar-y-monedas-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "dolar-y-monedas": {
      "command": "/abs/path/to/dolar-y-monedas-mcp"
    }
  }
}
```

## Entities

The API exposes 15 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Blue** | Blue (informal/parallel) dollar quotation in Argentina, served from `/dolar/blue`. | `/v1/dolares/blue` |
| **Bolsa** | MEP / Bolsa dollar (stock-exchange-derived rate), served from `/dolar/bolsa`. | `/v1/dolares/bolsa` |
| **Brl** | Brazilian real cross-rate against the Argentine peso, served from `/cotizacion/brl`. | `/v1/cotizaciones/brl` |
| **Clp** | Chilean peso cross-rate against the Argentine peso, served from `/cotizacion/clp`. | `/v1/cotizaciones/clp` |
| **Contadoconliqui** | Contado Con Liquidación (CCL) dollar rate, served from `/dolar/contadoconliqui`. | `/v1/dolares/contadoconliqui` |
| **CotizacionAmbito** | Quotations sourced from Ámbito Financiero, exposed under `/ambito`. | `/v1/ambito/dolares` |
| **Cotizacione** | Aggregated currency quotations (USD plus others) against the Argentine peso, available via `/cotizaciones`. | `/v1/cotizaciones` |
| **Cripto** | Cryptocurrency-implied dollar rate, served from `/dolar/cripto`. | `/v1/dolares/cripto` |
| **Dolare** | Collection of all Argentine dollar variants returned by `/dolares`. | `/v1/dolares` |
| **Estado** | API health / status endpoint at `/estado`. | `/v1/estado` |
| **Eur** | Euro cross-rate against the Argentine peso, served from `/cotizacion/eur`. | `/v1/cotizaciones/eur` |
| **Mayorista** | Wholesale (mayorista) dollar rate, served from `/dolar/mayorista`. | `/v1/dolares/mayorista` |
| **Oficial** | Official dollar rate published by the central bank, served from `/dolar/oficial`. | `/v1/dolares/oficial` |
| **Tarjeta** | Card / tourist dollar rate (oficial plus surcharges), served from `/dolar/tarjeta`. | `/v1/dolares/tarjeta` |
| **Uyu** | Uruguayan peso cross-rate against the Argentine peso, served from `/cotizacion/uyu`. | `/v1/cotizaciones/uyu` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from dolarymonedas_sdk import DolarYMonedasSDK

client = DolarYMonedasSDK({})


# Load a specific blue
blue, err = client.Blue(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'dolarymonedas_sdk.php';

$client = new DolarYMonedasSDK([]);


// Load a specific blue
[$blue, $err] = $client->Blue(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/dolar-y-monedas-sdk/go"

client := sdk.NewDolarYMonedasSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "DolarYMonedas_sdk"

client = DolarYMonedasSDK.new({})


# Load a specific blue
blue, err = client.Blue(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("dolar-y-monedas_sdk")

local client = sdk.new({})


-- Load a specific blue
local blue, err = client:Blue(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DolarYMonedasSDK.test()
const result = await client.Blue().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DolarYMonedasSDK.test(None, None)
result, err = client.Blue(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DolarYMonedasSDK::test(null, null);
[$result, $err] = $client->Blue(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Blue(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DolarYMonedasSDK.test(nil, nil)
result, err = client.Blue(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Blue(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the DolarApi.com

- Upstream: [https://dolarapi.com](https://dolarapi.com)
- API docs: [https://dolarapi.com/docs/argentina/](https://dolarapi.com/docs/argentina/)

- Released under the [MIT License](https://opensource.org/licenses/MIT).
- Free to use for personal and commercial projects with attribution to the upstream project.
- Data is aggregated from public sources; the maintainer makes no warranties about accuracy or availability.

---

Generated from the DolarApi.com OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
