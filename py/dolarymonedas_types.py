# Typed models for the DolarYMonedas SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Blue:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class BlueLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Bolsa:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class BolsaLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Brl:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class BrlLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Clp:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class ClpLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Contadoconliqui:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class ContadoconliquiLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class CotizacionAmbito:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    variacion: float
    venta: float
    compra: Optional[float] = None


@dataclass
class CotizacionAmbitoLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    variacion: Optional[float] = None
    venta: Optional[float] = None


@dataclass
class CotizacionAmbitoListMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    variacion: Optional[float] = None
    venta: Optional[float] = None


@dataclass
class Cotizacione:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class CotizacioneListMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Cripto:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class CriptoLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Dolare:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class DolareListMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Estado:
    aleatorio: Optional[int] = None
    estado: Optional[str] = None


@dataclass
class EstadoLoadMatch:
    aleatorio: Optional[int] = None
    estado: Optional[str] = None


@dataclass
class Eur:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class EurLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Mayorista:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class MayoristaLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Oficial:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class OficialLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Tarjeta:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class TarjetaLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Uyu:
    casa: str
    fecha_actualizacion: str
    moneda: str
    nombre: str
    venta: float
    compra: Optional[float] = None


@dataclass
class UyuLoadMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha_actualizacion: Optional[str] = None
    moneda: Optional[str] = None
    nombre: Optional[str] = None
    venta: Optional[float] = None

