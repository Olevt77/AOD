
//<Меню "бургер">==================================================
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
//</Меню "бургер">==================================================
//<Слайдер Slick>==================================================
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        autoplay: true
    });
});
//</Слайдер Slick>==================================================