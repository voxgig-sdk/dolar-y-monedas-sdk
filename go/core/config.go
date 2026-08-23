package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DolarYMonedas",
			"slug": "dolar-y-monedas",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://dolarapi.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"blue": map[string]any{},
				"bolsa": map[string]any{},
				"brl": map[string]any{},
				"clp": map[string]any{},
				"contadoconliqui": map[string]any{},
				"cotizacion_ambito": map[string]any{},
				"cotizacione": map[string]any{},
				"cripto": map[string]any{},
				"dolare": map[string]any{},
				"estado": map[string]any{},
				"eur": map[string]any{},
				"mayorista": map[string]any{},
				"oficial": map[string]any{},
				"tarjeta": map[string]any{},
				"uyu": map[string]any{},
			},
		},
		"entity": map[string]any{
			"blue": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "blue",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/blue",
								"parts": []any{
									"v1",
									"dolares",
									"blue",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bolsa": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "bolsa",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/bolsa",
								"parts": []any{
									"v1",
									"dolares",
									"bolsa",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"brl": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "brl",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/brl",
								"parts": []any{
									"v1",
									"cotizaciones",
									"brl",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"clp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "clp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/clp",
								"parts": []any{
									"v1",
									"cotizaciones",
									"clp",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contadoconliqui": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "contadoconliqui",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/contadoconliqui",
								"parts": []any{
									"v1",
									"dolares",
									"contadoconliqui",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cotizacion_ambito": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "variacion",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "cotizacion_ambito",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/blue",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"blue",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/bolsa",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"bolsa",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/contadoconliqui",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"contadoconliqui",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/cripto",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"cripto",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/mayorista",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"mayorista",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/oficial",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"oficial",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/tarjeta",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"tarjeta",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cotizacione": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "cotizacione",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones",
								"parts": []any{
									"v1",
									"cotizaciones",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cripto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "cripto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/cripto",
								"parts": []any{
									"v1",
									"dolares",
									"cripto",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dolare": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "dolare",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares",
								"parts": []any{
									"v1",
									"dolares",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"estado": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aleatorio",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "estado",
						"type": "`$STRING`",
					},
				},
				"name": "estado",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/estado",
								"parts": []any{
									"v1",
									"estado",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"eur": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "eur",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/eur",
								"parts": []any{
									"v1",
									"cotizaciones",
									"eur",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"mayorista": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "mayorista",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/mayorista",
								"parts": []any{
									"v1",
									"dolares",
									"mayorista",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"oficial": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "oficial",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/oficial",
								"parts": []any{
									"v1",
									"dolares",
									"oficial",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tarjeta": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "tarjeta",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/dolares/tarjeta",
								"parts": []any{
									"v1",
									"dolares",
									"tarjeta",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"uyu": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
					},
				},
				"name": "uyu",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/uyu",
								"parts": []any{
									"v1",
									"cotizaciones",
									"uyu",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
