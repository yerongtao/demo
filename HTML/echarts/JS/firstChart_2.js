/*
 * Modified by yerongtao on 2017/02/07.
 * 主要修改方向为：将原本分开的内容合并到一起，即原来是先设置所有参数，再绘制图形，现在是将参数直接写到setOption里面
 * 使代码逻辑更清晰，可读性更高
 */

    /*通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图*/

    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init(document.getElementById('myBarChart'),'macarons');/*绘制柱形图和折线图*/
    var pieChart = echarts.init(document.getElementById('myPieChart'),'infographic');/*绘制饼图、南丁格尔图*/
    var LGChart = echarts.init(document.getElementById('LinearGradientChart'),'roma');/*绘制饼图、南丁格尔图*/
    var AcChart = echarts.init(document.getElementById('AccumulationChart'));/*绘制堆积柱形图*/
    var visualMapChart = echarts.init(document.getElementById('visualMapChart'));/*绘制堆积柱形图*/

    var data2=[];//定义全局变量

    $.ajax({
        type: "GET",/*请求方式*/
        url: "JSON/ajaxTestData.json",/*地址，就是action请求路径*/
        dataType: "json",/*数据类型text xml json  script  jsonp*/
        async: false,/*同步加载*/
        success: function(data){/*返回的参数就是 action里面所有的有get和set方法的参数*/
            data2 = data.arr;
            return data2;
        }
    });

    /*----------------------------柱形图和折线图---------------------------------*/
    var barItemStyle = {
        /*设置柱子的样式风格*/
        normal: {}, /*默认状态下，使用默认样式*/
        emphasis: {
            /*鼠标悬停状态下，加深柱子颜色的同时设置一个阴影部分*/
            color: '#e34509',
            barBorderWidth: 1,
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };
    barChart.setOption(option = {
        title: {/*title 图形标题*/
            text: '柱形图和折线图', /*标题*/
            subtext: '数据为虚拟数据', /*副标题*/
            x: 'center',
            textStyle: {
                color: '#000',
                fontSize: 24
            }
        },
        tooltip: {}, /*显示鼠标悬停，默认格式*/
        legend: {/*legend 图例*/
            data: ['当月值', "上年同期", "年度指标"],
            x: 'center',
            y: 'bottom'
        },
        xAxis: {/*xAxis X轴*/
            data: ["炼油一部", "炼油二部", "炼油三部", "炼油四部", "芳烃部", "油品储运部", "热电部"],
            axisTick: {
                alignWithLabel: true/*设置坐标轴刻度与标签对齐，默认不设置的状态下是不对齐的*/
            },
            axisLabel: {
//                    rotate: 60
                textStyle: {
                    color: '#000'
//                    fontSize:13
                }
            }
        },
        yAxis: {/*yAxis Y轴*/
            /*axisLabel: {
             textStyle:{
             color:'#000'
             }*/
        },
        series: [/*series 系列信息*/
            {
                name: '当月值', /*name 需要与图例保持一致*/
                type: 'bar', /*type 指明图形类型，bar 柱形图*/
                itemStyle: barItemStyle,
                data: [32, 43, 54, 65, 54, 56, 32]

            },
            {
                name: '上年同期', /*name 需要与图例保持一致*/
                type: 'bar', /*type 指明图形类型，bar 柱形图*/
                itemStyle: barItemStyle,
                data: data2

            },
            {
                name: '年度指标',
                type: 'line', /*line 折线图*/
                itemStyle: {
                    normal: {
                        color: '#ffff00'/*默认状态下*/
                    },
                    emphasis: {
                        /*鼠标悬停状态下，加深柱子颜色的同时设置一个阴影部分*/
                        color: '#f0f033',
                        barBorderWidth: 1,
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    }
                },
                data: [30, 28, 20, 30, 29, 27, 19]
            }
        ]
    });


    /*---------------------------------深色背景南丁格尔图---------------------------------*/
    pieChart.setOption(option =  {
        backgroundColor: '#efefef',/*backgroundColor 设置背景色*/
        title:{/*title 图形标题*/
            text: '饼图',/*标题*/
            //subtext:'氮气消耗情况(虚拟数据)',/*副标题*/
            x:'center',
            textStyle:{
                color:'#f00',
                fontSize:25
            }
        },
        tooltip: {/*显示鼠标悬停，自定义格式*/
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend:{/*显示图例*/
            orient: 'vertical',/*纵向*/
            //left: 'left',/*居左*/
            x:'right',
            y:'center',
            data:['PX','外购液氮','一部','煤化工','外供','损耗','油品储运'],
            textStyle:{
                color:'#000'
            }
        },
        series : [
            {
                name: '氮气消耗情况',
                type: 'pie',/*pie 饼图*/
                radius: '65%',/*半径大小*/
                data:[
                    {value:300, name:'PX'},
                    {value:280, name:'外购液氮'},
                    {value:250, name:'一部'},
                    {value:210, name:'煤化工'},
                    {value:150, name:'外供'},
                    {value:100, name:'损耗'},
                    {value:50, name:'油品储运'}

                ],
                color: ['rgb(254,67,101)','rgb(249,100,150)','rgb(252,157,154)','rgb(249,205,173)','blueviolet','blue','green'],
                roseType: 'angle',/*南丁格尔类型，南丁格尔图会通过半径表示数据的大小*/
                label: {/*lable 设置标签*/
                    normal: {/*默认状态下*/
                        /*textStyle: {/!*文本颜色*!/
                         color: 'rgba(255, 105, 100, 0.8)'/!*红色，透明度0.8*!/
                         },*/
                        formatter: '{b} ({d}%)'
                    }
                },
                /*labelLine: {/!*lableLine 设置标签引线*!/
                 normal: {/!*默认状态下*!/
                 lineStyle: {/!*线条颜色*!/
                 color: 'rgba(255, 105, 100, 0.8)'/!*红色，透明度0.8*!/
                 }
                 }
                 },*/
                itemStyle:{/*饼图风格*/
                    normal: {},/*默认状态下*/
                    emphasis:{/*鼠标悬停状态下*/
//                                color: '#ef3531',/*设置扇形的颜色*/
                        shadowBlur: 200,/*阴影模边距*/
                        shadowColor: 'rgba(200, 100, 0, 0.5)'/*阴影颜色*/
                    }
                }
            }
        ]
    });

    /*-----------------------------渐变色、阴影、点击缩放----------------------------------*/

    /*预先定义横坐标和数据*/
    var dataAxis = ['2017-1-1', '2017-1-2', '2017-1-3', '2017-1-4', '2017-1-5', '2017-1-6', '2017-1-7', '2017-1-8', '2017-1-9', '2017-1-10',
        '2017-1-11', '2017-1-12', '2017-1-13', '2017-1-14', '2017-1-15', '2017-1-16', '2017-1-17', '2017-1-18', '2017-1-19', '2017-1-20',
        '2017-1-21', '2017-1-22', '2017-1-23', '2017-1-24', '2017-1-25', '2017-1-26', '2017-1-27', '2017-1-28', '2017-1-29', '2017-1-30', '2017-1-31'];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334,
        220, 220, 182, 191, 234, 280, 345, 310, 123, 449, 321, 90, 149, 210, 122];
    var yMax = 500;
    var dataShadow = [];/*定义阴影部分*/
    for (var i = 0; i < data.length; i++) {
        /*push() JS的push()方法，向数组的末尾添加一个或多个元素，并返回新的长度*/
        dataShadow.push(yMax);
    }
    LGChart.setOption(option = {
        title:{
            text:'渐变色、阴影、点击缩放',
            subtext:'点击柱子或者两指在触屏上滑动能够自动缩放',
            x:'center'
        },
//                tooltip:{},/*鼠标悬停值*/
        legend:{
            data:['','数值'],
            x:'center',
            y:'bottom',
            show:false
        },
        xAxis:{
            data:dataAxis,
            axisLabel:{/*坐标标签*/
//                        inside:true,/*在里面*/
                rotate: 60,
                interval:0,
                textStyle:{
                    color:'#000'/*文字风格，白色文字*/
                }
            },
            axisTick:{/*坐标刻度*/
                show:false/*不显示*/
            },
            axisLine:{/*坐标线*/
//                        show:false/*不显示*/
            },
            z:10
        },
        yAxis:{
            axisLabel:{/*坐标标签*/
                textStyle:{
                    color:'#999'
                }
            },
            axisTick:{/*坐标刻度*/
                show:false
            },
            axisLine:{/*坐标线*/
                show:false
            }
        },
        dataZoom:[/*数据变焦*/
            {
                type:'inside'
            }
        ],
        series:[
            {/*阴影背景*/
                type:'bar',
                data:dataShadow,
                itemStyle:{
                    normal:{/*默认状态下*/
                        color:'rgba(0,0,0,0.05)'/*设置颜色和透明度*/
                    }
                },
                barGap:'-100%',
                barCategoryGap:'40%'
            },
            {/*数据*/
                name:'数值',
                type:'bar',
                data:data,
                markLine : {/*线标记，寻找做最高点最低点并标记出来*/
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                },
                markPoint : {/*点标记*/
                    data : [
                        {name : '最高值', value :'最高', xAxis: '2017-1-26', yAxis: 'max', symbolSize:40}
                    ]
                },
                itemStyle:{
                    normal:{/*默认情况下*/
                        /*echarts.graphic.LinearGradient() 线性渐变，线性梯度*/
                        color:new echarts.graphic.LinearGradient(0,0,0,1,
                            [
                                {offset:0,color:'#83bff6'},
                                {offset:0.5,color:'#188df0'},
                                {offset:1,color:'#188ff0'}
                            ])
                    },
                    emphasis:{/*鼠标移动到情况下*/
                        color:new echarts.graphic.LinearGradient(0,0,0,1,
                            [
                                {offset:0,color:'#2378f7'},
                                {offset:0.7,color:'#2378f5'},
                                {offset:1,color:'#83bff6'}
                            ])
                    }
                }
            }]
    });
    //点击柱子，数据变焦操作
    var zoomSize = 6;/*变焦大小*/
    LGChart.on('click',function(params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize/2, 0)]);
        LGChart.dispatchAction({
            type:'dataZoom',
            startValue:dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:dataAxis[Math.max(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });

    /*--------------------绘制堆积柱形图----------------------------------*/
    AcChart.setOption( option = {
        title:{text:'堆叠柱状图',subtext:'上年与当年的数据对比',x:'center'},
        legend:{
//                    orient: 'vertical',/*纵向*/
            x: 'center',
            y: 'bottom',
            data:['非计划停工','平均热效率','脱盐合格率','理论剂耗','实际剂耗']
        },
        tooltip:{
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line' | 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b}"
        },
        xAxis:{data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']},
        yAxis:{},
        barGap:'5%',/*设置两个bar之间的间距*/
        series:[
            {
                name:'非计划停工',
                type:'bar',
                stack:'上年',
                data:[52,63,98,54,32,56,47,98,54,32,43,44]
            },
            {
                name:'平均热效率',
                type:'bar',
                stack:'上年',
                data:[24,35,24,46,35,44,35,55,56,47,98,64]
            },
            {
                name:'脱盐合格率',
                type:'bar',
                stack:'上年',
                data:[43,45,35,64,13,42,53,46,35,44,35,32]
            },
            {
                name:'理论剂耗',
                type:'bar',
                stack:'上年',
                data:[54,75,54,23,63,85,49,43,42,53,46,35]
            },
            {
                name:'实际剂耗',
                type:'bar',
                stack:'上年',
                data:[54,65,54,23,63,85,49,85,54,23,63,85],
                markPoint : {/*点标记*/
                    color : 'red',
                    data : [
                        {name : '最高值', value :'最高', xAxis: '8月', yAxis: 'max', symbolSize:40}
                    ]
                }
                /*markLine : {
                 lineStyle: {
                 normal: {
                 type: 'dashed'
                 }
                 },
                 data : [
                 [{type : 'min'}, {type : 'max'}]
                 ]
                 }*/
            },
            {
                name:'非计划停工',
                type:'bar',
                stack:'当年',
                data:[24,35,64,46,35,24,62,43,63,85,49,75]
            },
            {
                name:'平均热效率',
                type:'bar',
                stack:'当年',
                data:[24,35,64,46,35,24,62,54,65,54,23,63]
            },
            {
                name:'脱盐合格率',
                type:'bar',
                stack:'当年',
                data:[43,45,35,14,53,42,53,35,24,62,54,65]
            },
            {
                name:'理论剂耗',
                type:'bar',
                stack:'当年',
                data:[54,65,54,23,63,85,49,54,23,63,85,49]
            },
            {
                name:'实际剂耗',
                type:'bar',
                stack:'当年',
                data:[54,65,54,23,63,85,49,85,54,23,63,55],
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                        // position:'top'
                    }
                }
            }
        ]
    });

    /*------------------------可视化组件折线图---------------------------*/
    $.get('JSON/data-map.json', function (data) {
    visualMapChart.setOption(option = {
        title: {
            text: '装置评价体系模型',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            axisTick: {
                alignWithLabel: true/*设置坐标轴刻度与标签对齐，默认不设置的状态下是不对齐的*/
            },
            data: data.map(function (item) {/*遍历函数map*/
                return item[0];
            })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            show: true,
            left: 'left',
            feature: {
                /*dataZoom: {/!*区域缩放还原*!/
                    yAxisIndex: 'none'
                },
                //d*/ataView: {readOnly: false},//数据视图
                magicType: {type: ['line', 'bar']},//切换成折线图和柱形图
                //restore: {},//还原
                //saveAsImage: {}//保存为图片

            }
        },
        dataZoom: [{
            startValue: 30,
            endValue: 50
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: '评价因素',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    });
    });


    /*-------------------------点击事件-------------------------*/
    //点击柱形图，获取name和value
    barChart.on('click', function (barOption) {
        document.getElementById("clickBarChart").innerHTML = barOption.name +"_"+ barOption.value;
    });
    //点击饼图，获取name和value
    pieChart.on('click', function (pieOption) {
        document.getElementById("clickPieChart").innerHTML = pieOption.name +"_"+ pieOption.value;
    });
