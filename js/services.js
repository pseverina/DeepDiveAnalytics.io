$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.img_story').show();
    } else if (category == 'NLP'){
      $('.NLP').show();
      $('.OM').hide();
      $('.ML').hide();
    } else if(category == 'OM'){
      $('.OM').show();
      $('.NLP').hide();
      $('.ML').hide();
    } else if(category == 'ML'){
      $('.ML').show();
      $('.NLP').hide();
      $('.OM').hide();
    } else if(category == 'SCH'){
      $('.SCH').show();
      $('.HC').hide();
    } else if(category == 'HC'){
      $('.HC').show();
      $('.SCH').hide();
    }
  });

  $("#all").click(function(){
    $("#Carousel").height(880);
  });

  $("#NLP").click(function(){
    $("#Carousel").height(480);
  });

  $("#ML").click(function(){
    $("#Carousel").height(480);
  });

  $("#OM").click(function(){
    $("#Carousel").height(480);
  });

  $("#SCH").click(function(){
    $("#Carousel").height(880);
  });

  $("#HC").click(function(){
    $("#Carousel").height(480);
  });

  $("#Technique_dropdown.dropdown-menu li a").click(function(){
    $("#Technique.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  });

  $("#Industry_dropdown.dropdown-menu li a").click(function(){
    $("#Industry.btn:first-child").html($(this).text()+' <span class="caret"></span>');
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
