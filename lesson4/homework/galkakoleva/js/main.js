 $('document').ready(function(){ 


  $("#container").gridalicious({
      gutter: 20, 
      width: 250, 
      animate: true, 
      animationOptions: { 
        speed: 200, 
        duration: 300, 
        
        },
    });


  // $("input[type='checkbox']").animate({top: '+=5px'},function(){
        
  //       var currentTop = $(this).css('top');
  //       currentTop = parseFloat(currentTop)+5;
     
  //       $(this).css('top',currentTop)
  //     });



$( "input[type='checkbox']" ).click(function() {

 if($("input[type='checkbox']").is(":checked"))
      {
        
        $("input[type='checkbox']:checked").parent('div').remove().load('js/jquery.grid-a-licious.js');
        
      }
});


  });

