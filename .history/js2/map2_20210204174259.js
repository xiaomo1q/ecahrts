$(function () {
    var myChart1 = echarts.init(document.getElementById('body-con'));

    echarts.registerMap('china', chinaMap);
    echarts.registerMap('chinaMapOutline', chinaMapOutline);
    var chinaGeoCoordMap = {
        "北京": [116.4551, 40.2539],
        "苏州": [120.619585, 31.299379],
        "杭州": [120.209947, 30.245853],
        "南京": [118.796623, 32.059352],
        "深圳": [114.085947, 22.547],
        "宁波": [121.6216, 29.859515],
        "嘉兴": [120.750865, 30.762653],
        "重庆": [108.384366, 30.439702],
        "南通": [120.864608, 32.016212],
        "成都": [103.9526, 30.7617],
        "合肥": [117.227308, 31.82057],
        "广州": [113.264385, 23.129112],
        "武汉": [114.3896, 30.6628],
        "无锡": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "西安": [109.1162, 34.2004],
        "常州": [119.946973, 31.772752],
        "大连": [121.618622, 38.91459],
        "沈阳": [123.465009, 41.677287],
        "绍兴": [120.582112, 29.997117],
        "郑州": [113.4668, 34.6234],
        "长沙": [112.938888, 28.228272],
        "盐城": [120.139998, 33.377631],
        "湖州": [120.102398, 30.867198],
        "青岛": [120.374402, 36.168923],
        "镇江": [119.452753, 32.204402],
        "哈尔滨": [126.535319, 45.803131],
        "舟山": [122.106863, 30.016028],
        "济南": [117.1582, 36.8701],
        "泰州": [119.980546, 32.528857],
        "南昌": [115.857963, 28.683016],
        "福州": [119.4543, 25.9222],
        "扬州": [119.421003, 32.393159],
        "温州": [120.672111, 28.000575],
        "安庆": [117.043551, 30.50883],
        "昆明": [102.833722, 24.881539],
        "芜湖": [118.376451, 31.326319],
        "徐州": [117.184811, 34.261792],
        "马鞍山": [118.506502, 31.669611],
        "金华": [119.649506, 29.089524],
        "蚌埠": [117.363228, 32.939667],
        "宣城": [118.757995, 30.945667],
        "六安": [116.507676, 31.752889],
        "淮安": [119.021265, 33.597506],
        "阜阳": [115.819729, 32.896969],
        "兰州": [103.834249, 36.06081],
        "池州": [117.489157, 30.656037],
        "长春": [125.323628, 43.817001],
        "铜陵": [117.816576, 30.929935],
        "滁州": [118.316264, 32.303627],
        "贵阳": [106.630153, 26.647661],
        "丽水": [119.921786, 28.451993],
        "宿迁": [118.275162, 33.963008],
        "台州": [121.428599, 28.661378],
        "亳州": [115.782939, 33.869338],
        "石家庄": [114.514793, 38.042225],
        "厦门": [118.110221, 24.490474],
        "黄山": [118.160151, 30.139316],
        "宜昌": [111.286451, 30.69187],
        "淮南": [116.999933, 32.625478],
        "太原": [112.549717, 37.87046],
        "荆州": [112.23813, 30.326857],
        "衢州": [118.87263, 28.941708],
        "银川": [106.230909, 38.487193],
        "黄石": [115.077048, 30.220074],
        "连云港": [119.178821, 34.600018],
        "宿州": [116.984084, 33.633891],
        "岳阳": [113.125515, 29.393111],
        "呼和浩特": [111.748426, 40.842723],
        "乌鲁木齐": [87.366219, 43.748314],
        "九江": [115.992811, 29.712034],
        "宜宾": [104.630825, 28.760189],
        "淮北": [116.794664, 33.971707],
        "南宁": [108.36637, 22.817746],
        "攀枝花": [101.716008, 26.580446],
        "黄冈": [114.879365, 30.447711],
        "鄂州": [114.890593, 30.396536],
        "海口": [110.198286, 20.044412],
        "西宁": [101.778112, 36.617042],
        "咸宁": [114.328963, 29.832798],
        "泸州": [105.443349, 28.889138],
        "拉萨": [91.171961, 29.653482],
        "上海": [121.4648, 31.2891],
    };
    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [121.4648, 31.2891];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: toCoord,
                }, {
                    coord: fromCoord,
                    value: dataItem[0].value
                }]);
            }
        }
        return res;
    };

    var color = ['#E055FF', '#61C6FF', '#48EFC0', "#FF6CCD", "#FFE86F"];
    
    var series = [{
            type: 'map',
            map: 'china',
            aspectScale: 0.75,
            //zoom:1.1,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    areaColor: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#073684' // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: '#061E3D' // 100% 处的颜色
                        }],
                    },
                    borderColor: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#073684' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#073684' // 100% 处的颜色
                        }],
                    },
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: "#2a333d"
                }
            },
        },

    ];
    [
        ['全部', datavalue2],
    ].forEach(function (item, i) {
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: color[i],
                symbolSize: 3
            },

            symbolRotate: 180, //标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
            symbolOffset: [0, 0],

            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },

            symbolRotate: 180,
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0],
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
                    position: 'left', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 10
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 5 + val[2] * 0.1; //圆环大小
            },
            itemStyle: {
                normal: {
                    color: color[i]
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 5,
                scale: 5,
                brushType: 'fill'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                offset: [10, 0],
                color: param => colors[param.dataIndex % colors.length],
                show: true
            },
            itemStyle: {
                color: "#1E78FF",
                shadowBlur: 10,
                shadowColor: '#36B7FF',
                opacity: 0.75
            },
            emphasis: {
                itemStyle: {
                    opacity: 1, //线条宽度
                }
            },
            data: [{
                name: '上海',
                value: [121.4648, 31.2891]
            }]

        });
    });

    option = {
        tooltip: {
            trigger: 'item',
            formatter: p => {
                return p.data.value[2]
            }
        },
        visualMap: { //图例值控制
            min: 0,
            max: 6,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     bottom: '5%',
        //     right: '18%',
        //     data: ['全部', '100-25', '25-15', '15-10', "10-0"],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     icon: "circle",
        //     selectedMode: 'single'
        // },
        color: ['#4ab2e5'],
        geo: {
            map: 'china',
            show: true,
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            layoutSize: "100%",
            itemStyle: {
                normal: {
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00F6FF'
                    }, {
                        offset: 1,
                        color: '#53D9FF'
                    }], false),
                    borderWidth: 3,
                    shadowColor: 'rgba(10,76,139,1)',
                    shadowOffsetY: 0,
                    shadowBlur: 60,
                    areaColor: "transparent"
                }
            }

        },
        series: series
    }
    myChart1.setOption(option);
})


//    // effect: {
// 	show: true,
// 	period: 4, //箭头指向速度，值越小速度越快
// 	trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
// 	symbol: 'arrow', //箭头图标
// 	symbolSize: 5, //图标大小
// },
// lineStyle: {
// 	normal: {
// 		width: 1, //尾迹线条宽度
// 		opacity: 1, //尾迹线条透明度
// 		curveness: .3 //尾迹线条曲直度
// 	}
// },