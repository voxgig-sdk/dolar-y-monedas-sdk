# frozen_string_literal: true

# Typed models for the DolarYMonedas SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Blue entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Blue = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Blue#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
BlueLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Bolsa entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Bolsa = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Bolsa#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
BolsaLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Brl entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Brl = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Brl#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
BrlLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Clp entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Clp = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Clp#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
ClpLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Contadoconliqui entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Contadoconliqui = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Contadoconliqui#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
ContadoconliquiLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# CotizacionAmbito entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] variacion
#   @return [Float]
#
# @!attribute [rw] venta
#   @return [Float]
CotizacionAmbito = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :variacion,
  :venta,
  keyword_init: true
)

# Request payload for CotizacionAmbito#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] variacion
#   @return [Float, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
CotizacionAmbitoLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :variacion,
  :venta,
  keyword_init: true
)

# Request payload for CotizacionAmbito#list.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] variacion
#   @return [Float, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
CotizacionAmbitoListMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :variacion,
  :venta,
  keyword_init: true
)

# Cotizacione entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Cotizacione = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Cotizacione#list.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
CotizacioneListMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Cripto entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Cripto = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Cripto#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
CriptoLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Dolare entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Dolare = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Dolare#list.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
DolareListMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Estado entity data model.
#
# @!attribute [rw] aleatorio
#   @return [Integer, nil]
#
# @!attribute [rw] estado
#   @return [String, nil]
Estado = Struct.new(
  :aleatorio,
  :estado,
  keyword_init: true
)

# Request payload for Estado#load.
#
# @!attribute [rw] aleatorio
#   @return [Integer, nil]
#
# @!attribute [rw] estado
#   @return [String, nil]
EstadoLoadMatch = Struct.new(
  :aleatorio,
  :estado,
  keyword_init: true
)

# Eur entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Eur = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Eur#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
EurLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Mayorista entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Mayorista = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Mayorista#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
MayoristaLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Oficial entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Oficial = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Oficial#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
OficialLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Tarjeta entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Tarjeta = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Tarjeta#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
TarjetaLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Uyu entity data model.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String]
#
# @!attribute [rw] moneda
#   @return [String]
#
# @!attribute [rw] nombre
#   @return [String]
#
# @!attribute [rw] venta
#   @return [Float]
Uyu = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

# Request payload for Uyu#load.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha_actualizacion
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
UyuLoadMatch = Struct.new(
  :casa,
  :compra,
  :fecha_actualizacion,
  :moneda,
  :nombre,
  :venta,
  keyword_init: true
)

