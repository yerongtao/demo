/**
 * Created by yerongtao on 2017/2/23.
 * 使用本地存储方法 localstorage 实现页面交互
 */

designChart();

function design() {
    getDataFromUI();
    designChart();
}


/*----------本地存储的数据--------*/
localStorage.setItem('titleText','我是一个标题');
localStorage.setItem('titleSubtext','我只是一个副标题');
localStorage.setItem('titleLink','http://www.baidu.com');
localStorage.setItem('titleSublink','http://www.w3school.com.cn/index.html');
var seriesData1 = [12,32,43,45,56,67,65];
var str = JSON.stringify(seriesData1);
localStorage.seriesData1 = str;//存入
str = localStorage.seriesData1;//读取
seriesData1 = JSON.parse(str);//重新转换为对象


function getDataFromUI() {
    var titleText = document.getElementById('titleText');
    if(titleText.value) {
        localStorage.setItem('titleText',titleText.value);
    }
    var titleSubtext = document.getElementById('titleSubtext');
    if(titleSubtext.value) {
        localStorage.setItem('titleSubtext',titleSubtext.value);
    }
    var titleLink = document.getElementById('titleLink');
    if(titleLink.value) {
        localStorage.setItem('titleSubtext',titleLink.value);
    }
    var titleSublink = document.getElementById('titleSublink');
    if(titleSublink.value) {
        localStorage.setItem('titleSubtext',titleSublink.value);
    }
}

function designChart(){
    var myChart = echarts.init(document.getElementById('myChart'));/*绘制柱形图和折线图*/
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
    myChart.setOption(option = {
        title: { /*title 图形标题*/
            show: show,
            text: localStorage.getItem('titleText'), /*标题*/
            subtext: localStorage.getItem('titleSubtext'), /*副标题*/
            link: localStorage.getItem('titleLink'),
            sublink: localStorage.getItem('titleSublink'),
            x: 'center',
            textStyle: {
                color: '#000',
                fontSize: 24
            }
        },
        tooltip: {}, /*显示鼠标悬停，默认格式*/
        legend: {
            /*legend 图例*/
            data: ['当月值', "上年同期", "年度指标"],
            x: 'center',
            y: 'bottom'
        },
        xAxis: {
            /*xAxis X轴*/
            data: ["炼油一部", "炼油二部", "炼油三部", "炼油四部", "芳烃部", "油品储运部", "热电部"],
            axisTick: {
                alignWithLabel: true/*设置坐标轴刻度与标签对齐，默认不设置的状态下是不对齐的*/
            },
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            }
        },
        yAxis: {},
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
                data: seriesData1

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
}






