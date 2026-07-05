<?php
declare(strict_types=1);

// Typed models for the DolarYMonedas SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Blue entity data model. */
class Blue
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Blue#load. */
class BlueLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Bolsa entity data model. */
class Bolsa
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Bolsa#load. */
class BolsaLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Brl entity data model. */
class Brl
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Brl#load. */
class BrlLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Clp entity data model. */
class Clp
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Clp#load. */
class ClpLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Contadoconliqui entity data model. */
class Contadoconliqui
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Contadoconliqui#load. */
class ContadoconliquiLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** CotizacionAmbito entity data model. */
class CotizacionAmbito
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $variacion;
    public float $venta;
}

/** Request payload for CotizacionAmbito#load. */
class CotizacionAmbitoLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $variacion = null;
    public ?float $venta = null;
}

/** Request payload for CotizacionAmbito#list. */
class CotizacionAmbitoListMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $variacion = null;
    public ?float $venta = null;
}

/** Cotizacione entity data model. */
class Cotizacione
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Cotizacione#list. */
class CotizacioneListMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Cripto entity data model. */
class Cripto
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Cripto#load. */
class CriptoLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Dolare entity data model. */
class Dolare
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Dolare#list. */
class DolareListMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Estado entity data model. */
class Estado
{
    public ?int $aleatorio = null;
    public ?string $estado = null;
}

/** Request payload for Estado#load. */
class EstadoLoadMatch
{
    public ?int $aleatorio = null;
    public ?string $estado = null;
}

/** Eur entity data model. */
class Eur
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Eur#load. */
class EurLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Mayorista entity data model. */
class Mayorista
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Mayorista#load. */
class MayoristaLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Oficial entity data model. */
class Oficial
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Oficial#load. */
class OficialLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Tarjeta entity data model. */
class Tarjeta
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Tarjeta#load. */
class TarjetaLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

/** Uyu entity data model. */
class Uyu
{
    public string $casa;
    public ?float $compra = null;
    public string $fecha_actualizacion;
    public string $moneda;
    public string $nombre;
    public float $venta;
}

/** Request payload for Uyu#load. */
class UyuLoadMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha_actualizacion = null;
    public ?string $moneda = null;
    public ?string $nombre = null;
    public ?float $venta = null;
}

