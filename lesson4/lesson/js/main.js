var isAnimating = false;
/// new onLoad event
// new selector
$('document').ready(function(){
	
	// complex jquery selector
	$("input[attr-num$='1']").click(function(){
		
		alert('my btn');
		
	});
	
//	$("input[type='checkbox']:checked").click(function(){
//		
//		alert('I Was Good Before');
//		
//	});
	
	// add event
	$('#addNewCheckbox').click(function(){
		
		if(!isAnimating)
		{
			// copy another element
			var newCheckbox = $("input[type='checkbox']:last-of-type").clone();
			
			// get attribute
			var name = newCheckbox.attr('name');
			
			var num = parseInt(name.substr(5)) + 1;
			
			var newName = name.substr(0,5) + num;
			// set attribute
			newCheckbox.attr('name',newName);
			// remove attribute
			newCheckbox.removeAttr('checked');
			
			$('#ourCbList').append(newCheckbox);
			
			isAnimating = true;
			//simple animation
			$("input[type='checkbox']:last-of-type").animate({left: '+=20px'},function(){
				
				isAnimating = false;
				
				//get css	
				var currentLeft = $(this).css('left');
				currentLeft = parseFloat(currentLeft)+10;
				// set css
				$(this).css('left',currentLeft)
			})
			
			// set display:none;
			$('#myRedDiv').hide();
		
		}
		
	});
	
	$('#removeChecked').click(function(){
		// foreach element from the sector results
		$("input[type='checkbox']").each(function(){
			// check if something is :pseudo-condition
			if($(this).is(":checked"))
			{
				// removing HTML element
				$(this).remove();
			}
		});
		
	});
});

$(document).on('click',"input[type='checkbox']",function(){
	
	if($(this).is(":checked"))
		{
		// animation with on-ready handler
			$('#myRedDiv').show(500,function(){ alert('I am here')});
		}
	else
		{
			$('#myRedDiv').hide(500,function(){ alert('John Cena')});
		}
})


// направете галерия от снимки,
// които да са в стил Pinterest и да използват 
// http://suprb.com/apps/gridalicious/
// добавете към всяка снимка в горен десен ъгъл бутонче за изтриване
// ако е възможно пренаредете грид-а
