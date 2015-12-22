document.addEventListener("DOMContentLoaded", function(event) {
    
		var elements = document.querySelectorAll('.inside_input');
			for (i=0; i<elements.length; i++) {
				elements[i].addEventListener("focus", changeColor);
				elements[i].addEventListener("blur", onInputBlur);  
			};
			// Как да го направя така, че да се оцветява само кликнатото?
			// Предполагам е с .activeElement, но не мога да открия как.




});



function changeColor(e){ 
	
	e.target.style.backgroundColor= "yellow";
	/*
	var elements = document.querySelectorAll('.inside_input');

	for(i=0; i<elements.length; i++)
		{
			elements[i].style.backgroundColor= "yellow";
		};*/
	
};


function onInputBlur(e) {
	var input_elements = document.querySelectorAll('.inside_input');

	for (i=0; i<input_elements.length; i++) {
		a = input_elements[i];

		if (isNaN(a.value)) {
			a.parentElement.style.backgroundColor = "pink";
		} else if (a.value == ""){

		} else {
			a.parentElement.style.backgroundColor = "purple";
		}
	};
	
}


