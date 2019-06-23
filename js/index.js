$(document).ready(function(){
    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

    $(".owl-carousel").owlCarousel({
        margin: -50,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }, 
            1290:{
                items:5,
                nav:true,
                loop:false
            }
        },
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
}); 

$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('.navbar').addClass('change');
    }
    else{
        $('.navbar').removeClass('change');
    }
});