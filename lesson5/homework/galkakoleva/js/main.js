$(document).ready(function(){
  
  $('input[type=radio]').click(function(){
    
    id = $(this).attr('id');
    
    $.get("info.php", {type:'gallery'}, function(data){
      
      $('.food').append(data);
    },'html')
    
    
  });

 $('input[type=button]').click(function(){
    
    $.get("info.php", {type:'lottery'}, function(data){
      
      $('.lottery').append(data);
    },'html')
    
    
  });

  
});