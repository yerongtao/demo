/*
 * Modified by yerongtao on 2017/02/07.
 * 主要修改方向为：将原本分开的内容合并到一起，即原来是先设置所有参数，再绘制图形，现在是将参数直接写到setOption里面
 * 使代码逻辑更清晰，可读性更高
 */

    /*通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图*/

    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init(document.getElementById('myBarChart'),'macarons');/*绘制柱形图和折线图*/

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

