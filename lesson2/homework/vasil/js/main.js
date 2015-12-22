


document.addEventListener("DOMContentLoaded", function(event) { 
	
	var elements = document.querySelectorAll('input.testInput');
	
	
	for(i=0; i<elements.length; i++)
		{

			elements[i].addEventListener("focus",makeItBigger);
			elements[i].addEventListener("blur",makeItSmaller);
			elements[i].addEventListener("focus",function(){
				
				this.parentElement.style.backgroundColor="#000";
			});
		}
	


	
	
	function makeItBigger(){ 
	
		
		for(i=0; i<elements.length; i++)
			{

				elements[i].style.height= "50px";
			}
		
	}
	
	
	function makeItSmaller(){ 
	
		
		for(i=0; i<elements.length; i++)
			{

				elements[i].style.height= "16px";
			}
		
	}
	
	
});