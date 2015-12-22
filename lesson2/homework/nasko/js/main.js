
/* Задача: 
 * 
 * create 3 divs.
 * create an input in each div
 * style the divs in different colors
 * use querySelectorAll to add an event to all inputs (blur/focus ...)
 * use some selector to find the div containing this input and change its color.
 * research possibility to get parent element with Javascript
 *  
 * 
 */


 document.addEventListener('DOMContentLoaded',function(){
 	var elements = document.querySelectorAll('.secondOne');

 	for(var i = 0; i < elements.length;i++){
 		elements[i].addEventListener('mouseout',function(){
 			for(var i = 0; i < elements.length ; i++){
 			elements[i].style.border='10px inset red';
 		}
 		});
 	}

 	for(var i = 0; i <elements.length;i++){
 		elements[i].addEventListener('mouseenter',function(){
 			for(var i = 0;elements.length;i++){
 				elements[i].style.border = '10px outset yellow';
 			}
 		});
 	}
 	
 	/* form DOM */

 	var formElements = document.getElementById('formichka');
 	
 	for(var i = 0; i < formElements.length;i++){
 		formElements[0].addEventListener('focus',function(){
 				formElements[0].style.backgroundColor = 'yellow';
 		});
 	}

 	// for the second focus

 		for(var i = 0; i < formElements.length;i++){
 		formElements[1].addEventListener('focus',function(){
 				formElements[1].style.backgroundColor = 'pink';
 				formElements[1].style.color = 'blue';
 		});
 	}

 	// for the third focus

 		for(var i = 0; i < formElements.length;i++){
 		formElements[2].addEventListener('focus',function(){
 				formElements[2].style.backgroundColor = 'skyblue';
 				formElements[2].style.color = 'red';
 		});
 	}


 });

