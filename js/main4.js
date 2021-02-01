$(function() {
	var myChart4 = echarts.init(document.getElementById('main4'));
	var uploadedDataURLblue = "https://www.makeapie.com/asset/get/s/data-1596261792887-rfxw9oPbZ.png";

	var uploadedDataURLgreen = "https://www.makeapie.com/asset/get/s/data-1596261779112-YOj9zlVq0.png";
	Main4()

	function Main4() {
		$.ajax({
			url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
			dataType: "jsonp",
			success: function(cxt) {
				var res = cxt.data || "";
				res = JSON.parse(res);

				let data = [
					{
						name: '无症状感染者',
						value: res.chinaTotal.noInfect,
					}, {
						name: '本土现有确诊',
						value: res.chinaTotal.localConfirm,
					},
					{
						name: '现有确诊',
						value: res.chinaTotal.nowConfirm,
					},
					{
						name: '境外输入',
						value: res.chinaTotal.importedCase,
					}, {
						name: '累计死亡',
						value: res.chinaTotal.dead,
					},
				];
				
				let htmlCharts4 = ''
				htmlCharts4 +='<tr>'
				htmlCharts4 +=	'<td>'
				htmlCharts4 +=		'<p>无症状感染者</p>'
				htmlCharts4 +=		'<h4 style="color: #a3d2ca">'+res.chinaTotal.noInfect+'</h4>'
				htmlCharts4 +=	'</td>'
				htmlCharts4 +=	'<td>'
				htmlCharts4 +=		'<p>本土现有确诊</p>'
				htmlCharts4 +=		'<h4 style="color: #5eaaa8">'+res.chinaTotal.localConfirm+'</h4>'
				htmlCharts4 +=	'</td>'
				htmlCharts4 +='</tr>'
				htmlCharts4 +='<tr>'
				htmlCharts4 +=	'<td>'
				htmlCharts4 +=		'<p>现有确诊</p>'
				htmlCharts4 +=		'<h4 style="color: #62959c">'+res.chinaTotal.nowConfirm+'</h4>'
				htmlCharts4 +=	'</td>'
				htmlCharts4 +=	'<td>'
				htmlCharts4 +=		'<p>境外输入</p>'
				htmlCharts4 +=		'<h4 style="color: #008891">'+res.chinaTotal.importedCase+'</h4>'
				htmlCharts4 +=	'</td>'
				htmlCharts4 +='</tr>'
				htmlCharts4 +='<tr>'
				htmlCharts4 +=	'<td>'
				htmlCharts4 +=		'<p>累计死亡</p>'
				htmlCharts4 +=		'<h4 style="color: #00587a">'+res.chinaTotal.dead+'</h4>'
				htmlCharts4 +=	'</td>'
				htmlCharts4 +=	'<td></td>'
				htmlCharts4 +='</tr>'
				
				$('.body-right table').html(htmlCharts4)
				
				

				const center = ['80%', '45%'];
				const color = [
					'#a3d2ca',
					'#5eaaa8',
					'#62959c',
					'#008891',
					'#00587a',
				];
				const dataArcStyle = {
					label: {
						show: true,
					},
					labelLine: {
						show: true,
						length: 0,
						length2: 20
					},
					emphasis: {
						labelLine: {
							show: true
						}
					}
				};
				data = data.map(d => {
					d = Object.assign(d, dataArcStyle);
					return d;
				});
				const originDataLen = data.length;
				const spanAngle = 90;
				const repeatedMultiple = 180 / spanAngle;
				const addDataLen = parseInt((repeatedMultiple - 1) * originDataLen);
				for (let index = 0; index < addDataLen; index++) {
					data.push({
						name: null,
						value: 0,
						itemStyle: {
							color: 'rgba(0,0,0,0)',
						},
						tooltip: {
							show: false
						}
					});
				}
				const dataArc = {
					type: 'pie',
					roseType: 'area',
					clockwise: false,
					center,
					radius: ['30%', '90%'],
					data,
					label: {
						show: true
					}
				};
				const backgroundArc0 = {
					type: 'pie',
					radius: ['0%', '0%'],
					center,
					silent: true,
					clockwise: false,
					label: {
						show: false,
					},
					
					data: [{
							name: null,
							value: spanAngle,
							itemStyle: {
								color: 'rgba(220,220,220,0)',
								borderColor: 'rgba(255,255,255,.3)',
							},
							
						},
						{
							name: null,
							value: 360 - spanAngle,
							itemStyle: {
								color: 'rgba(220,220,220,0)',
							},
						}
					]
				};
				const backgroundArc1 = JSON.parse(JSON.stringify(backgroundArc0));
				option = {
					color,
					tooltip: {
						show: true
					},
					series: [backgroundArc0, backgroundArc1, dataArc]
				};
				myChart4.setOption(option);
			}
		})
	}

})

// let titleArr = [],
// 	legendArr = [],
// 	seriesArr = [],
// 	total = 0,
// 	colors = [
// 		['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
// 		['#0b2a50', '#1265ce', '#1987d2', '#1c94d4'],
// 		['#0b2a50', '#1265ce', '#1987d2', '#1c94d4'],
// 		['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
// 		['#0b2a50', '#1265ce', '#1987d2', '#1c94d4'],
// 		['#0b2a50', '#1265ce', '#1987d2', '#1c94d4']
// 	]
// for (let i = 0; i < data.length; i++) {
// 	total += data[i].value
// }

// for (let i = 0; i < data.length; i++) {
// 	if (i < 3) {
// 		titleArr.push({
// 			text: data[i].name,
// 			left: (i) * 30 + 19 + '%',
// 			top: '70%',
// 			textAlign: 'center',
// 			textStyle: {
// 				fontWeight: 'normal',
// 				fontSize: 12,
// 				color: '#a7d4e2',
// 				textAlign: 'center',
// 			},
// 		});
// 		legendArr.push({
// 			left: (i) * 30 + 30 + '%',
// 			top: '33%',
// 			itemWidth: 8,
// 			itemHeight: 12,
// 			data: [{
// 				name: data[i].name,
// 				icon: 'image://' + data[i].icon
// 			}],
// 			textStyle: {
// 				fontSize: 12, //字体大小
// 				color: 'transparent', //字体颜色
// 			},

// 		})
// 		seriesArr.push({
// 			name: data[i].name,
// 			type: 'pie',
// 			clockWise: true,
// 			center: [(i) * 30 + 20 + '%', '50%'],
// 			radius: ['25%', '35%'],
// 			itemStyle: {
// 				normal: {

// 					label: {
// 						show: false
// 					},
// 					labelLine: {
// 						show: false
// 					},
// 				}
// 			},
// 			hoverAnimation: false,

// 			data: [{
// 				value: data[i].value,
// 				itemStyle: {
// 					normal: {
// 						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
// 								offset: 0,
// 								color: colors[i][1]
// 							}, {
// 								offset: 0.5,
// 								color: colors[i][2]
// 							},
// 							{
// 								offset: 1,
// 								color: colors[i][3]
// 							}
// 						]),

// 						shadowColor: colors[i][1],
// 						shadowBlur: 0,

// 					}
// 				},
// 				label: {
// 					normal: {
// 						formatter: function(params) {
// 							return params.value;
// 						},
// 						position: 'center',
// 						show: true,
// 						textStyle: {
// 							fontSize: '18',
// 							fontWeight: 'bold',
// 							fontFamily: 'Verdana',
// 							color: '#eefafb'
// 						}
// 					}
// 				},
// 			}, {
// 				value: total - data[i].value,
// 				name: 'invisible',
// 				itemStyle: {
// 					normal: {
// 						color: colors[i][0]
// 					},
// 					emphasis: {
// 						color: colors[i][0]
// 					}
// 				}
// 			}]
// 		})

// 	} else {
// 		titleArr.push({
// 			text: data[i].name,
// 			left: (i - 3) * 30 + 19 + '%',
// 			top: '91%',
// 			textAlign: 'center',
// 			textStyle: {
// 				fontWeight: 'normal',
// 				fontSize: 12,
// 				color: '#a7d4e2',
// 				textAlign: 'center',
// 			},
// 		});
// 		legendArr.push({
// 			left: (i - 3) * 30 + 30 + '%',
// 			top: '30%',
// 			itemWidth: 8,
// 			itemHeight: 12,

// 			data: [{
// 				name: data[i].name,
// 				icon: 'image://' + data[i].icon

// 			}],
// 			textStyle: {
// 				fontSize: 12, //字体大小
// 				color: 'transparent', //字体颜色
// 			},

// 		})
// 		seriesArr.push({
// 			name: data[i].name,
// 			type: 'pie',
// 			clockWise: true,
// 			center: [(i - 3) * 30 + 20 + '%', '72%'],
// 			radius: ['35%', '45%'],

// 			itemStyle: {
// 				normal: {

// 					label: {
// 						show: false
// 					},
// 					labelLine: {
// 						show: false
// 					},
// 				}
// 			},
// 			hoverAnimation: false,

// 			data: [{
// 				value: data[i].value,
// 				itemStyle: {
// 					normal: {
// 						color: colors[i][1],
// 						shadowColor: colors[i][1],
// 						shadowBlur: 0,

// 					}
// 				},
// 				label: {
// 					normal: {
// 						formatter: function(params) {
// 							return params.value;
// 						},
// 						position: 'center',
// 						show: true,
// 						textStyle: {
// 							fontSize: '12',
// 							fontWeight: 'bold',
// 							color: '#eefafb'
// 						}
// 					}
// 				},
// 			}, {
// 				value: total - data[i].value,
// 				name: 'invisible',
// 				itemStyle: {
// 					normal: {
// 						color: colors[i][0]
// 					},
// 					emphasis: {
// 						color: colors[i][0]
// 					}
// 				}
// 			}]
// 		})
// 	}
// }


// option = {
// 	title: titleArr,
// 	legend: legendArr,
// 	series: seriesArr
// }
