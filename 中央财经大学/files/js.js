function getScrollTop(){
    if(navigator.userAgent.indexOf("Chrome")>0){
        return document.body.scrollTop;//谷歌高度
    }else{
        return document.documentElement.scrollTop; //IE与火狐高度
    }
}

//PC端，当滚轮滚到一定程度时给导航栏底下加个条线
window.onscroll = function(){
    var winHeight1 = $(window).height()-100;
    if($(document).scrollTop() >= winHeight1){
        $(".header_box").addClass("header_box_border");
    }else{
        $(".header_box").removeClass("header_box_border");
    }
}

//PC端，下载弹出框
function download(){
    $('.download_btn').click(function(){
        $('.pop_bg').css({'display':'block'});
        $('.pop_box').css({'display':'block'});
    });
    $('.pop_box').find('.close').click(function(){
        $('.pop_bg').css({'display':'none'});
        $('.pop_box').css({'display':'none'});
    })
}

//pc端，帮助弹出框
// 打开
function helpStep(){
    $('.help_box').css({'display':'block'});
    $('.help_bg').css({'display':'block'});

}
//关闭
function closeHelpStep(){
    $('.help_bg').css({'display':'none'});
    $('.help_box').css({'display':'none'});

}
