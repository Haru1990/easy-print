/**
 * panel 数据是打印所需的面板配置JSON对象
 * 
 * 获取路径：hiprint官网，http://hiprint.io 中的配置页上进行模板编写之后可以直接获取
 */
const orderPanel = {
	"panels": [{
		"index": 0,
		"height": 105,
		"width": 76,
		"leftOffset": 5,
		"paperHeader": 0,
		"paperFooter": 297.6377952755906,
		"paperNumberDisabled": true,
		"printElements": [{
			"options": {
				"left": 10.5,
				"top": 54,
				"height": 156,
        "width": 197
			},
			"printElementType": {
				"type": "rect"
			}
		}, {
			"options": {
				"left": 178.5,
				"top": 55,
				"height": 43.5,
				"width": 28.5,
				"field": "service_type",
				"testData": "极干",
				"fontSize": 12,
				"fontWeight": "bold",
        "textAlign": "center",
				"hideTitle": true,
				"fontFamily": "黑体",
				// "fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 178.5,
				"top": 54,
				"height": 43.5,
				"width": 9
			},
			"printElementType": {
				"type": "vline"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 54,
				"height": 15,
				// "width": 75,
				// "width": 64,
				"width": 190,
				"field": "customer_name",
				"testData": "博世电动工具（中国）有限公司",
				"fontSize": 6,
        "hideTitle": true,
				// "fontFamily": "黑体",
				// "letterSpacing": -1,
				"letterSpacing": -0.5,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 69,
				"height": 9,
				"width": 168
			},
			"printElementType": {
				"type": "hline"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 69,
				"height": 13.5,
				// "width": 168,
				"width": 190,
				"field": "project",
				"testData": "博世电动工具运输项目/P000014",
				"hideTitle": true,
				"fontFamily": "黑体",
				"letterSpacing": -1,
				// "letterSpacing": -0.5,
				// "fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle",
				"fontSize": 6,
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 82.5,
				"height": 15,
				"width": 168,
				"field": "station",
				"testData": "博世电动工具运输项目/P000014",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 22.5,
				"top": 97.5,
				"height": 19.5,
				"width": 183,
				"field": "start_station_name",
				"testData": "博世顺丰仓-福州-591DCD",
				"fontWeight": "bold",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 97.5,
				"height": 9,
				"width": 196.5
			},
			"printElementType": {
				"type": "hline"
			}
		}, {
			"options": {
				"left": 21,
				"top": 97.5,
				"height": 112,
				"width": 9
			},
			"printElementType": {
				"type": "vline"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 97.5,
				"height": 57,
				"width": 12,
				"field": "start_station",
				"testData": "起运地",
				"textAlign": "center",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 21,
				"top": 115.5,
				"height": 39,
				"width": 183,
				"field": "start_station_address",
				"testData": "福建省福州市闽侯县荆溪镇溪下村万全物流园",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 21,
				"top": 154.5,
				"height": 19.5,
				"width": 183,
				"field": "end_station_name",
				"testData": "SF1386019728420191125001-顺丰仓91125001顺丰仓91125001顺丰仓91125001",
        "hideTitle": true,
				"fontWeight": "bold",
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 154.5,
				"height": 55.5,
				"width": 10.5,
				"field": "end_station",
				"testData": "目的地",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 154.5,
				"height": 9,
				"width": 196.5
			},
			"printElementType": {
				"type": "hline"
			}
		}, {
			"options": {
				"left": 21,
				"top": 174,
				"height": 36,
				"width": 183,
				"field": "end_station_address",
				"testData": "福建厦门市集美区杏林白泉街1号之8-9店面（建昌大）",
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
				"textContentVerticalAlign": "middle"
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 211.5,
				"height": 12,
				"width": 174,
				"field": "order_id",
				"testData": "订单ID:51995314782232",
        "hideTitle": true,
				"textAlign": "center",
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "longText"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 222,
				"height": 12,
				"width": 174,
				"field": "box_type",
				"testData": "整箱: 无 散箱: 1/1",
        "hideTitle": true,
				"textAlign": "center",
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "longText"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 234,
				"height": 33,
				"width": 196.5,
				"field": "barcode",
				"testData": "51995314782232-0001",
        "hideTitle": true,
				"textAlign": "center",
				"textType": "barcode",
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"options": {
				"left": 10.5,
				"top": 277.5,
				"height": 19.5,
				"width": 196.5,
				"field": "remark",
				"testData": "提示：启运地、目的地中站点编码与站点名称共占一行，多出字段换行展示，为保证不与地址信息重合，请尽量确保两者字段和小于15。",
				"fontSize": 6,
        "hideTitle": true,
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "text"
			}
		}, {
      "options": {
				"left": 184.5,
				"top": 210,
				"height": 22.5,
				"width": 22.5
			},
			"printElementType": {
				"type": "oval"
      }
      // "options": {
			// 	"left": 184.5,
			// 	"top": 211.5,
			// 	"height": 22.5,
			// 	"width": 22.5,
			// 	"field": "cod",
      //   // "src": "/static/cod.jpg"
			// },
			// "printElementType": {
			// 	"type": "image"
      // }
    }, {
      "options": {
				"left": 187.5,
				"top": 216,
				"height": 12,
				"width": 16.5,
				"field": "is_scatter",
				"testData": "散",
				"textAlign": "center",
				"textContentVerticalAlign": "middle",
				"hideTitle": true,
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "text"
			}
    }, {
			"options": {
				"left": 10.5,
				"top": 297.5,
				"height": 33,
				"width": 33,
				"field": "qrcode",
				"testData": "51995314782232-0001",
        "hideTitle": true,
				"textAlign": "center",
				"textType": "qrcode",
				"fontFamily": "Microsoft YaHei",
			},
			"printElementType": {
				"type": "text"
			}
		}, {
			"printElementType": {
				"title": "表格",
				"type": "tableCustom"
			},
		}],
	}]
};

export default orderPanel;