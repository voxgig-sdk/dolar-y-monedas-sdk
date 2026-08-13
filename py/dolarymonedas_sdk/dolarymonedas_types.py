# Typed models for the DolarYMonedas SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class BlueRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Blue(BlueRequired, total=False):
    compra: float


class BlueLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class BolsaRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Bolsa(BolsaRequired, total=False):
    compra: float


class BolsaLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class BrlRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Brl(BrlRequired, total=False):
    compra: float


class BrlLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class ClpRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Clp(ClpRequired, total=False):
    compra: float


class ClpLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class ContadoconliquiRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Contadoconliqui(ContadoconliquiRequired, total=False):
    compra: float


class ContadoconliquiLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class CotizacionAmbitoRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    variacion: float
    venta: float


class CotizacionAmbito(CotizacionAmbitoRequired, total=False):
    compra: float


class CotizacionAmbitoLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    variacion: float
    venta: float


class CotizacionAmbitoListMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    variacion: float
    venta: float


class CotizacioneRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Cotizacione(CotizacioneRequired, total=False):
    compra: float


class CotizacioneListMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class CriptoRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Cripto(CriptoRequired, total=False):
    compra: float


class CriptoLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class DolareRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Dolare(DolareRequired, total=False):
    compra: float


class DolareListMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Estado(TypedDict, total=False):
    aleatorio: int
    estado: str


class EstadoLoadMatch(TypedDict, total=False):
    aleatorio: int
    estado: str


class EurRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Eur(EurRequired, total=False):
    compra: float


class EurLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class MayoristaRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Mayorista(MayoristaRequired, total=False):
    compra: float


class MayoristaLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class OficialRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Oficial(OficialRequired, total=False):
    compra: float


class OficialLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class TarjetaRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Tarjeta(TarjetaRequired, total=False):
    compra: float


class TarjetaLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class UyuRequired(TypedDict):
    casa: str
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float


class Uyu(UyuRequired, total=False):
    compra: float


class UyuLoadMatch(TypedDict, total=False):
    casa: str
    compra: float
    fechaActualizacion: str
    moneda: str
    nombre: str
    venta: float
