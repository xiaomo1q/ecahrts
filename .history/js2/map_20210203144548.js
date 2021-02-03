$(function () {
    var myChart1 = echarts.init(document.getElementById('body-con'));

    echarts.registerMap('chinaMap', chinaMap);
    echarts.registerMap('chinaMapOutline', chinaMapOutline);
    var chinaGeoCoordMap = {
        '上海': [121.4648, 31.2891],
        '北京': [116.4551, 40.2539],
        "苏州":[],
        "杭州":[],
        "南京":[],
        "深圳":[],
        "宁波":[],
        "嘉兴":[],
        "重庆": [108.384366, 30.439702],
        "南通":[],
        "成都": [103.9526, 30.7617],
        "合肥":[],
        "广州":[],
		"武汉": [114.3896, 30.6628],
        "无锡":[114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "西安":[109.1162, 34.2004],
        "常州":[],
        "大连":[],
        "沈阳":[],
        "绍兴":[],
        "郑州": [113.4668, 34.6234],
        "长沙":[],
        "盐城":[],
        "湖州":[],
        "青岛": [],
        "镇江":[],
        "哈尔滨":[],
        "舟山":[],
        "济南": [117.1582, 36.8701],
        "泰州":[],
        "南昌":[],
        "福州": [119.4543, 25.9222],
        "扬州":[],
        "温州":[],
        "安庆":[],
        "昆明":[],
        "芜湖":[],
        "徐州":[],
        "马鞍山":[],
        "金华":[],
        "蚌埠":[],
        "宣城":[],
        "六安":[],
        "淮安":[],
        "阜阳":[],
        "兰州":[],
        "长春":[],
        "铜陵":[],
        "滁州":[],
        "贵阳":[],
        "丽水":[],
        "宿迁":[],
        "台州":[],
        "亳州":[],
        "石家庄":[],
        "厦门":[],
        "黄山":[],
        "宜昌":[],
        "淮南":[],
        "太原":[],
        "荆州":[],
        "衢州":[],
        "黄石":[],
        "连云港":[],
        "宿州":[],
        "岳阳":[],
        "呼和浩特":[],
        "乌鲁木齐":[],
        "九江":[],
        "宜宾":[],
        "淮北":[],
        "南宁":[],
        "攀枝花":[],
        "黄冈":[],
        "鄂州":[],
        "海口":[],
        "西宁":[],
        "咸宁":[],
        "泸州":[],
        "拉萨":[],
	};
	var chinaDatas = [
		[{
			name: '黑龙江',
			value: 0
		}],	
	];

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			var toCoord = [121.4648, 31.2891];
			if(fromCoord && toCoord) {
				res.push([ {
					coord: toCoord,
				},{
					coord: fromCoord,
					value: dataItem[0].value
				}]);
			}
		}
		return res;
	};
	var series = [
	    {
            map: 'chinaMap',
            type: 'map',
            zoom:1.2,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            top: '16%',
            tooltip:{
                show:false
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor:'transparent',
                    borderColor: 'rgba(0,255,255,.1)',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor:'rgba(0,255,255,.1)',
                    textStyle: {
                        color: 'red'
                    }
                }
            }
        },    
	];
	[['上海', chinaDatas]].forEach(function(item, i) {
		series.push({
				type: 'lines',
				zlevel: 2,
				effect: {
					show: true,
					period: 4, //箭头指向速度，值越小速度越快
					trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
					symbol: 'arrow', //箭头图标
					symbolSize: 5, //图标大小
				},
				lineStyle: {
					normal: {
						width: 1, //尾迹线条宽度
						opacity: 1, //尾迹线条透明度
						curveness: .3 //尾迹线条曲直度
					}
				},
				data: convertData(item[1])
			}, {
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: { //涟漪特效
					period: 4, //动画时间，值越小速度越快
					brushType: 'stroke', //波纹绘制方式 stroke, fill
					scale: 4 //波纹圆环最大限制，值越大波纹越大
				},
				label: {
					normal: {
						show: true,
						position: 'right', //显示位置
						offset: [5, 0], //偏移设置
						formatter: function(params){//圆环显示文字
							return params.data.name;
						},
						fontSize: 13
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'circle',
				symbolSize: function(val) {
					return 5+ val[2] * 5; //圆环大小
				},
				itemStyle: {
					normal: {
						show: false,
						color: '#34c6bb'
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[0].name,
						value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
					};
				}),
			}
		);
	});



option = {
    tooltip: {
        trigger: 'item'
    },
    color:['#34c6bb'],
    geo: {
        silent: true,
        map: 'chinaMapOutline',
        zoom: 0.8,
        top: '0%',
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            }
        },

        roam: false,
        itemStyle: {
                normal: {
                    areaColor: 'rgba(0,255,255,.02)',
                    borderColor: '#00ffff',
                    borderWidth: 1.5,
                    shadowColor: '#00ffff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 4,
                    shadowBlur: 10,
                },
                emphasis: {
                    areaColor: 'transparent', //悬浮背景
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
    },
    series:series
}
    myChart1.setOption(option);
})