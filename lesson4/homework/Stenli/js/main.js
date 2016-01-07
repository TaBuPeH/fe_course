$('document').ready(function(){

	$('.close').click(function(){

		$(this).parent().remove();
	});
	$('.nope').click(function(){

		$(this).animate({right:"+=50px"}, function(){

			var curentRight = $(this).css('right');

			curentRight = parseFloat(curentRight);

			$(this).css('right', curentRight);
		});
	});
	$("#container").gridalicious({
		animate: true,
		animationOptions: {
	    queue: true,
	    speed: 200,
	    duration: 300,
	    effect: 'fadeInOnAppear',
	   
  }
});
});