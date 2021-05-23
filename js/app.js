$(document).ready(function(){
	 jQuery('#test').owlCarousel({
        autoPlay: 2000,
        loop:true,  
        dots: true,
        items:4, 
        nav: false
    });

    jQuery('.navbar-toggler').click(function(){
        jQuery('.navbar-toggler-icon').toggleClass('open')
    })
});