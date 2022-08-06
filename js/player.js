$(function () {
    $('.interval-color div.player-info-p:even').addClass('even-color');
    $('.player-info-p').hover(function () {
        $(this).addClass('hover-color');
    }, function () {
        $(this).removeClass('hover-color');
    })

    $('.big-box').find('.databox').hide();
    $('.btn-toggle .info').click(function () {
        $(this).addClass('btn-bacolor').siblings().removeClass('btn-bacolor');
        $('.infobox').show().siblings().hide();
    })
    $('.btn-toggle .data').click(function () {
        $(this).addClass('btn-bacolor').siblings().removeClass('btn-bacolor');
        $('.databox').show().siblings().hide();
    })
})