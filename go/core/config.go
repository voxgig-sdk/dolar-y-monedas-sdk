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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "blue",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"blue",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "bolsa",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"bolsa",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "brl",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"cotizaciones",
									"brl",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "clp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"cotizaciones",
									"clp",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "contadoconliqui",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"contadoconliqui",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "variacion",
						"title": "Variacion",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "cotizacion_ambito",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"blue",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"bolsa",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"contadoconliqui",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"cripto",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"mayorista",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"oficial",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"tarjeta",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "cotizacione",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"cotizaciones",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "cripto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"cripto",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "dolare",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Aleatorio",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "estado",
						"title": "Estado",
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
								"parts": []any{
									"v1",
									"estado",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "eur",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"cotizaciones",
									"eur",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "mayorista",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"mayorista",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "oficial",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"oficial",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "tarjeta",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"dolares",
									"tarjeta",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Casa",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compra",
						"title": "Compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fechaActualizacion",
						"title": "Fecha Actualizacion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moneda",
						"title": "Moneda",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "nombre",
						"title": "Nombre",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "venta",
						"title": "Venta",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "uyu",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"v1",
									"cotizaciones",
									"uyu",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
