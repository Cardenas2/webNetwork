$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav:true,
    autoWidth:false,
    navText: ['<i class="fa fa-chevron-circle-left button-left" title="Anterior"></i>', '<i class="fa  fa-chevron-circle-right button-right" title="Siguiente"></i>'],
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:false,
            margin:20
        },
        1000:{
            items:4,
            margin:20,
            loop:false
        }
    }
});

