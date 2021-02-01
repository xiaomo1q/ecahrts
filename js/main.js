$(function() {
	var myChart = echarts.init(document.getElementById('main'));
	let unit = '人'

	// $.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail', {},
	// 	function(data) {
	// 		console.log(data.data)
	// 	})
	// let dataArr = [{
	// 		"code": "1003",
	// 		"name": "人员1",
	// 		"num": 4
	// 	},
	// 	{
	// 		"code": "1009",
	// 		"name": "人员2",
	// 		"num": 5
	// 	},
	// 	{
	// 		"code": "1011",
	// 		"name": "人员3",
	// 		"num": 3
	// 	},
	// 	{
	// 		"code": "1012",
	// 		"name": "人员4",
	// 		"num": 4
	// 	}
	// ]
	// let TData = dataArr.map(item => Number(item.num));
	// let max = Math.max(...TData);
	// let dataShadow = [];
	// for (var i = 0; i < dataArr.length; i++) {
	// 	dataShadow.push((max * 100 + 100) / 100); //最大值+1
	// }
	// const CubeLeft = echarts.graphic.extendShape({
	// 	shape: {
	// 		x: 0,
	// 		y: 0
	// 	},
	// 	buildPath: function(ctx, shape) {
	// 		const xAxisPoint = shape.xAxisPoint
	// 		const c0 = [shape.x, shape.y]
	// 		const c1 = [shape.x - 20, shape.y - 4]
	// 		const c2 = [xAxisPoint[0] - 20, xAxisPoint[1] - 4]
	// 		const c3 = [xAxisPoint[0], xAxisPoint[1]]
	// 		ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
	// 	}
	// })
	// const CubeRight = echarts.graphic.extendShape({
	// 	shape: {
	// 		x: 0,
	// 		y: 0
	// 	},
	// 	buildPath: function(ctx, shape) {
	// 		const xAxisPoint = shape.xAxisPoint
	// 		const c1 = [shape.x - 5, shape.y]
	// 		const c2 = [xAxisPoint[0] - 5, xAxisPoint[1]]
	// 		const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4]
	// 		const c4 = [shape.x + 10, shape.y - 4]
	// 		ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
	// 	}
	// })
	// const CubeTop = echarts.graphic.extendShape({
	// 	shape: {
	// 		x: 0,
	// 		y: 0
	// 	},
	// 	buildPath: function(ctx, shape) {
	// 		// 逆时针 角 y 负数向上  X 负数向左
	// 		const c1 = [shape.x - 5, shape.y]
	// 		const c2 = [shape.x + 10, shape.y - 4]
	// 		const c3 = [shape.x - 5, shape.y - 8]
	// 		const c4 = [shape.x - 20, shape.y - 4]
	// 		ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
	// 	}
	// })
	// echarts.graphic.registerShape('CubeLeft', CubeLeft)
	// echarts.graphic.registerShape('CubeRight', CubeRight)
	// echarts.graphic.registerShape('CubeTop', CubeTop)
	// option = {
	// 	title: {
	// 		text: '数据分析',
	// 		textStyle: {
	// 			align: 'center',
	// 			color: '#fff',
	// 			fontSize: 20,
	// 		},
	// 		top: '3%',
	// 		left: 'center'
	// 	},
	// 	grid: {
	// 		left: '10%',
	// 		right: 10,
	// 		top: '20%',
	// 		bottom: 25,
	// 		containLabel: true
	// 	},
	// 	tooltip: {
	// 		formatter: "{b}: {c}" + unit
	// 	},
	// 	xAxis: [{
	// 		type: "category",
	// 		data: dataArr.map(item => item.name),
	// 		axisLabel: {
	// 			interval: 0,
	// 			rotate: dataArr.length > 5 ? 15 : 0, //数据大于5条时切斜显示
	// 			color: "rgba(255,255,255,.8)",
	// 			fontSize: 14,
	// 			align: "center",
	// 			padding: dataArr.length > 5 ? [30, 0, 0, -24] : [0, 0, 0, -24]
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		},
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: "rgba(135,142,148,0.5)"
	// 			}
	// 		}
	// 	}],
	// 	yAxis: {
	// 		type: "value",
	// 		name: "单位/" + unit,
	// 		nameTextStyle: {
	// 			fontSize: 14,
	// 			color: "#9ca2a8",
	// 			padding: [0, 0, 10, -30]
	// 		},
	// 		scale: false,
	// 		axisLabel: {
	// 			color: "#a0a5ab",
	// 			fontSize: 12,
	// 		},
	// 		splitLine: {
	// 			show: true,
	// 			lineStyle: {
	// 				color: "rgba(255,255,255,.1)"
	// 			}
	// 		},
	// 		axisLine: {
	// 			show: false
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		}
	// 	},
	// 	series: [{
	// 			type: 'custom',
	// 			zlevel: 2,
	// 			renderItem: (params, api) => {
	// 				const location = api.coord([api.value(0), api.value(1)])
	// 				return {
	// 					type: 'group',
	// 					children: [{
	// 						type: 'CubeLeft',
	// 						shape: {
	// 							api,
	// 							xValue: api.value(0),
	// 							yValue: api.value(1),
	// 							x: location[0],
	// 							y: location[1],
	// 							xAxisPoint: api.coord([api.value(0), 0])
	// 						},
	// 						style: {
	// 							fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	// 								offset: 0.4,
	// 								color: '#93D884'
	// 							}, {
	// 								offset: 1,
	// 								color: 'rgba(0,0,0,0)'
	// 							}])
	// 						}
	// 					}, {
	// 						type: 'CubeRight',
	// 						shape: {
	// 							api,
	// 							xValue: api.value(0),
	// 							yValue: api.value(1),
	// 							x: location[0],
	// 							y: location[1],
	// 							xAxisPoint: api.coord([api.value(0), 0])
	// 						},
	// 						style: {
	// 							fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	// 								offset: 0.4,
	// 								color: '#3FBB70' // 顶部
	// 							}, {
	// 								offset: 1,
	// 								color: 'rgba(0,0,0,0)' // 底部
	// 							}])
	// 						}
	// 					}, {
	// 						type: 'CubeTop',
	// 						shape: {
	// 							api,
	// 							xValue: api.value(0),
	// 							yValue: api.value(1),
	// 							x: location[0],
	// 							y: location[1],
	// 							xAxisPoint: api.coord([api.value(0), 0])
	// 						},
	// 						style: {
	// 							fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	// 								offset: 0,
	// 								color: '#cbec8a'
	// 							}, {
	// 								offset: 1,
	// 								color: '#cbec8a'
	// 							}])
	// 						}
	// 					}]
	// 				}
	// 			},
	// 			data: TData
	// 		},
	// 		{
	// 			type: 'bar',
	// 			label: {
	// 				normal: {
	// 					show: true,
	// 					position: 'top',
	// 					distance: 10,
	// 					fontSize: 16,
	// 					color: '#97af58',
	// 				}
	// 			},
	// 			barWidth: 20,
	// 			itemStyle: {
	// 				color: 'transparent'
	// 			},
	// 			data: TData
	// 		}, {
	// 			type: "bar",
	// 			itemStyle: {
	// 				// borderColor: 'rgba(151,175,88,0.5)',
	// 				color: 'rgba(0,0,0,0)'
	// 			},
	// 			barWidth: 20 * 2.4,
	// 			barGap: "-155%",
	// 			tooltip: {
	// 				show: false
	// 			},
	// 			cursor: "default",
	// 			data: dataShadow,
	// 			animation: false
	// 		},
	// 	]
	// }
	
	var chartData = [
	        {name:'2020.1', value: 16758, value1: 5404, value2: 1047},
	        {name:'2020.2', value: 15001, value1: 2729, value2: 623},
	        {name:'2020.3', value: 28932, value1: 10321, value2: 1613},
	        {name:'2020.4', value: 36245, value1: 13621, value2: 1886},
	        {name:'2020.5', value: 31563, value1: 10851, value2: 1980},
	        {name:'2020.6', value: 36389, value1: 12659, value2: 1116},
	        {name:'2020.7', value: 38000, value1: 10700, value2: 1700}
	    ];
	
	    option= {
	        tooltip: {
	            show: true,
	            trigger: 'axis',  //axis , item
	            backgroundColor:'rgba(0,15,78,0.6)',
	            borderColor:'#00afff',
	            borderWidth: 1,
	            borderRadius: 0,
	            textStyle: {
	                color: "#fff",
	                fontSize: 13,
	                align:'left'
	            },
	            axisPointer:{
	                type: 'line', //'line' | 'cross' | 'shadow' | 'none
	                lineStyle: {
	                    width: 1,
	                    type: 'dotted',
	                    color: 'rgba(46,149,230,.9)'
	                }
	            }
	        },
	        legend:{
	            show: true,
	            orient:'horizontal', //'vertical' 
	            data: ['检查', '发现', '整改'],
	            icon: 'circle',
	            selectedMode: true,
	            itemWidth: 10,
	            itemHeight: 10,
	            itemGap:20,
	            textStyle:{
	                fontSize: 13,
	                color: '#9bc8ff'
	            },
	           x: '60',
	                     y: '25'
	        },
	        grid: {
	            top: '30%',
	            right: '5%',
	            bottom: '10%',
	            left: '12%'
	        },
	        xAxis:{
	            type: 'category',
	            axisLabel: {
	                show: true,
	                interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
	                textStyle: {
	                    color: '#fff',
	                    fontSize: 13
	                },
	                formatter: '{value}'
	            },
	            axisLine:{
	                lineStyle:{
	                    color:'rgba(15,45,134,.9)'
	                }
	            },
	            axisTick:{
	                show: false //坐标轴小标记
	            },
	            data: (function(data){
	                var arr=[];
	                data.forEach(function(items){
	                    arr.push(items.name);   //name
	                });
	                return arr;
	            })(chartData)  //载入横坐标数据
	        },
	        yAxis: {
	            type: 'value',
	            name: '（次）',
	            nameTextStyle:{
	                color:'#93d3fc',
	                fontSize: 12,
	                align: 'right'
	            },
	            axisLabel: {
	                show: true,
	                textStyle: {
	                    color: '#9bc8ff',
	                    fontSize: 13
	                },
	                interval: 0, //类目间隔 设置为 1，表示『隔一个标签显示一个标签』
	                margin: 10,
	                //formatter: '{value}'
	            },
	            splitNumber: 5, //y轴刻度设置(值越大刻度越小)
	            axisLine:{ //y轴线
	                show: false
	            },
	            splitLine: {
	                show: true,
	                lineStyle: {
	                    color: 'rgba(15,45,134,.6)', //横向网格线颜色
	                    width: 1
	                }
	            },
	            axisTick:{
	                show: false //坐标轴小标记
	            }
	        },
	        series:[
	            {
	                name:'检查',
	                type:'scatter',
	                stack: '总量',
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'top',
	                        textStyle: {
	                            color: '#9bc8ff',
	                            fontSize: 12
	                        },
	                        formatter: '{c}' //图形上显示数字
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: 'rgba(255,55,135,1)', //颜色
	                    }
	                },
	                symbol: 'circle', //circle, rect, roundRect, triangle,  pin, diamond, arrow
	                symbolPosition: 'end',
	                symbolSize: 30,
	                symbolOffset: [0, '-120%'],
	                data: (function(data){
	                    var arr=[];
	                    data.forEach(function(items){ 
	                        var itemName = items.name,
	                            itemValue = items.value,
	                            itemStyle = itemValue/1000; //console.log(itemStyle)
	                        arr.push({
	                            name: itemName,
	                            value: itemValue,
	                            symbolSize: itemStyle
	                        })
	                    });
	                    return arr;
	                })(chartData)  //载入数据并设置图形尺寸
	            },
	            {
	                name:'发现',
	                type:'pictorialBar',
	                barWidth: 40,
	                stack: '总量',
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'top',
	                        textStyle: {
	                            color: '#9bc8ff',
	                            fontSize: 12
	                        },
	                        formatter: '{c}' //图形上显示数字
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: {
	                            type: 'linear',
	                            x: 0,
	                            y: 0,
	                            x2: 0,
	                            y2: 1,
	                            colorStops: [{
	                                offset: 0, color: 'rgba(142,48,255,1)' // 0% 处的颜色
	                            }, {
	                                offset: 1, color: 'rgba(142,48,255,.2)' // 100% 处的颜色
	                            }],
	                            globalCoord: false // 缺省为 false
	                        }, //渐变颜色
	                    }
	                },
	                symbol: 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
	                data: (function(data){
	                    var arr=[];
	                    data.forEach(function(items){
	                        arr.push(items.value1);   //value
	                    });
	                    return arr;
	                })(chartData)  //载入数据
	            },
	            {
	                name:'整改',
	                type:'pictorialBar',
	                barWidth: 40,
	                stack: '总量',
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'top',
	                        textStyle: {
	                            color: '#9bc8ff',
	                            fontSize: 12
	                        },
	                        formatter: '{c}' //图形上显示数字
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: {
	                            type: 'linear',
	                            x: 0,
	                            y: 0,
	                            x2: 0,
	                            y2: 1,
	                            colorStops: [{
	                                offset: 0, color: 'rgba(0,236,150,1)' // 0% 处的颜色
	                            }, {
	                                offset: 1, color: 'rgba(0,236,150,.2)' // 100% 处的颜色
	                            }],
	                            globalCoord: false // 缺省为 false
	                        }, //渐变颜色
	                    }
	                },
	                symbol: 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
	                data: (function(data){
	                    var arr=[];
	                    data.forEach(function(items){
	                        arr.push(items.value2);   //value
	                    });
	                    return arr;
	                })(chartData)  //载入数据
	            }
	        ]   
	    };
	
	    var app = {
	            curIndex: -1,
	    };
	    setInterval(()=> {
	        var dataLen = chartData.length;
	        
	        // 取消之前高亮的图形
	        myChart.dispatchAction({
	            type: 'downplay',
	            seriesIndex: 0,
	            dataIndex: app.curIndex
	        });
	    
	        app.curIndex = (app.curIndex + 1) % dataLen;
	    
	        // 高亮当前图形
	        myChart.dispatchAction({
	            type: 'highlight',
	            seriesIndex: 0,
	            dataIndex: app.curIndex,
	        });
	    
	        // 显示 tooltip
	        myChart.dispatchAction({
	            type: 'showTip',
	            seriesIndex: 0,
	            dataIndex: app.curIndex
	        });
	    
	    }, 3000);

	
	
	
	myChart.setOption(option);

})
