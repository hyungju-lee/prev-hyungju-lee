$(document).ready(function () {
    $('#source-head .tab-btn').eq(0).addClass('on');
    $('#source-cont .tab-cont').eq(0).addClass('on');
    $('#source-head .tab-btn').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(this).addClass('on').siblings().removeClass('on');
        $(href).addClass('on').siblings().removeClass('on');
    })
})