var mapChart3;
$(function () {

    mapChart3 = {
        amap: function () {
            echarts.registerMap('china', chinaMap);
            echarts.registerMap('chinaMapOutline', chinaMapOutline);
            var chinaGeoCoordMap = data238
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
            var planePathc = 'circle'

            var imageDom = document.createElement('img'); // 使用 DOM HTMLImageElement
            imageDom.src = './img/s.png';
            imageDom.width = 800;
            imageDom.height = 600;

            var color = ['#FF6CCD', '#48EFC0', "#61C6FF", "#FFE86F"];

            var series = [{
                type: 'map',
                map: 'china',
                aspectScale: 0.75,
                zoom: 1.7,
                top: "25%",
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
                            size: 'contain',
                            width: 800,
                            height: 600,
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
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 5,
                    scale: 8,
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
                    color: "#367DEE",
                    shadowBlur: 10,
                    shadowColor: '#367DEE',
                    opacity: 1
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

            }];
            [
                ['全部', datavalue3],
            ].forEach(function (item, i) {
                if (item[0] == '全部') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00111.png'
                }
                if (item[0] == '100-25') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00114.png'
                }
                if (item[0] == '25-15') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00113.png'
                }
                if (item[0] == '15-10') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00115.png'
                }
                if (item[0] == '10-0') {
                    planePathc = 'image:// http://39.106.255.75/siteimg/ellipse-fimae-00112.png'
                }
                series.push({
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: -0.2
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
                            curveness: -0.2
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
                    symbol: planePathc,
                    symbolSize: function (val) {
                        return 5 + val[2] * 50; //圆环大小
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
                }
                );
            });

            option = {
                tooltip: {
                    trigger: 'item',
                    // formatter: p => {
                    //     return p.data.value[2]
                    // }
                    backgroundColor: "transparent",
          borderWidth: 1,
          padding: 10,
                    formatter: function(params) {
                        // var str =params['percent']+'%'+'<br/>'+params.data.value+'笔'
                        var str = `<div style = "background:url( ${require("../../assets/images/mapSelPart.png")}) no-repeat center center ;width:60px;height:60px; ">${
                          params["percent"]
                        }%<br/> ${params.data.value}笔</div>`;
                        // parms.marker
                        console.log(str);
                        return str;
                      }
                },
                visualMap: { //图例值控制
                    min: 0,
                    max: 1,
                    calculable: true,
                    show: true,
                    bottom: '5%',
                    right: '0%',
                    color: color,
                    textStyle: {
                        color: '#fff'
                    }
                },
                color: ['#367DEE'],
                geo: {
                    map: 'china',
                    show: true,
                    roam: false,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    zoom: 1.7,
                    top: "25%",
                    left: '18%',
                    layoutSize: "100%",
                    itemStyle: {
                        normal: {
                            areaColor: "transparent",
                            // shadowColor: '#4ab2e5', //外发光
                            borderColor: '#53D9FF',
                            borderWidth: 2,
                            shadowBlur: 20,
                            shadowColor: 'rgb(58,115,192)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 10,
                            borderColor: '#0177ff'
                        },
                        emphasis: {
                            areaColor: '#2a333d', //悬浮区背景
                        }
                    }
                },
                series: series
            }

        }
    }
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