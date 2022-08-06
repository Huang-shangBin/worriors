$(function () {
    $('.more-box div.row').eq(0).siblings('div.row').hide();
    $('.more-btn').click(function () {
        $(this).parents('.more-box').find('div.row').stop().fadeIn();
        $(this).hide();
    })
})



