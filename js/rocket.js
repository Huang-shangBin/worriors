$(function () {
    // 返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
            $('.rocket').slideUp(500);
        } else {
            $('.rocket').slideDown(500);
        }
    });

    $('.rocket').on('click', function () {
        $(this).animate({ bottom: '100%' }, 800);
        $('html,body').animate({ scrollTop: '0px' }, 800);
        setTimeout(function () {
            $('.rocket').removeAttr('style');
        }, 1200)
    });
})