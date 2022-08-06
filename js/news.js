$(function () {
    $('table.schedule-body tr:gt(8)').hide();
    $('div.all').click(function () {
        $('table.schedule-body tr:gt(8)').stop().fadeToggle('slow');
    })

    $('.wrap').find('table').eq(1).hide();
    $('.tab li').mouseover(function () {
        var index = $(this).index();
        $(this).addClass('add-opcity').siblings().removeClass('add-opcity');
        $('div.wrap table').eq(index).show().siblings().hide();
    })
})