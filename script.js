$(document).ready(function () {
    $('.padrao-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.prevSlidebtn').on('click', function () {
        $('.padrao-slider').slick('slickPrev');
    });

    $('.nextSlidebtn').on('click', function () {
        $('.padrao-slider').slick('slickNext');
    });
});