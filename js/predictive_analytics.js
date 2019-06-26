$(document).ready(function () {
    var small_1={width: "520px",height: "320px"};
    var large_1={width: "620px",height: "420px"};
    var count=1; 

    $("#schema_1").on('click',function () { 
        $(schema_1).animate((count==1)?large_1:small_1);
        count = 1-count;
    });

    var small_2={width: "520px",height: "380px"};
    var large_2={width: "660px",height: "500px"};
    $("#schema_2").on('click',function () { 
        $(schema_2).animate((count==1)?large_2:small_2);
        count = 1-count;
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