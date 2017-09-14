/**
 * Created by yerongtao on 2016/11/15.
 */
/*-----获取Ajax对象-------*/
function getXhr(){
    var xhr = null;
    if(window.XMLHttpRequest) {/*确保IE7,IE8，FireFox下可以运行*/
        xhr = new XMLHttpRequest();
    }else {/*确保IE6可以运行*/
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}

/*页面加载完成后执行此代码*/
$(document).ready(function(){
        /*------使用Ajax请求json数据-------*/
        //方法一 getJSON()方法，第一个参数，url,第二个参数，function()
        $.getJSON("JSON/ajaxTestData.json",
            function(data){
                $("#result1").html(data.name);
            });

        //方法二 get()方法
        $.get("JSON/ajaxTestData.json","",function(data) {
            $("#result2").html(data.price);
        });
        $.post();

        //方法三 ajax()方法
        $.ajax({
            type: "GET",/*"POST"*//*请求方式*/
            url: "JSON/ajaxTestData.json",/*地址，就是action请求路径*/
            dataType: "json",/*数据类型text xml json  script  jsonp*/
            data:"",
            success: function(data){/*返回的参数就是 action里面所有的有get和set方法的参数*/
                $("#result3").html(data.say);
                //$("#result4").html(data.books[0].language);
                var result="";
                console.log(data.books[0]);
                $(data.books).each(function(i){
                    alert($(this)[i].language);
                    result+=$(this)[i].language;
                });
                $("#result4").html(result);
            },
            error: function () {
                alert("加载失败");
            }
        });




});
