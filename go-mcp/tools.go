package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/dolar-y-monedas-sdk/go"
)

// ListArgs is what an agent sends to dolar-y-monedas_list.
type ListArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: cotizacion_ambito | cotizacione | dolare"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional filter map; omit it for the first page"`
}

// LoadArgs is what an agent sends to dolar-y-monedas_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: blue | bolsa | brl | clp | contadoconliqui | cotizacion_ambito | cripto | estado | eur | mayorista | oficial | tarjeta | uyu"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.DolarYMonedasSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "dolar-y-monedas_list",
		Description: "List records from DolarYMonedas. Args: entity, query (optional filter map; omit it for the first page). Returns the first page of records as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[ListArgs]("cotizacion_ambito", "cotizacione", "dolare"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args ListArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "list", args.Entity, args.Query)
	})
	mcp.AddTool(server, &mcp.Tool{
		Name:        "dolar-y-monedas_load",
		Description: "Load one record from DolarYMonedas. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("blue", "bolsa", "brl", "clp", "contadoconliqui", "cotizacion_ambito", "cripto", "estado", "eur", "mayorista", "oficial", "tarjeta", "uyu"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.DolarYMonedasSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.DolarYMonedasSDK, name string) (sdk.DolarYMonedasEntity, error) {
	switch strings.ToLower(name) {
	case "blue":
		return client.Blue(nil), nil
	case "bolsa":
		return client.Bolsa(nil), nil
	case "brl":
		return client.Brl(nil), nil
	case "clp":
		return client.Clp(nil), nil
	case "contadoconliqui":
		return client.Contadoconliqui(nil), nil
	case "cotizacion_ambito":
		return client.CotizacionAmbito(nil), nil
	case "cotizacione":
		return client.Cotizacione(nil), nil
	case "cripto":
		return client.Cripto(nil), nil
	case "dolare":
		return client.Dolare(nil), nil
	case "estado":
		return client.Estado(nil), nil
	case "eur":
		return client.Eur(nil), nil
	case "mayorista":
		return client.Mayorista(nil), nil
	case "oficial":
		return client.Oficial(nil), nil
	case "tarjeta":
		return client.Tarjeta(nil), nil
	case "uyu":
		return client.Uyu(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}
