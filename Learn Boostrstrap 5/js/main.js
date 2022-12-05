$('.home .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
          
        }
    }
})
// start team
$('.team .owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1200,
    autoplayHoverPause:true,
    margin:7,
    responsive:{
        800:{
            items:2
        }
    }
});
//people
$('.people .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})