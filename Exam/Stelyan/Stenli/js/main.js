$(document).ready(function(){
  $(".rslides").responsiveSlides();  
  $('.mobile-opener').click(function(){

  	$('.mobile-menu').css("display","block")
  });
  $('.close').click(function(){
  	$('.mobile-menu').css("display","none")
  });
});