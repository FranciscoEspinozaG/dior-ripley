$(document).ready(function () {

    $('.slide-individual').owlCarousel({
        items: 1,
        singleItem: true,
        loop:true,
        margin: 0,
        nav:true,
        pagination: false,
        autoplay: true
    });

    $('.owl-stagePadding').owlCarousel({
        items: 1,
        singleItem: true,
        loop: true,
        margin: 100,
        stagePadding: 200,
        nav: true,
        pagination: true,
        autoplay: true
    })

});