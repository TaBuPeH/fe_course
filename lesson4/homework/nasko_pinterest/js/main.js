     $(document).ready(function(){
         
            $("#container").gridalicious({
            gutter: 1,
            width: 200,
            animate: true,
            animationOptions: {
            queue: true,
            speed: 200,
            duration: 300,
            effect: 'fadeInOnAppear',
            }
            });
            
           for(var i =0;i<18;i++){
            $('#d'+[i+1]).contenthover({
            overlay_background:'#000',
            overlay_opacity:0.8
            });}
           
           
            $('.item').click(function(){
               $(this).remove(); 
            });
   });