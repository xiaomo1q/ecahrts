var mapChart;
$(function () {
    var myChart1 = echarts.init(document.getElementById('body-con'));
    mapChart = {
        amap: function () {
            echarts.registerMap('china', chinaMap);
            echarts.registerMap('chinaMapOutline', chinaMapOutline);

            var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

            var planePathc = 'circle'

            var imageDom = document.createElement('img'); // 使用 DOM HTMLImageElement
            // imageDom.src = 'http://39.106.255.75/siteimg/e195b1cbd888b6b983397c013047e3c.png';
            imageDom.src = './img/s.png';
            imageDom.width = 800;
            imageDom.height = 600;


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
                    zoom: 1.5,
                    top: "28%",
                    left: '18%',
                    roam: false,
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
                                image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                                repeat: 'no-repeat', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                            },
                            borderColor: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#576B7B' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2C414F' // 100% 处的颜色
                                }],
                            },
                            borderWidth: 1,
                        },
                        emphasis: {
                            areaColor: "transparent"
                        }
                    },
                },

            ];
            [
                ['全部', chinaDatas],
                ['26-100', chinaDatas.slice(0, 15)],
                ['16-25', chinaDatas.slice(16, 37)],
                ['10-15', chinaDatas.slice(38, 58)],
                ['0-10', chinaDatas.slice(59, 81)],
            ].forEach(function (item, i) {
                if (item[0] == '全部') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00111.png'
                }
                if (item[0] == '100-25') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00112.png'
                }
                if (item[0] == '25-15') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00113.png'
                }
                if (item[0] == '15-10') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00115.png'
                }
                if (item[0] == '10-0') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00114.png'
                }
                series.push(
                    {
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
    
                        lineStyle: {
                            normal: {
                                color: color[i],
                                width: 0.5, //线条宽度
                                opacity: 0.1, //尾迹线条透明度
                                curveness: -0.3 //尾迹线条曲直度
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
                            symbolSize: 10
                        },
                        lineStyle: {
                            normal: {
                                color: color[i],
                                width: 0,
                                opacity: 0.4,
                                curveness: 0.2
                            }
                        },
                        data: convertData(item[1])
                    },
                    {
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
                    symbol: planePathc,
                    symbolSize: function (val) {
                        return 5 + val[2] * 0.4; //圆环大小
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
                    backgroundColor:"transparent",
                    border:0,
                    formatter:  params =>  {
                        if (params.data && params.data.name) {
                            var str = `<div class="toop"><div class="bg"><p>${ params.data.value[2]}</p><p>${params.data.name}</p></div></div>`;
                            return str;
                        }
                    }
                },
                legend: {
                    orient: 'vertical',
                    top: '40%',
                    right: '0%',
                    padding:[80,0],
                    // '全部', '25-100', '25-15', '15-10', "10-0"
                    data: [{
                        name:"全部",
                        itemHeight: 20,
                        icon: 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00111.png',
                    },{
                        name:"26-100",
                        itemHeight: 20,
                        icon: 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00112.png',
                    },{
                        name:"16-25",
                        itemHeight: 20,
                        icon: 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00113.png',
                    },{
                        name:"10-15",
                        itemWidth: 16,
                        itemHeight: 17,
                        icon: 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00115.png',
                    },{
                        name:"0-10",
                        itemHeight: 20,
                        icon: 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00114.png',
                    },],
                    textStyle: {
                        color: '#fff'
                    },
                    
                },
                color: ['#4ab2e5'],
                geo: {
                    map: 'china',
                    show: true,
                    roam: false,
                    label: {
                        emphasis: {
                            show: true
                        }
                    },
                    zoom: 1.5,
                    top: "28%",
                    left: '18%',
                    layoutSize: "100%",
                    itemStyle: {
                        normal: {
                            areaColor: "transparent",
                            // shadowColor: '#4ab2e5', //外发光
                            borderColor: {
                                x: 0,
                                y: 4,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#0177ff' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#53D9FF' // 100% 处的颜色
                                }],
                            },
                            borderWidth: 4,
                            shadowBlur: 20,
                            shadowColor: 'rgb(58,115,192)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 10,
                            // borderColor: '#0177ff'
                        },
                        emphasis: {
                            areaColor: 'transparent', //悬浮区背景
                        }
                    }
                },
                series: series
            }
            myChart1.setOption(option);
        }
    }
})