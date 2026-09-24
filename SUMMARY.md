# DolarApi.com

&lt;div class=&quot;flex flex-col&quot;&gt; API desarrollada en &lt;a href=&quot;https://es.js.org?ref=dolarapi.com&quot; target=&quot;_blank&quot;&gt;EsJS&lt;/a&gt; que brinda información actualizada sobre las cotizaciones del Dólar en Argentina. ¿Encontraste útil esta API? &lt;strong&gt;¡Dejá tu ⭐ en &lt;a href=&quot;https://github.com/enzonotario/esjs-dolar-api&quot; alt=&quot;GitHub&quot; target=&quot;_blank&quot;&gt;GitHub&lt;/a&gt;!&lt;/strong&gt; ## Demo [App.DolarApi.com](https://app.dolarapi.com)

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 15 entities and 22 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Blue

Results: Devuelve la cotización del Dólar Blue.

SDK operations: `load`.

### Bolsa

Results: Devuelve la cotización del Dólar Bolsa.

SDK operations: `load`.

### Brl

Results: Devuelve la cotización del Real Brasileño.

SDK operations: `load`.

### Clp

Results: Devuelve la cotización del Peso Chileno.

SDK operations: `load`.

### Contadoconliqui

Results: Devuelve la cotización del Dólar Contado con liquidación.

SDK operations: `load`.

### CotizacionAmbito

Results: Devuelve todas las cotizaciones; Devuelve la cotización del Dólar Blue; Devuelve la cotización del Dólar Bolsa; Devuelve la cotización del Dólar Contado con liquidación; Devuelve la cotización del Dólar Cripto; Devuelve la cotización del Dólar Mayorista; Devuelve la cotización del Dólar Oficial; Devuelve el valor del Dólar Tarjeta.

SDK operations: `list`, `load`.

### Cotizacione

Results: Devuelve todas las cotizaciones.

SDK operations: `list`.

### Cripto

Results: Devuelve la cotización del Dólar Cripto.

SDK operations: `load`.

### Dolare

Results: Devuelve todas las cotizaciones.

SDK operations: `list`.

### Estado

Results: Devuelve el estado de la API.

SDK operations: `load`.

### Eur

Results: Devuelve la cotización del Euro.

SDK operations: `load`.

### Mayorista

Results: Devuelve la cotización del Dólar Mayorista.

SDK operations: `load`.

### Oficial

Results: Devuelve la cotización del Dólar Oficial.

SDK operations: `load`.

### Tarjeta

Results: Devuelve el valor del Dólar Tarjeta.

SDK operations: `load`.

### Uyu

Results: Devuelve la cotización del Peso Uruguayo.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Blue | `load` | `GET /v1/dolares/blue` | See reference |
| Bolsa | `load` | `GET /v1/dolares/bolsa` | See reference |
| Brl | `load` | `GET /v1/cotizaciones/brl` | See reference |
| Clp | `load` | `GET /v1/cotizaciones/clp` | See reference |
| Contadoconliqui | `load` | `GET /v1/dolares/contadoconliqui` | See reference |
| CotizacionAmbito | `list` | `GET /v1/ambito/dolares` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/blue` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/bolsa` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/contadoconliqui` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/cripto` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/mayorista` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/oficial` | See reference |
| CotizacionAmbito | `load` | `GET /v1/ambito/dolares/tarjeta` | See reference |
| Cotizacione | `list` | `GET /v1/cotizaciones` | See reference |
| Cripto | `load` | `GET /v1/dolares/cripto` | See reference |
| Dolare | `list` | `GET /v1/dolares` | See reference |
| Estado | `load` | `GET /v1/estado` | See reference |
| Eur | `load` | `GET /v1/cotizaciones/eur` | See reference |
| Mayorista | `load` | `GET /v1/dolares/mayorista` | See reference |
| Oficial | `load` | `GET /v1/dolares/oficial` | See reference |
| Tarjeta | `load` | `GET /v1/dolares/tarjeta` | See reference |
| Uyu | `load` | `GET /v1/cotizaciones/uyu` | See reference |

## Connect to the API

- Producción: `https://dolarapi.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `dolar-y-monedas_list`: List records for an entity. Supported entities: `cotizacion_ambito`, `cotizacione`, `dolare`.
- `dolar-y-monedas_load`: Load one record for an entity. Supported entities: `blue`, `bolsa`, `brl`, `clp`, `contadoconliqui`, `cotizacion_ambito`, `cripto`, `estado`, `eur`, `mayorista`, `oficial`, `tarjeta`, `uyu`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

