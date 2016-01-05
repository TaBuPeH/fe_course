var mainTimeout = null;

document.addEventListener("DOMContentLoaded", function(event) {
	
		mainTimeout = setTimeout(drawRandomNumber, 1000);

		
		
		function drawRandomNumber()
		{
			var number = Math.floor(Math.random()*48) +1;
			
			if(numbers.indexOf(number) == -1)
			{
				numbers.push(number);
				document.getElementById('d_'+numbers.length).innerHTML = number;
			}
			
			mainTimeout = setTimeout(drawRandomNumber, 1000 + Math.floor(Math.random()*2000));
			
			if(numbers.length==6)
			{
				clearTimeout(mainTimeout);
				alert('Jackpot')
			}
			
			
		}

});


var numbers = [];
var numbers = Array();



/********* Variable Scope **********/
/** За обхвта на променливите ще говорим отново следващият път 
 * **/





var a = 5;

var z;

function x()
{
    var a = 7;
	alert(a);
	
	z = function()
	{
	    var a = 9;
		alert(a);
	}
}

x();
z();
alert(a);

//alert(a);



/*

var x =0;

function s()
{
	x = 1;
	alert(x);
}

alert(x);
s();
alert(x);
*/


/* Домашна работа
 * 
 * Задача за изпълнение в Javascript
 * 
 * Имате автомат за кафе приемащ монети от 10ст, 20ст, 50ст, 1лв
 * 
 * Имате напитки на стойност 30ст (кафе), 40ст(кафе+сметана), 50ст (горещ шоколад)
 * 
 * Дайте на клиента избор коя напитка да пие и колко пари ще плати (може и като HTML Markup)
 * 
 * изпечатайте рестото
 * 
 * позволете на клиента да поръча повече от веднъж напитката (3 кафета) и да пусне еднократно сумата (1 лев) и да получи ресто
 * 
 */































