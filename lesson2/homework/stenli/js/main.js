document.addEventListener("DOMContentLoaded", function(event) {

	var elements = document.querySelectorAll('input.inside');
	
	for (i = 0; i < elements.length; i++) {
		elements[i].addEventListener('focus', onInputFocus);
		elements[i].addEventListener('blur', onInputBlur);
	};
	
	
	
	document.getElementById('dont').addEventListener('click',function()
	{
	/*	alert('Dont listen to him');
		var divs = document.querySelectorAll('div.theDivs');

		for (i = 0; i < divs.length; i++) {
			divs[i].style.display= "none";
		};

		document.getElementById('dont').style.display= "none";

		document.getElementById('told').style.display= "block";

		
		*/
		
		
		document.getElementById('told').addEventListener('click',function() {
			for (var i = 0; i < divs.length; i++) {
				divs[i].style.display= "block";
			};
			document.getElementById('told').style.display= "none";

			document.getElementById('dont').style.display= "block";
		});
		
		
		
	});
	
});

function onInputFocus() 
	{
		this.parentNode.style.backgroundColor= "#000";

	}

function onInputBlur()
	{

		document.getElementById('redDiv').style.backgroundColor= "#F00"

		document.getElementById('blueDiv').style.backgroundColor= "#00F"

		document.getElementById('greenDiv').style.backgroundColor= "#0F0"
	}

