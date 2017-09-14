/**
 * Created by yerongtao on 2016/11/11.
 */
/*页面加载之后执行*/
window.onload = function() {
    var c = document.getElementById("myFirstCanvas");
    var context = c.getContext("2d");
    var c2 = document.getElementById("myFirstCanvas2");
    var context1 = c2.getContext("2d");
    var d = document.getElementById("mySecondCanvas");
    var context2 = d.getContext("2d");
    var  e = document.getElementById("myCanvas3");
    var context3 = e.getContext("2d");
    var can = document.getElementById("myCanvas4");
    var context4 = can.getContext("2d");



    /*------------绘制矩形--------------*/
    context.strokeStyle = "#00f";
    context.strokeRect(10,10,150,100);
    context.fillStyle = "#ff00ff";
    context.fillRect(50,25,100,80);
    /* ------------fillStyle需要放在fillRect前面--------------- */

    context.moveTo(0,0);/*moveTo */
    context.lineTo(300,200);/*lineTo */
    context.stroke();

    /*--------------绘制三角形-----------------*/
    context1.fillStyle = "#00ffff";
    context1.beginPath();
    context1.moveTo(25,25);
    context1.lineTo(150,25);
    context1.lineTo(25,150);
    context1.fill();
    //context1.stroke();

    /*------------绘制圆形-------------*/
    context2.fillStyle = "#a00ff0";
    context2.beginPath();
    context2.arc(100,75,50,0,Math.PI*2,true);
    context2.closePath();
    context2.fill();

    /*-------------绘制曲线--------------*/
    for(var i = 0; i < 15; i++) {
        context3.strokeStyle = "#ff0000";
        context3.beginPath();
        context3.arc(0,150,i*10,Math.PI*3/2,true);
        //context3.closePath();
        context3.stroke();
    }

    /*-------绘制扇形-----------*/
    context4.strokeStyle = "red";
    context4.fillStyle = "#afafaf";
    context4.beginPath();
    context4.moveTo(50,50);/*设置起始点，圆点*/
    context4.arc(50,50,150,0,Math.PI/3,false);/*圆点（50,50），半径150，起始弧度0，终止弧度PI/3,顺时针*/
    context4.closePath();
    context4.stroke();
    context4.fill();/*填充颜色*/


    /*-------------绘制移动的伞------------*/
    var  ctx5 = document.getElementById("myCanvas5").getContext("2d");
    draw(ctx5);


    /*-------绘制饼图------------*/
    var canvas = document.getElementById("pieChart");
    if(pieChart==null)return;
    ctx = canvas.getContext("2d");
    sumData();/*计算数据总和*/
    drawChart();/*绘制饼图*/


};

/*绘制移动的伞*/
function draw(ctx5) {
    ctx5.translate(80,80);/*移动到(80,80)位置*/
    for(var i=0; i<8; i++) {
        ctx5.save();
        ctx5.translate(65 * i, 0);/*每次循环，向右边移动65像素，y轴不变*/
        drawTop(ctx5,"rgb("+(30*i)+","+(255-30*i)+",255)");/*调用绘制伞盖函数，传递对象和颜色值参数*/
        drawGrip(ctx5);/*调用绘制伞柄函数，传递对象参数*/
        ctx5.restore();
    }
}
function drawTop(ctx,fillStyle) {/*伞盖*/
    ctx.fillStyle = fillStyle;/*伞盖的颜色等于传递过来的参数值*/
    ctx.beginPath();
    ctx.arc(0,0,30,0,Math.PI,true);/*绘制一个半圆*/
    ctx.closePath();
    ctx.fill();
}
function drawGrip(ctx) {/*伞柄*/
    ctx.fillStyle = "#00f";
    ctx.fillRect(-1.5,0,1.5,40);/*先画一条直线做为伞柄*/
    ctx.beginPath();
    ctx.strokeStyle = "#00f";
    ctx.arc(-5,40,4,Math.PI,Math.PI*2,true);/*画一个小半圆做为手柄*/
    ctx.stroke();
    ctx.closePath();
}


/*绘制饼图*/
var jsondata=
    [   {name:"技术部",num:95},
        {name:"研发部",num:3},
        {name:"市场部",num:50},
        {name:"攻关部",num:20},
        {name:"信息产业部",num:35},
        {name:"宣传部",num:50}
    ];
var colors=["#cbefef","#0ef0f0","#feaf63","#2baf4e","#2b45ad","#054900"];
var sum = 0;
var lastsum=0;
/*window.onload = function(){
    var canvas = document.getElementById("cav");
    if(cav==null)return;
    ctx = canvas.getContext("2d");
    sumData();
    drawChart();
};*/
//求数据总和
function sumData(){
    for(var i=0;i< jsondata.length;i++){
        sum+=jsondata[i].num;
    }
}
//下一个起始
function lastSum(i){
    lastsum=0;//重置为0
    for (var j = 0; j < i; j++) {
        lastsum+=jsondata[j].num;
    }
}
//画饼图
//设置半径
var radius=150;
function drawChart(){/*绘制饼图*/
    for (var i = 0; i < jsondata.length;i++) {
        lastSum(i);//上一个结束弧度就是下一个起始弧度
        var startAngle= (Math.PI*2)*(lastsum/sum);//起始弧度
        lastSum(i+1);
        var endAngle=(Math.PI*2)*(lastsum/sum);//结束弧度
        ctx.save();/*将当前状态保存到堆中*/
        ctx.fillStyle=this.colors[i];
        ctx.beginPath();
        ctx.moveTo(250,250);/*设置起始点，圆点*/
        ctx.arc(250,250,radius,startAngle,endAngle,false);/*画圆，圆点（250,250），半径150，起始弧度，结束弧度，顺时针*/
        ctx.closePath();
        ctx.fill();/*填充颜色*/
        ctx.restore();/*将上一个保存的状态从堆中取出*/
        drawText(startAngle,endAngle,jsondata[i].name,jsondata[i].num/sum);/*标记饼图信息，传递参数：起始弧度，终止弧度，数据名，数据所占比例*/
    }
}
//绘制文本和线段
function drawText(s,e,jn,jsm) {
    //文字的x，y坐标计算
    var x = Math.cos((s + e) / 2) * (radius + 60) + 250;
    var y = Math.sin((s + e) / 2) * (radius + 60) + 250;
    ctx.fillStyle = "blue";
    ctx.fillText(jn, x, y);

    ctx.fillStyle = "red";
    //百分比精确到小数后两位
    ctx.fillText((parseInt(jsm * 10000) / 100) + "%", x, y + 20);
    //绘制由每个饼指向文字的线段
    ctx.beginPath();
    //各端点坐标由每块的起始弧度和结束弧度求平均后计算得出
    ctx.moveTo(Math.cos((s + e) / 2) * radius + 250, Math.sin((s + e) / 2) * radius + 250);
    ctx.lineTo(Math.cos((s + e) / 2) * (radius + 40) + 250, Math.sin((s + e) / 2) * (radius + 40) + 250);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.stroke();
}



