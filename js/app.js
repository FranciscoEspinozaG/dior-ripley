$(document).ready(function () {

    $('.owl-header').owlCarousel({
        items: 1,
        singleItem: true,
        loop:true,
        margin: 0,
        nav:true,
        pagination: true,
        autoplay: true,
        resposiveClass: true,
        responsive:{
            0:{
                items:1,
                nav: false,
                pagination: false,
            },
            600:{
                items:1,
                nav: false,
                pagination: false,
            },
            1000:{
                items:1,
            }
        }
    })

    $('.owl-productos').owlCarousel({
        items: 1,
        singleItem: true,
        loop:true,
        margin: 10,
        nav:false,
        pagination: false,
        autoplay: true,
        resposiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:4,
                nav: true,
                pagination: true,
            }
        }
    });

    $('.owl-stagePadding').owlCarousel({
        items: 1,
        margin: 15,
        singleItem: true,
        loop: false,
        nav: true,
        pagination: true,
        autoplay: true,
        resposiveClass: true,
        responsive:{
            0:{
                items:1,
                margin: 100,
                stagePadding: 200,
                loop: true,
            },
            600:{
                items:1,
                margin: 100,
                stagePadding: 200,
                loop: true,
            },
            1000:{
                items:5,
            }
        }
    });

    $('.owl-cat').owlCarousel({
        singleItem: true,
        loop: true,
        margin: 20,
        nav: true,
        pagination: true,
        autoplay: true,
        resposiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    })

});