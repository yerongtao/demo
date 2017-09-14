/**
 * Created by yerongtao on 2017/2/10.
 */

/*-------------------左侧参数调整------------------------*/
$("#parAdj").click(function() {
    //$("#parameterAdjustment").css('display','block');
    $("#parameterAdjustment").animate({left:"-670"});
    $("#showCharts").animate({left: '670'})
});
$(".yes").click(function() {
    $("#parameterAdjustment").animate({left:"0"});
    //$("#parameterAdjustment").css('display','none');
    $("#showCharts").animate({left: '0'})
});
$(".no").click(function() {
    $("#parameterAdjustment").animate({left:"0"});
    //$("#parameterAdjustment").css('display','none');
    $("#showCharts").animate({left: '0'})
});
$("#show").click(function() {
    $("#parameterAdjustment").animate({left:"0"});
    //$("#parameterAdjustment").css('display','none');
    $("#showCharts").animate({left: '0'})
});