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
        "池州":[],
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
    let chinaDatas =
    [
        [{"name":"北京","value":100}],
        [{"name":"苏州","value":68.02}],
        [{"name":"杭州","value":61.34}],
        [{"name":"南京","value":52.96}],
        [{"name":"深圳","value":44.98}],
       [ {"name":"宁波","value":40.14}],
        [{"name":"嘉兴","value":37.77}],
        [{"name":"重庆","value":36.52}],
        [{"name":"南通","value":34}],
        [{"name":"成都","value":32.15}],
        [{"name":"合肥","value":30.84}],
        [{"name":"广州","value":30.67}],
        [{"name":"武汉","value":29.6}],
        [{"name":"无锡","value":29.55}],
        [{"name":"天津","value":28.32}],
        [{"name":"西安","value":26.6}],
        [{"name":"常州","value":23.13}],
        [{"name":"大连","value":20.96}],
        [{"name":"沈阳","value":20.91}],
        [{"name":"绍兴","value":18.9}],
        [{"name":"郑州","value":18.83}],
        [{"name":"长沙","value":18.49}],
        [{"name":"盐城","value":18.47}],
        [{"name":"湖州","value":18.44}],
        [{"name":"青岛","value":18.43}],
        [{"name":"镇江","value":17.66}],
        [{"name":"哈尔滨","value":17.4}],
        [{"name":"舟山","value":17.35}],
        [{"name":"济南","value":17.25}],
        [{"name":"泰州","value":17.03}],
        [{"name":"南昌","value":16.86}],
        [{"name":"福州","value":16.79}],
        [{"name":"扬州","value":16.78}],
        [{"name":"温州","value":16.67}],
        [{"name":"安庆","value":16.42}],
        [{"name":"昆明","value":16.12}],
        [{"name":"芜湖","value":15.34}],
        [{"name":"徐州","value":15.27}],
        [{"name":"马鞍山","value":14.6}],
        [{"name":"金华","value":13.64}],
        [{"name":"蚌埠","value":13.51}],
        [{"name":"宣城","value":13.06}],
        [{"name":"六安","value":12.94}],
        [{"name":"淮安","value":12.25}],
        [{"name":"阜阳","value":12.14}],
        [{"name":"兰州","value":11.94}],
        [{"name":"池州","value":11.94}],
        [{"name":"长春","value":11.85}],
        [{"name":"铜陵","value":11.75}],
        [{"name":"滁州","value":11.73}],
        [{"name":"贵阳","value":11.66}],
        [{"name":"丽水","value":11.52}],
        [{"name":"宿迁","value":11.11}],
        [{"name":"台州","value":11.01}],
        [{"name":"亳州","value":10.73}],
        [{"name":"石家庄","value":10.5}],
        [{"name":"厦门","value":10.42}],
        [{"name":"黄山","value":10.29}],
        [{"name":"宜昌","value":10.2}],
        [{"name":"淮南","value":9.21}],
        [{"name":"太原","value":8.92}],
        [{"name":"荆州","value":8.81}],
        [{"name":"衢州","value":8.7}],
        [{"name":"银川","value":7.7}],
        [{"name":"黄石","value":6.8}],
        [{"name":"连云港","value":6.59}],
        [{"name":"宿州","value":6.55}],
        [{"name":"岳阳","value":6.41}],
        [{"name":"呼和浩特","value":6.09}],
        [{"name":"乌鲁木齐","value":5.89}],
        [{"name":"九江","value":5.27}],
        [{"name":"宜宾","value":4.96}],
        [{"name":"淮北","value":4.89}],
        [{"name":"南宁","value":4.42}],
        [{"name":"攀枝花","value":2.88}],
       [{"name":"黄冈","value":1.43}],
        [{"name":"鄂州","value":1.25}],
        [{"name":"海口","value":1.19}],
        [{"name":"西宁","value":0.38}],
        [{"name":"咸宁","value":0.22}],
        [{"name":"泸州","value":0.17}],
        [{"name":"拉萨","value":0.1}],
        
        ]
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
					return 5+ val[2] * 0.08; //圆环大小
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