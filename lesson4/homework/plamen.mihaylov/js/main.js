document.addEventListener("DOMContentLoaded", function(event) {


$("#device").gridalicious({
  gutter: 10,
  width: 300,
  animate: true,
  animationOptions: { 
    speed: 50, 
    duration: 150, 

    },
});



$('.close').click(function(){
		
	$("input[type='button']").each(function(){
		
		if($(this).is(":focus"))
		{
			
			$(this).closest(".item").css({display:"none",padding: "0px"});
			
			

		}
	});
		
});

});