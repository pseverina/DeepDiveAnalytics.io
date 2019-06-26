$(document).ready(function () {
    var small={width: "550px",height: "500px"};
    var large={width: "650px",height: "600px"};
    var count=1; 

    $("#schema").on('click',function () { 
        $(schema).animate((count==1)?large:small);
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