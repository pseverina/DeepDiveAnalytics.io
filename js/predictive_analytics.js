$(document).ready(function() {
    $('.zoom').magnify({
        magnifiedWidth: 900,
        magnifiedHeight: 768
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