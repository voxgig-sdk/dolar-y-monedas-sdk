package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DolarYMonedas",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "blue",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/blue",
								"parts": []any{
									"v1",
									"dolares",
									"blue",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "bolsa",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/bolsa",
								"parts": []any{
									"v1",
									"dolares",
									"bolsa",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "brl",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones/brl",
								"parts": []any{
									"v1",
									"cotizaciones",
									"brl",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "clp",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones/clp",
								"parts": []any{
									"v1",
									"cotizaciones",
									"clp",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "contadoconliqui",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/contadoconliqui",
								"parts": []any{
									"v1",
									"dolares",
									"contadoconliqui",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "variacion",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
				},
				"name": "cotizacion_ambito",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/blue",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"blue",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/bolsa",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"bolsa",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 1,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/contadoconliqui",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"contadoconliqui",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 2,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/cripto",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"cripto",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 3,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/mayorista",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"mayorista",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 4,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/oficial",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"oficial",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 5,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/ambito/dolares/tarjeta",
								"parts": []any{
									"v1",
									"ambito",
									"dolares",
									"tarjeta",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 6,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "cotizacione",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones",
								"parts": []any{
									"v1",
									"cotizaciones",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "cripto",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/cripto",
								"parts": []any{
									"v1",
									"dolares",
									"cripto",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "dolare",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares",
								"parts": []any{
									"v1",
									"dolares",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "estado",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "estado",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/estado",
								"parts": []any{
									"v1",
									"estado",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "eur",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones/eur",
								"parts": []any{
									"v1",
									"cotizaciones",
									"eur",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "mayorista",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/mayorista",
								"parts": []any{
									"v1",
									"dolares",
									"mayorista",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "oficial",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/oficial",
								"parts": []any{
									"v1",
									"dolares",
									"oficial",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "tarjeta",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/dolares/tarjeta",
								"parts": []any{
									"v1",
									"dolares",
									"tarjeta",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha_actualizacion",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "venta",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "uyu",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones/uyu",
								"parts": []any{
									"v1",
									"cotizaciones",
									"uyu",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
