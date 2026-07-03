package voxgigdolarymonedassdk

import (
	"github.com/voxgig-sdk/dolar-y-monedas-sdk/go/core"
	"github.com/voxgig-sdk/dolar-y-monedas-sdk/go/entity"
	"github.com/voxgig-sdk/dolar-y-monedas-sdk/go/feature"
	_ "github.com/voxgig-sdk/dolar-y-monedas-sdk/go/utility"
)

// Type aliases preserve external API.
type DolarYMonedasSDK = core.DolarYMonedasSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DolarYMonedasEntity = core.DolarYMonedasEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DolarYMonedasError = core.DolarYMonedasError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBlueEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewBlueEntity(client, entopts)
	}
	core.NewBolsaEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewBolsaEntity(client, entopts)
	}
	core.NewBrlEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewBrlEntity(client, entopts)
	}
	core.NewClpEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewClpEntity(client, entopts)
	}
	core.NewContadoconliquiEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewContadoconliquiEntity(client, entopts)
	}
	core.NewCotizacionAmbitoEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewCotizacionAmbitoEntity(client, entopts)
	}
	core.NewCotizacioneEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewCotizacioneEntity(client, entopts)
	}
	core.NewCriptoEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewCriptoEntity(client, entopts)
	}
	core.NewDolareEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewDolareEntity(client, entopts)
	}
	core.NewEstadoEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewEstadoEntity(client, entopts)
	}
	core.NewEurEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewEurEntity(client, entopts)
	}
	core.NewMayoristaEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewMayoristaEntity(client, entopts)
	}
	core.NewOficialEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewOficialEntity(client, entopts)
	}
	core.NewTarjetaEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewTarjetaEntity(client, entopts)
	}
	core.NewUyuEntityFunc = func(client *core.DolarYMonedasSDK, entopts map[string]any) core.DolarYMonedasEntity {
		return entity.NewUyuEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDolarYMonedasSDK = core.NewDolarYMonedasSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewDolarYMonedasSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *DolarYMonedasSDK  { return NewDolarYMonedasSDK(nil) }
func Test() *DolarYMonedasSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
