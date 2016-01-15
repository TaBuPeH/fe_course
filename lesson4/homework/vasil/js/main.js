var grid_config = {
		  gutter: 20,
		  width: 200,
		  animate: true,
		  animationOptions: {
		    queue: true,
		    speed: 200,
		    duration: 300,
		    effect: 'fadeInOnAppear'
		   
		  }
		};

$('document').ready(function()
{
	
	$("#container").gridalicious(grid_config);
	
	$('.deleteLink').click(function(){
		$(this).parent().remove();
<<<<<<< HEAD
		$(window).resize();
=======

		$("#container").gridalicious(grid_config);
		
		
>>>>>>> b862f9d6f8b9721b1d0430b71dd7638a13063a07
	}
	)
	
	
	
})