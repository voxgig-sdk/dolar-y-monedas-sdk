package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/dolar-y-monedas-sdk/go/utility/struct"
)

type DolarYMonedasSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewDolarYMonedasSDK(options map[string]any) *DolarYMonedasSDK {
	sdk := &DolarYMonedasSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *DolarYMonedasSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *DolarYMonedasSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *DolarYMonedasSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *DolarYMonedasSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *DolarYMonedasSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *DolarYMonedasSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *DolarYMonedasSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("DolarYMonedasSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *DolarYMonedasSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *DolarYMonedasSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("DolarYMonedasSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Blue returns a Blue entity bound to this client.
// Idiomatic usage: client.Blue(nil).List(nil, nil) or
// client.Blue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Blue(data map[string]any) DolarYMonedasEntity {
	return NewBlueEntityFunc(sdk, data)
}


// Bolsa returns a Bolsa entity bound to this client.
// Idiomatic usage: client.Bolsa(nil).List(nil, nil) or
// client.Bolsa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Bolsa(data map[string]any) DolarYMonedasEntity {
	return NewBolsaEntityFunc(sdk, data)
}


// Brl returns a Brl entity bound to this client.
// Idiomatic usage: client.Brl(nil).List(nil, nil) or
// client.Brl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Brl(data map[string]any) DolarYMonedasEntity {
	return NewBrlEntityFunc(sdk, data)
}


// Clp returns a Clp entity bound to this client.
// Idiomatic usage: client.Clp(nil).List(nil, nil) or
// client.Clp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Clp(data map[string]any) DolarYMonedasEntity {
	return NewClpEntityFunc(sdk, data)
}


// Contadoconliqui returns a Contadoconliqui entity bound to this client.
// Idiomatic usage: client.Contadoconliqui(nil).List(nil, nil) or
// client.Contadoconliqui(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Contadoconliqui(data map[string]any) DolarYMonedasEntity {
	return NewContadoconliquiEntityFunc(sdk, data)
}


// CotizacionAmbito returns a CotizacionAmbito entity bound to this client.
// Idiomatic usage: client.CotizacionAmbito(nil).List(nil, nil) or
// client.CotizacionAmbito(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) CotizacionAmbito(data map[string]any) DolarYMonedasEntity {
	return NewCotizacionAmbitoEntityFunc(sdk, data)
}


// Cotizacione returns a Cotizacione entity bound to this client.
// Idiomatic usage: client.Cotizacione(nil).List(nil, nil) or
// client.Cotizacione(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Cotizacione(data map[string]any) DolarYMonedasEntity {
	return NewCotizacioneEntityFunc(sdk, data)
}


// Cripto returns a Cripto entity bound to this client.
// Idiomatic usage: client.Cripto(nil).List(nil, nil) or
// client.Cripto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Cripto(data map[string]any) DolarYMonedasEntity {
	return NewCriptoEntityFunc(sdk, data)
}


// Dolare returns a Dolare entity bound to this client.
// Idiomatic usage: client.Dolare(nil).List(nil, nil) or
// client.Dolare(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Dolare(data map[string]any) DolarYMonedasEntity {
	return NewDolareEntityFunc(sdk, data)
}


// Estado returns a Estado entity bound to this client.
// Idiomatic usage: client.Estado(nil).List(nil, nil) or
// client.Estado(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Estado(data map[string]any) DolarYMonedasEntity {
	return NewEstadoEntityFunc(sdk, data)
}


// Eur returns a Eur entity bound to this client.
// Idiomatic usage: client.Eur(nil).List(nil, nil) or
// client.Eur(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Eur(data map[string]any) DolarYMonedasEntity {
	return NewEurEntityFunc(sdk, data)
}


// Mayorista returns a Mayorista entity bound to this client.
// Idiomatic usage: client.Mayorista(nil).List(nil, nil) or
// client.Mayorista(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Mayorista(data map[string]any) DolarYMonedasEntity {
	return NewMayoristaEntityFunc(sdk, data)
}


// Oficial returns a Oficial entity bound to this client.
// Idiomatic usage: client.Oficial(nil).List(nil, nil) or
// client.Oficial(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Oficial(data map[string]any) DolarYMonedasEntity {
	return NewOficialEntityFunc(sdk, data)
}


// Tarjeta returns a Tarjeta entity bound to this client.
// Idiomatic usage: client.Tarjeta(nil).List(nil, nil) or
// client.Tarjeta(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Tarjeta(data map[string]any) DolarYMonedasEntity {
	return NewTarjetaEntityFunc(sdk, data)
}


// Uyu returns a Uyu entity bound to this client.
// Idiomatic usage: client.Uyu(nil).List(nil, nil) or
// client.Uyu(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *DolarYMonedasSDK) Uyu(data map[string]any) DolarYMonedasEntity {
	return NewUyuEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *DolarYMonedasSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewDolarYMonedasSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
