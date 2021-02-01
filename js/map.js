$(function() {
	
	let mapChart = echarts.init(document.getElementById('body-con'));
	let mapData = []
	let convertData = [];
	let convert = [];
	let optionMap = {}
	let html = ''
	var colors1 = ["#FF3144", "#BB33FF", "#00D5FF", "#00CC66", "#0066FF"]
	let migrateData = data.migrateData
	let ponintData = data.ponintData
	var colors = ["255,49,68", "187,51,255", "0,213,255", "0,204,102", "0,102,255"]
	let mapUrl = "https://geo.datav.aliyun.com/areas_v2/bound/"
	let mapCode = 100000 + '_full'
	mapRender()
	// $.ajaxSettings.async = false;
	// $.get('https://www.fastmock.site/mock/cec8d88ba54e9fef814408c46ce2e99a/map/migrate', function(list) {
	// 	migrateData = list.data.migrateData
	// 	ponintData = list.data.ponintData
	// })
	// $.ajaxSettings.async = true;
	

	// 中国地图
	function mapRender() {
		mapChart.clear()
		// $.ajaxSettings.async = false;
	let geoJson = c
		// $.get(mapUrl + mapCode + '.json', function(geoJson) {
			echarts.registerMap('shanghai', geoJson);
			mapData = []
			convertData = []
			// mapChart.hideLoading();
			geoJson.features.map(item => {
				mapData.push({
					name: item.properties.name,
					value: item.properties.childrenNum,
					code: item.properties.adcode,
					level: item.properties.level,
					// parentCode: item.properties.parent.adcode,
					acroutes: item.properties.acroutes,
					sub: "1"
				})
			})

			optionMap = {
				tooltip: {
					trigger: "item",
					formatter: p => {
						let val = p.value;
						if (window.isNaN(val)) {
							val = 0;
						}
						let txtCon = p.name + "<br>" + "<hr>" + "数值 : " + Math.ceil(Math.random() * 30);
						return txtCon;
					}
				},
				geo: {
					map: 'shanghai',
					aspectScale: 0.75, //长宽比
					zoom: 1.2,
					roam: false,
					itemStyle: {
						normal: {
							borderColor: 'rgba(147, 235, 248, 0)',
							borderWidth: 0.5,
							areaColor: {
								x: 1000,
								y: 1000,
								x2: 1000,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#69c5d8' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#126caf' // 50% 处的颜色
								}],
								global: true // 缺省为 false
							},
							opacity: 1,
						},
						emphasis: {
							show: false,
							areaColor: '#69c5d8'
						}
					},
					z: 2
				},
				series: [{
						type: 'map',
						roam: false, //是否可缩放
						top: '8.5%',
						left: '13%',
						// aspectScale: .75,
						label: {
							normal: {
								position: 'right',
								formatter: '{b}',
								position: 'left',
								offset: [10, 30],
								color: '#fff',
								show: true,
								fontSize: 12
							},
							emphasis: {
								textStyle: {
									color: '#fff'
								}
							}
						},
						zlevel: 1,
						itemStyle: {
							normal: {
								borderColor: '#2cb3dd',
								borderWidth: 0.8,
								areaColor: {
									type: 'linear-gradient',
									x: 1000,
									y: 600,
									x2: 1000,
									y2: 0,
									colorStops: [{
										offset: 0,
										color: '#274d68' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#09132c' // 50% 处的颜色
									}],
									global: true // 缺省为 false
								},
							},
							emphasis: {
								show: false,
								areaColor: '#2cb3dd'
							}
						},
						zoom: 1.2,
						map: 'shanghai',
						data: mapData
					},
					{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						showEffectOn: 'render',
						zlevel: 1,
						rippleEffect: {
							period: 15,
							scale: 4,
							brushType: 'fill'
						},
						hoverAnimation: true,

						itemStyle: {
							normal: {
								color: '#1DE9B6',
								shadowBlur: 10,
								shadowColor: '#333'
							}
						},
						symbolSize: 12,
						data: ponintData
					},
					{

						type: 'lines',
						zlevel: 2,
						tooltip: {
							formatter: function(param) {
								return param.data.fromName + '->' + param.data.toName
							}
						},
						effect: {
							show: true,
							period: 3, //箭头指向速度，值越小速度越快
							trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
							symbol: 'arrow', //箭头图标
							symbolSize: 5, //图标大小
						},

						lineStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 1,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: 'rgba(' + colors[3] + ',0.1)' // 0% 处的颜色
									}, {
										offset: 1,
										color: 'rgba(' + colors[3] + ',1)' // 100% 处的颜色
									}],
									global: false // 缺省为 false
								},
								width: 2, //线条宽度
								opacity: 0.1, //尾迹线条透明度
								curveness: .3 //尾迹线条曲直度
							},
							emphasis: {
								width: 3,
								opacity: 0.5,
							}
						},
						data: migrateData
					},

				]
			};

			mapChart.setOption(optionMap);
		// });
	}
	// 长三角
	function changsanjiaoRender() {
		let geoJsonData = {}
		// $.ajaxSettings.async = false;
		// $.get('https://geo.datav.aliyun.com/areas_v2/bound/310000.json', function(geoJson) {
		// 	geoJsonData = geoJson
		// })
		// $.get('https://geo.datav.aliyun.com/areas_v2/bound/330000.json', function(geoJson) {
		// 	geoJsonData.features = geoJsonData.features.concat(geoJson.features)
		// })
		// $.get('https://geo.datav.aliyun.com/areas_v2/bound/320000.json', function(geoJson) {
		// 	geoJsonData.features = geoJsonData.features.concat(geoJson.features)
		// })
		geoJsonData = san1
		geoJsonData.features = geoJsonData.features.concat(san2.features)
		geoJsonData.features = geoJsonData.features.concat(san3.features)
		
		echarts.registerMap('长三角', geoJsonData);
		mapData = []
		geoJsonData.features.map(item => {
			let name = ''
			mapData.push({
				name: item.properties.name,
				value: item.properties.childrenNum,
				code: item.properties.adcode,
				level: item.properties.level,
				parentCode: item.properties.parent.adcode,
				acroutes: item.properties.acroutes,
				sub: '2'
			})
		})

		optionMap = {
			geo: [{
				id: '长三角',
				map: '长三角',
				roam: false, //控制地图是否可以缩放
				// center: [120.58, 31.3],
				zoom: 1,
				aspectScale: 0.75, //长宽比
				itemStyle: {
					normal: {
						borderColor: 'rgba(147, 235, 248, 0)',
						borderWidth: 0.5,
						areaColor: {
							x: 1000,
							y: 1000,
							x2: 1000,
							y2: 0,
							colorStops: [{
								offset: 0,
								color: '#69c5d8' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#126caf' // 50% 处的颜色
							}],
							global: true // 缺省为 false
						},
						opacity: 1,
					},
					emphasis: {
						show: false,
						areaColor: '#69c5d8'
					}
				},
				z: 2
			}, ],
			series: [{
					type: 'map',
					roam: false, //是否可缩放
					zoom: 1,
					top: '8.5%',
					left: '26%',
					map: '长三角',
					// center: [120.58, 31.3],
					label: {
						emphasis: {
							show: false
						}
					},
					zlevel: 1,
					itemStyle: {
						normal: {
							borderColor: '#2cb3dd',
							borderWidth: 0.8,
							areaColor: {
								type: 'linear-gradient',
								x: 1000,
								y: 600,
								x2: 1000,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#274d68' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#09132c' // 50% 处的颜色
								}],
								global: true // 缺省为 false
							},
						},
						emphasis: {
							show: false,
							areaColor: '#206468'
						}
					},
					data: mapData
				},
				{
					name: 'city',
					// type: "scatter",
					type: "effectScatter",
					showEffectOn: 'render',
					coordinateSystem: 'geo',
					// 设置散点的大小
					symbolSize: 20,
					color: '#00ca95',
					data: [{
							name: '上海市',
							value: [121.42112, 31.12712],
						},
						{
							name: '浙江省',
							value: [120.203753, 30.324164],
						},
						{
							name: '江苏省',
							value: [120.47698, 31.80109],
						},
					],
					symbolSize: function(val) {
						return 13;
					},
					label: {
						normal: {
							position: 'right',
							formatter: '{b}',
							algin: "right",
							color: '#fff',
							show: true,
							fontSize: 18
						},
						emphasis: {
							textStyle: {
								color: '#fff'
							}
						}
					},
					encode: {
						value: 2
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					zlevel: 1
				},

			]
		};
		mapChart.clear()

		mapChart.setOption(optionMap);

	}
	// 子地图
	function subMapRender(list) {
		// $.ajaxSettings.async = false;
		// $.get(mapUrl + mapCode + '.json', function(geoJson) {
			let geoJson = nj
			echarts.registerMap('shanghai', geoJson);
			mapData = []
			convertData = []
			// mapChart.hideLoading();
			geoJson.features.map(item => {
				mapData.push({
					name: item.properties.name,
					value: item.properties.childrenNum,
					code: item.properties.adcode,
					level: item.properties.level,
					parentCode: item.properties.parent.adcode,
					acroutes: item.properties.acroutes,
					sub: "2"
				})
				convertData.push({
					name: item.properties.name,
					value: item.properties.center,
					num: Math.ceil(Math.random()*80)
				})
			})

			optionMap = {
				geo: [{
					id: 'shanghai',
					map: 'shanghai',
					roam: false, //控制地图是否可以缩放
					// center: [120.58, 31.3],
					zoom: 1.2,
					aspectScale: 0.75, //长宽比
					itemStyle: {
						normal: {
							borderColor: 'rgba(147, 235, 248, 0)',
							borderWidth: 0.5,
							areaColor: {
								x: 1000,
								y: 1000,
								x2: 1000,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#69c5d8' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#126caf' // 50% 处的颜色
								}],
								global: true // 缺省为 false
							},
							opacity: 1,
						},
						emphasis: {
							show: false,
							areaColor: '#69c5d8'
						}
					},
					z: 2
				}, ],
				series: [
					{
						type: 'map',
						roam: false, //是否可缩放
						itemStyle: {
							normal: {
								borderColor: '#2cb3dd',
								borderWidth: 0.8,
								areaColor: {
									type: 'linear-gradient',
									x: 1000,
									y: 600,
									x2: 1000,
									y2: 0,
									colorStops: [{
										offset: 0,
										color: '#274d68' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#09132c' // 50% 处的颜色
									}],
									global: true // 缺省为 false
								},
							},
							emphasis: {
								show: false,
								areaColor: '#2cb3dd'
							}
						},
						label: {
							normal: {
								show: true,
								textStyle: {
									color: '#fff',
									zindex: 100,
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									color: '#fff',
								}
							}
						},
						zoom: 1.2,
						map: 'shanghai',
						data: mapData
					},
					{
						name: 'city',
						// type: "scatter",
						type: "effectScatter",
						showEffectOn: 'render',
						coordinateSystem: 'geo',
						// 设置散点的大小
						symbolSize: 20,
						color: '#00ca95',
						data: convertData,
						label:{
							show:true,
							formatter: p => {
								return p.data.num
							}
						},
						symbolSize: function(val) {
							return 30;
						},
						encode: {
							value: 2
						},
						showEffectOn: 'render',
						rippleEffect: {
							brushType: 'stroke'
						},
						zlevel: 2
					},
					{
						name: 'disr',
						type: "scatter",
						showEffectOn: 'render',
						coordinateSystem: 'geo',
						// 设置散点的大小
						symbolSize: 8,
						color: '#00af75',
						data: list,
						symbolSize: function(val) {
							return 13;
						},
						encode: {
							value: 2,
						},
						showEffectOn: 'render',
						rippleEffect: {
							brushType: 'stroke',
							opacity: 0.5
						},
					}
				]
			};
			mapChart.clear()
			mapChart.setOption(optionMap);
		// });
	}

	$('<div class="back">返回</div>').appendTo($('#body-con'));

	mapChart.on('click', function(e) {
		
		if (e.data.sub == "1") {
			if (e.name == "江苏省" || e.name == "上海市" || e.name == "浙江省") {
				migrateData = []
				ponintData = []
				mapRender()
				changsanjiaoRender()

				$('.back').show()
				$('.back').attr('level', e.data.level)
				$('.back').attr('sub', e.data.sub)
				$('.back').attr('city', e.data.acroutes)
				
			}
		}

		if (e.data.sub == "2") {
			let mapcode = ''
			if (e.data.value) {
				mapCode = e.data.code + '_full'
				migrateData = []
				ponintData = []
				// $.ajaxSettings.async = false;
				// $.get('https://www.fastmock.site/mock/cec8d88ba54e9fef814408c46ce2e99a/map/migrate', function(list) {
				// 	convert = list.data.convert
				// 	subMapRender(convert)
				// })
				// $.ajaxSettings.async = true;
					convert = data.convert
					subMapRender(convert)
			} else {
				mapCode = e.data.code
				convert = data.convert
				subMapRender(convert)
			}

			$('.back').show()
			$('.back').attr('sub', e.data.sub)
			$('.back').attr('level', e.data.level)
			$('.back').attr('city', e.data.acroutes)
		}

	})

	$('.back').click(function() {
		let level = $(this).attr('level')
		let city = $(this).attr('city')
		let sub = $(this).attr('sub')
		let parentCode = city.split(',')
		if (sub == '1') {
			migrateData = data.migrateData
			ponintData = data.ponintData
			mapRender()
			$('.back').hide()
		}
		if (sub == '2') {
			if (parentCode.length == 1) {
				mapCode = parentCode[parentCode.length - 1] + '_full'

				changsanjiaoRender()
			}
			if (parentCode.length == 2) {
				mapCode = parentCode[parentCode.length - 1] + '_full'
				parentCode.splice(parentCode.length - 1, 1)
				$('.back').attr('city', parentCode)
				convert = []
				subMapRender(convert)
			}
			if (parentCode.length == 3) {
				mapCode = parentCode[parentCode.length - 1] + '_full'
				parentCode.splice(parentCode.length - 1, 1)
				$('.back').attr('city', parentCode)
				convert = []
				subMapRender(convert)
			}
		}

	})

	let index = -1;
	var timer = setInterval(function() {
		// 隐藏提示框
		mapChart.dispatchAction({
			type: 'hideTip',
			seriesIndex: 0,
			dataIndex: index
		});
		// 显示提示框
		mapChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: index + 1
		});
		// 取消高亮指定的数据图形
		mapChart.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: index
		});
		// 高亮指定的数据图形
		mapChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index + 1
		});
		index++;
		if (index > 13) {
			index = -1;
		}
	}, 2000);
	//鼠标移入静止播放
	mapChart.on('mousemove', function(e) {
		clearInterval(timer);
		mapChart.dispatchAction({
			type: 'downplay',
			seriesIndex: 0
		});
		mapChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: e.dataIndex
		});
		mapChart.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: e.dataIndex
		});
	});
	//鼠标移出后先把上次的高亮取消
	mapChart.on('mouseout', function(e) {
		clearInterval(timer);
		mapChart.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: e.dataIndex
		});
		timer = setInterval(function() {
			// 隐藏提示框
			mapChart.dispatchAction({
				type: 'hideTip',
				seriesIndex: 0,
				dataIndex: index
			});
			// 显示提示框
			mapChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: index + 1
			});
			// 取消高亮指定的数据图形
			mapChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index
			});
			// 高亮指定的数据图形
			mapChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: index + 1
			});
			index++;
			if (index > 13) {
				index = -1;
			}
		}, 2000);
	});

	setTimeout(function() {
		mapRender()
	}, 1000);
})
