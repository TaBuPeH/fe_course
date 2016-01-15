$('document').ready(function()
{
	
	$('#menuOpener').click(function(){
		if($('#mainMenu').hasClass('menuOpen')){
			$("#mainMenu").slideDown();
			$('#mainMenu').addClass('menuClose');
			$('#mainMenu').removeClass('menuOpen');
			$('#mainMenu').css("position","fixed");
			
			
		}
		else{
			$("#mainMenu").slideUp();
			$('#mainMenu').addClass('menuOpen');
			$('#mainMenu').removeClass('menuClose');
		}
	}
	)
	$('.bxslider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 5
	});
	
	
})