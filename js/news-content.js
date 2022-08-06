$(function () {
    $('.hotBox li').hover(function () {
        $(this).addClass('li-hover').siblings().removeClass('li-hover');
    }, function () {
        $(this).removeClass('li-hover');
    })
})