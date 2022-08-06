$(function () {
    $('.month .games-info-p:even').addClass('even-color');
    $('.games-info-p').hover(function () {
        $(this).addClass('hover-color');
    }, function () {
        $(this).removeClass('hover-color');
    })
})