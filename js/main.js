new WOW().init();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            margin: 30,
            rtl:true,
            loop: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash',
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                800:{
                    items:2,
                    nav:true,
                    loop:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        

            
        }
    );
  });
  
  