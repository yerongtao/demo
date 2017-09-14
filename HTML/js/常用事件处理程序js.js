/*window.onload 页面加载完成后执行*/
window.onload = function() {
    /*获取页面ID值*/
    var b_click = document.getElementById("click");
    var b_dblclick = document.getElementById("dblclick");

    /*onclick 鼠标单击时触发此事件*/
    b_click.onclick = function() {
        document.getElementById("bt_click_p").innerText = "单击执行成功";
    };

    /*ondblclick 鼠标双击时触发此事件*/
    b_dblclick.ondblclick = function() {
        document.getElementById("bt_dblclick_p").innerHTML = "<h3>双击执行成功</h3>";
    };
};

/*函数 被触发时执行，不需要在window.onload内层执行*/
var arrayColor = new Array("#f00","#ff0","#00f","#0f0","#efefef","#F764F5");
var n = 0;
function ChangeBgFunction() {
    if(n == arrayColor.length) n = 0;/*数组的索引从0开始，如果n增加到最后一个，往后走就是轮回第一个*/
    document.getElementById("backgroundText").innerHTML = arrayColor[n];/*修改文本*/
    document.getElementById("background").style.backgroundColor = arrayColor[n];/*修改背景色*/
    n++;
}

/*鼠标按下触发的函数*/
function mouseDown() {
    var ev = window.event;
    var obj = ev.srcElement;
    obj.style.color = "#0022af";
}
/*鼠标按下后松开时触发的函数*/
function mouseUp() {
    var ev = window.event;
    var obj = ev.srcElement;
    obj.style.color = "#aa9900";
    window.open("多彩照片墙_0813.html","多彩照片墙","")
}

function addImages() {
    /*方法一，使用innerHTML添加图片*/
    var add = document.getElementById("addImages");
    //add.innerHTML = ("<li><img src='image/flower2.jpg' alt='图片1'/></li>");
    add.innerHTML = ("<img src='image/flower3.jpg' alt='图片'/>");

    /*方法二，使用createElement添加图片*/
    var img = document.createElement("img");
    var ad = document.getElementById("add");
    img.setAttribute("src", "image/flower2.jpg");
    ad.appendChild(img);
}

/*获取鼠标焦点，使焦点变成半透明*/
function visibile(cursor,i) {
    if(i == 0.5) {
        cursor.style.opacity = "0.5"
    }
    else cursor.style.opacity = "1"

}
/*鼠标事件*/
function refurbish() {
    if(window.event.keyCode == 97) {
        location.reload();
    }
    if(window.event.keyCode == 98) {
        alert("你点击了按钮B");
    }
}
document.onkeypress = refurbish;/*调用鼠标事件*/

