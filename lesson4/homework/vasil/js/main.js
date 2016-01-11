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

		$("#container").gridalicious(grid_config);
		
		
	}
	)
	
	
	
})