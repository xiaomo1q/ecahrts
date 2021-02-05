$(function () {
    var myChart = echarts.init(document.getElementById('body'));

    // 图表配置项
    var option = {
        geo3D: {
            map: 'china',
            roam: true,
            itemStyle: {
                color: '#1d5e98',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#000'
            },
            label: {
                show: true,
                textStyle: {
                      color: '#f00', //地图初始化区域字体颜色
                      fontSize: 8,
                      opacity: 1,
                      backgroundColor: 'rgba(0,23,11,0)'
                  },
              },
              emphasis: { //当鼠标放上去  地区区域是否显示名称
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 3,
                        backgroundColor: 'rgba(0,23,11,0)'
                    }
                }
            },
              //shading: 'lambert',
              light: { //光照阴影
                main: {
                      color: '#fff', //光照颜色
                      intensity: 1.2, //光照强度
                      //shadowQuality: 'high', //阴影亮度
                      shadow: false, //是否显示阴影
                      alpha:55,
                      beta:10
     
                  },
                  ambient: {
                    intensity: 0.3
                }
            }
        },
        series: []
    };
    myChart.setOption(option);
})
