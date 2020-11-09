$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav:true,
    autoWidth:false,
    
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        500:{
            items:2,
            nav:true,
            margin:20
        },
        1000:{
            items:4,
            margin:20,
            loop:false
        }
    }
});

