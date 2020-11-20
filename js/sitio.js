/*-iniciamos WOW-*/
new WOW().init();


/*-smoothScroll- */
var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {
    easing: 500,
    offset:100,
});


/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
 $(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 100) {
            $(".icono-flechaIrArriba").fadeIn();
        } else {
            $(".icono-flechaIrArriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
 $(window).scroll(function () {

    var nav = $('.bienvenidos__encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});
