$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.img_story').show();
    } else if (category == '1'){
      $('.2').hide();
      $('.1').show();
    } else if(category == '2'){
      $('.1').hide();
      $('.2').show();
    }

  });
});

