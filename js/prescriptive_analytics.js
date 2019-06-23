$(window).scroll(function(){
  if ($(document).scrollTop() > 50){
      console.log('yes');
      $('.navbar').addClass('change');
  }
  else{
      $('.navbar').removeClass('change');
  }
});