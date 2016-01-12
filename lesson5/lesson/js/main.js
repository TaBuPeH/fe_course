$(document).ready(function(){
	
	$('input[type=radio]').click(function(){
		
		id = $(this).val();
		
		$.get("info.php",{type:id}, function(data){
			
			$('.sarmi4ki').append(data);
		},'html')
		
		
	});
	
});

// {case :'gallery'},,{type:id},