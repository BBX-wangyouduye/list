//顶部搜索框
$('.input_serach').click(function () {
    $('.serach_other').slideDown(500)
})
$('.input_serach input[type = text]').blur(function () {
    $('.input_serach input[type = text]')
    .parent()
    .parent()
    .next()
    .slideUp(500);
    console.log('5')
})
// $(".input_serach input[type = text]").blur( function () { alert("Hello World!"); } );


var n = 0;
$('.main_playlist_list .much').click(function () {
        n++
    if (n % 2 !== 0) {
        $(this)
            .addClass('active')
            .find('i')
            .css('background-position', '-100px -260px')
            .parent()
            .parent()
            .parent()
            .parent()
            .next()
            .css('display', 'block')
        console.log('11111111')
    }else{
        $(this).removeClass('active')
        .find('i')
        .css('background-position', '-140px -260px')
        .parent()
        .parent()
        .parent()
        .parent()
        .next()
        .css('display', 'none')
    }
})
$('.main_playlist_list .much').mouseenter(function () {
    $(this)
    .find('i')
    .css('background-position', '-140px -260px')
})
$('.main_playlist_list .much').mouseleave(function () {
    $(this)
    .find('i')
    .css('background-position', '-120px -260px')
})

//动画
$('.meau_cover_img').mouseenter(function () {
    $(this).find('i').addClass('play_hover')
})
$('.meau_cover_img').mouseleave(function () {
    $(this).find('i').removeClass('play_hover')
})




$(window).scroll(function () {
    var v = $(window).scrollTop()
    if (v >= 300) {
        $('.totop').css('display', 'block')
    } else {
        $('.totop').css('display', 'none')
    }
})
$('.totop').click(function () {
    $(window).scrollTop(0)
})