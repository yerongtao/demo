var myChart;
var optionMap = {
    1 : option = {
        grid : {
            x: 80,
            x2: 80,
            y: 50,
            y2: 80,
        },
        xAxis : [
            {
                type : 'value',
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    show: true,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:1,
                        type: 'dashed'
                    }
                },
                splitLine: {show:false},
                axisLabel:{show:false}
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    show: true,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:1,
                        type: 'dashed'
                    }
                },
                splitLine: {show:false},
                axisLabel:{show:false}
            }
        ],
        series : [
            {
                name:'scatter1',
                type:'scatter',
                symbolSize: 3,
                itemStyle:{normal:{color:'#60C0DD'}},
                data: (function() {
                    var d = [];
                    var len = 100;
                    while (len--) {
                      var temp = Math.random()*2 - 1;
                        d.push([
                            temp * Math.random(),
                            temp * Math.random()
                        ]);
                    }
                    return d;
                })()
            },
            {
                name:'数据性质',
                type:'scatter',
                symbol:'circle',
                symbolSize: 50,
                itemStyle:{normal:{label:{
                    show:true,
                    formatter:'{b}',
                    position:'inside',
                    textStyle: {fontSize:25}
                }}},
                data: [
                  {value:[0.5, 0.5], name:'讨论\n...',itemStyle:{normal:{color:'#B5C334'}}},
                  {value:[0.5, -0.5], name:'汇报\n...',itemStyle:{normal:{color:'#E87C25'}}},
                  {value:[-0.5, 0.5], name:'传播\n...',itemStyle:{normal:{color:'#C1232B'}}},
                  {value:[-0.5, -0.5], name:'营销\n...',itemStyle:{normal:{color:'#FCCE10'}}}
                ],
              markPoint:{
                symbol:'emptyCircle',
                symbolSize:0.1,
                itemStyle:{
                  normal:{
                    label:{
                      position:'inside',
                      formatter:'{b}',
                      textStyle:{color:'#4680b4',fontSize:35}
                    }
                  }
                },
                data:[
                  {name: '分析型数据\n',xAxis:0,yAxis:1},
                  {name: '\n结论型数据',xAxis:0,yAxis:-1},
                  {name: '私密\n数据',xAxis:1,yAxis:0},
                  {name: '公开\n数据',xAxis:-1,yAxis:0},
                  {name: '数据分享诉求',xAxis:0,yAxis:0}
                ]
              }
            }
        ]
    },
    2 : {
        tooltip : {
            trigger: 'axis'
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'业绩1',
                type:'line',
                data:[50, 100, 120, 180, 240, 240, 300]
            },
            {
                name:'业绩2',
                type:'bar',
                data:[30, 50, 60, 100, 200, 200, 230]
            },
            {
                name:'业绩3',
                type:'bar',
                data:[32, 54, 65, 120, 220, 220, 260]
            }
        ]
    },
    3 : {
        title : {
            text:'分享方式',
            x:'center',
            y:'center',
            textStyle: {
                fontSize: 35
            }
        },
        series : [
            {
                name:'分享方式',
                type:'pie',
                clockWise:false,
                radius : ['40%', '65%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            textStyle: {
                                fontSize: 30
                            }
                        },
                        labelLine : {
                            show : true
                        }
                    },
    
                },
                data:[
                    {value:200, name:'云服务（Web）'},
                    {value:100, name:'图片（Image）'},
                    {value:100, name:'代码（Code）'}
                ]
            }
        ]
    }
}

var theme = {
    // 默认色板
    color: [
        '#C1232B','#FCCE10','#B5C334','#E87C25','#27727B',
        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    ],

    // 图表标题
    title: {
        itemGap: 8,
        textStyle: {
            fontWeight: 'normal',
            color: '#27727B'          // 主标题文字颜色
        }
    },
    
    toolbox: {
        color : [
            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        ],
        effectiveColor : '#ff4500',
        itemGap: 8
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(50,50,50,0.5)',     // 提示背景颜色，默认为透明度为0.7的黑色
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
            lineStyle : {          // 直线指示器样式设置
                color: '#27727B',
                type: 'dashed'
            },
            crossStyle: {
                color: '#27727B'
            },
            shadowStyle : {                     // 阴影指示器样式设置
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // 网格
    grid: {
        borderWidth:0
    },

    // 类目轴
    categoryAxis: {
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#27727B'
            }
        },
        splitLine: {           // 分隔线
            show: false
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        splitArea : {
            show: false
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                type: 'dashed'
            }
        }
    },

    // 柱形图默认参数
    bar: {
        itemStyle: {
            normal: {
                borderRadius: 0
            },
            emphasis: {
                borderRadius: 0
            }
        }
    },

    // 折线图默认参数
    line: {
        itemStyle: {
            normal: {
                borderWidth:2,
                borderColor:'#fff',
                lineStyle: {
                    width: 3
                }
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'circle',  // 拐点图形类型
        symbolSize: 3.5           // 拐点图形大小
    },
    
    // 散点图默认参数
    scatter: {
        itemdStyle: {
            normal: {
                borderWidth:1,
                borderColor:'rgba(200,200,200,0.5)'
            },
            emphasis: {
                borderWidth:0
            }
        }
    },
    textStyle: {
        fontFamily: '微软雅黑, Arial, Verdana, sans-serif',
        fontWeight: 'bolder'
    }
}
function initChart(index) {
    disposeChart();
    if (index >=3 && index <= 5) {
        index -= 2;
        var dom = document.getElementById('main' + index);
        var height = document.body.offsetHeight * 0.9 - 80;
        var width = document.body.offsetWidth;
        var minSize = Math.min(width, height);
        dom.style.height = height + 'px';
        
        var option = optionMap[index];
        if (index == 1) {
            option.series[1].symbolSize = minSize / 8;
            option.series[1].itemStyle.normal.label.textStyle.fontSize = minSize / 16;
        }
        else if (index == 2 && width < height) {
            dom.style.height = height / 2 - 100 + 'px';
        }
        else if (index == 3 && width < height) {
            option.series[0].startAngle = 0;
            option.title.textStyle.fontSize = 45;
        }
        myChart = echarts.init(dom, theme);
        myChart.setOption(optionMap[index]);
    }
}

function disposeChart() {
    if (myChart) {
        myChart.dispose();
        myChart = null;
    }
}
$(function(){
    if($.browser.msie && $.browser.version < 10){
        $('body').addClass('ltie10');
    }
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        navigation: true,
        css3:true,
        navigationTooltips: ['首页', '做什么？', '数据分享', '可视化', '分享平台', '怎么做？', '图说'],
        afterLoad: function(anchorLink, index){
                initChart(index);
        }
    });
});

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fc8ad4d8f1070c2af661e19acd7c43ed9' type='text/javascript'%3E%3C/script%3E"));
