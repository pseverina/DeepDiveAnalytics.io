/*
$(document).ready(function() {
    var windowWidth = $(this); //this = window
    if (windowWidth.width() < 770) { 
        $('.section-1__text_hidden').show();
        $('.section-1__text').hide();
    } else{
        $('.section-1__text_hidden').hide();
        $('.section-1__text').show();
    }
});*/


$(window).on('resize', function(){
    var windowWidth = $(this); //this = window
    if (windowWidth.width() < 770) { 
        $('.section-1__text_hidden').show();
        $('.section-1__text').hide();
    } else{
        $('.section-1__text_hidden').hide();
        $('.section-1__text').show();
    }
});
