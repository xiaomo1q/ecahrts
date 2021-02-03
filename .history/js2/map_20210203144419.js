$(function () {
    var myChart1 = echarts.init(document.getElementById('body-con'));

    echarts.registerMap('chinaMap', chinaMap);
    echarts.registerMap('chinaMapOutline', chinaMapOutline);
    var chinaGeoCoordMap = {
		'黑龙江': [127.9688, 45.368],
		'内蒙古': [110.3467, 41.4899],
		"吉林": [125.8154, 44.2584],
		'北京市': [116.4551, 40.2539],
		"辽宁": [123.1238, 42.1216],
		"河北": [114.4995, 38.1006],
		"天津": [117.4219, 39.4189],
		"山西": [112.3352, 37.9413],
		"陕西": [109.1162, 34.2004],
		"甘肃": [103.5901, 36.3043],
		"宁夏": [106.3586, 38.1775],
		"青海": [101.4038, 36.8207],
		"新疆": [87.9236, 43.5883],
		"西藏": [91.11, 29.97],
		"成都": [103.9526, 30.7617],
		"重庆": [108.384366, 30.439702],
		
		"河南": [113.4668, 34.6234],
		"江苏": [118.8062, 31.9208],
		"安徽": [117.29, 32.0581],
		"浙江": [119.5313, 29.8773],
		"福州": [119.4543, 25.9222],
		"江西": [116.0046, 28.6633],
		"湖南": [113.0823, 28.2568],
		"贵州": [106.6992, 26.7682],
		"云南": [102.9199, 25.4663],
		"广东": [113.12244, 23.009505],
		"广西": [108.479, 23.1152],
		"海南": [110.3893, 19.8516],
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
        "宿州":[],

	};
	var chinaDatas = [
		[{
			name: '黑龙江',
			value: 0
		}],	[{
			name: '内蒙古',
			value: 0
		}],	[{
			name: '吉林',
			value: 0
		}],	[{
			name: '辽宁',
			value: 0
		}],	[{
			name: '河北',
			value: 0
		}],	[{
			name: '天津',
			value: 0
		}],	[{
			name: '山西',
			value: 0
		}],	[{
			name: '陕西',
			value: 0
		}],	[{
			name: '甘肃',
			value: 0
		}],	[{
			name: '宁夏',
			value: 0
		}],	[{
			name: '青海',
			value: 0
		}],	[{
			name: '新疆',
			value: 0
		}],[{
			name: '西藏',
			value: 0
		}],	[{
			name: '四川',
			value: 0
		}],	[{
			name: '重庆',
			value: 0
		}],	[{
			name: '山东',
			value: 0
		}],	[{
			name: '河南',
			value: 0
		}],	[{
			name: '江苏',
			value: 0
		}],	[{
			name: '安徽',
			value: 0
		}],	[{	
		    name: '湖北',
			value: 0
		}],	[{
			name: '浙江',
			value: 0
		}],	[{
			name: '福建',
			value: 0
		}],	[{
			name: '江西',
			value: 0
		}],	[{
			name: '湖南',
			value: 0
		}],	[{
			name: '贵州',
			value: 0
		}],[{
			name: '广西',
			value: 0
		}],	[{
			name: '海南',
			value: 0
		}],	[{
			name: '北京市',
			value: 1
		}]
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