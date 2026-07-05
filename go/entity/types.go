// Typed models for the DolarYMonedas SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Blue is the typed data model for the blue entity.
type Blue struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// BlueLoadMatch is the typed request payload for Blue.LoadTyped.
type BlueLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Bolsa is the typed data model for the bolsa entity.
type Bolsa struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// BolsaLoadMatch is the typed request payload for Bolsa.LoadTyped.
type BolsaLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Brl is the typed data model for the brl entity.
type Brl struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// BrlLoadMatch is the typed request payload for Brl.LoadTyped.
type BrlLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Clp is the typed data model for the clp entity.
type Clp struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// ClpLoadMatch is the typed request payload for Clp.LoadTyped.
type ClpLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Contadoconliqui is the typed data model for the contadoconliqui entity.
type Contadoconliqui struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// ContadoconliquiLoadMatch is the typed request payload for Contadoconliqui.LoadTyped.
type ContadoconliquiLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// CotizacionAmbito is the typed data model for the cotizacion_ambito entity.
type CotizacionAmbito struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Variacion float64 `json:"variacion"`
	Venta float64 `json:"venta"`
}

// CotizacionAmbitoLoadMatch is the typed request payload for CotizacionAmbito.LoadTyped.
type CotizacionAmbitoLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Variacion *float64 `json:"variacion,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// CotizacionAmbitoListMatch is the typed request payload for CotizacionAmbito.ListTyped.
type CotizacionAmbitoListMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Variacion *float64 `json:"variacion,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Cotizacione is the typed data model for the cotizacione entity.
type Cotizacione struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// CotizacioneListMatch is the typed request payload for Cotizacione.ListTyped.
type CotizacioneListMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Cripto is the typed data model for the cripto entity.
type Cripto struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// CriptoLoadMatch is the typed request payload for Cripto.LoadTyped.
type CriptoLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Dolare is the typed data model for the dolare entity.
type Dolare struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// DolareListMatch is the typed request payload for Dolare.ListTyped.
type DolareListMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Estado is the typed data model for the estado entity.
type Estado struct {
	Aleatorio *int `json:"aleatorio,omitempty"`
	Estado *string `json:"estado,omitempty"`
}

// EstadoLoadMatch is the typed request payload for Estado.LoadTyped.
type EstadoLoadMatch struct {
	Aleatorio *int `json:"aleatorio,omitempty"`
	Estado *string `json:"estado,omitempty"`
}

// Eur is the typed data model for the eur entity.
type Eur struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// EurLoadMatch is the typed request payload for Eur.LoadTyped.
type EurLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Mayorista is the typed data model for the mayorista entity.
type Mayorista struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// MayoristaLoadMatch is the typed request payload for Mayorista.LoadTyped.
type MayoristaLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Oficial is the typed data model for the oficial entity.
type Oficial struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// OficialLoadMatch is the typed request payload for Oficial.LoadTyped.
type OficialLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Tarjeta is the typed data model for the tarjeta entity.
type Tarjeta struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// TarjetaLoadMatch is the typed request payload for Tarjeta.LoadTyped.
type TarjetaLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Uyu is the typed data model for the uyu entity.
type Uyu struct {
	Casa string `json:"casa"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion string `json:"fecha_actualizacion"`
	Moneda string `json:"moneda"`
	Nombre string `json:"nombre"`
	Venta float64 `json:"venta"`
}

// UyuLoadMatch is the typed request payload for Uyu.LoadTyped.
type UyuLoadMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	FechaActualizacion *string `json:"fecha_actualizacion,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
