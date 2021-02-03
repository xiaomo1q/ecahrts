$(function () {
    var myChart1 = echarts.init(document.getElementById('body-con'));

    echarts.registerMap('chinaMap', chinaMap);
    echarts.registerMap('chinaMapOutline', chinaMapOutline);
    option = {
        geo: {
            silent: true,
            map: 'chinaMapOutline',
            show: false,
            zoom: 1,
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
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(45,68,121,0.15)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(45,68,121,0.18)' // 100% 处的颜色
                            }
                        ],
                        global: true // 缺省为 false
                    },
                    // areaColor: 'transparent',
                    borderColor: '#83BAFF',
                    borderWidth: 1,
                    shadowColor: 'rgba(56,164,255,.26)',
                    opacity: 0.5,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowBlur: 5,
                    show: false, // 是否显示对应地名
                    textStyle: {
                        //字体颜色
                        color: '#797979'
                    }
                },
                emphasis: {
                    color: 'transparent', //悬浮背景
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        },
        series: [
            {
                map: 'chinaMapOutline',
                silent: true,
                type: 'map',
                zoom: 1,
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
                top: '0%',
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
            {
                map: 'chinaMap',
                type: 'map',
                zoom: 1.14,
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
                top: '0%',
                tooltip: {
                    show: false
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: 'rgba(0,255,255,.1)',
                        borderWidth: 1,
                    },
                    emphasis: {
                        areaColor: 'rgba(0,255,255,.1)',
                        textStyle: {
                            color: 'red'
                        }
                    }
                }
            },

        ]
    }
    myChart1.setOption(option);
})