$(document).ready(function () {
    $('.meu-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.prevSlidebtn').on('click', function () {
        $('.meu-slider').slick('slickPrev');
    });

    $('.nextSlidebtn').on('click', function () {
        $('.meu-slider').slick('slickNext');
    });
});