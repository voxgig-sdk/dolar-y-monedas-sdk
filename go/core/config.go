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
				"transport": "base",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "blue",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"blue",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "bolsa",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"bolsa",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cotizaciones",
									},
									map[string]any{
										"lit": "brl",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"cotizaciones",
									"brl",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cotizaciones",
									},
									map[string]any{
										"lit": "clp",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"cotizaciones",
									"clp",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "contadoconliqui",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"contadoconliqui",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "blue",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"blue",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/bolsa",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "bolsa",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"bolsa",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/contadoconliqui",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "contadoconliqui",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"contadoconliqui",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/cripto",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "cripto",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"cripto",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/mayorista",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "mayorista",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"mayorista",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/oficial",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "oficial",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"oficial",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ambito/dolares/tarjeta",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ambito",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "tarjeta",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"tarjeta",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cotizaciones",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"cotizaciones",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "cripto",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"cripto",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "estado",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"estado",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cotizaciones",
									},
									map[string]any{
										"lit": "eur",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"cotizaciones",
									"eur",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "mayorista",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"mayorista",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "oficial",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"oficial",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dolares",
									},
									map[string]any{
										"lit": "tarjeta",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"dolares",
									"tarjeta",
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
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "cotizaciones",
									},
									map[string]any{
										"lit": "uyu",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"cotizaciones",
									"uyu",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
