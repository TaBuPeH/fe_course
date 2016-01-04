// Задача за домашна работа - създайте програма за теглене на тото 6/49

/* 
while()//дължината на изтеглените числа е <7 - изпълнявай тглене
{
	// изтегли число между 1 и 49;
	// провери дали числото е вече записано в изгеглени числа
	// ако числото не е записано - запиши го
	
}	

extension:

сложете изтегленото съдържание в определен DIV

// сложете 6 отделни див-а и ги изберете с document.getElementById 
//записвайки в първия първото число, във втория второто и т.н.

*/

var first = document.getElementById('firstNumber');
var second = document.getElementById('secondNumber');
var third = document.getElementById('thirdNumber');
var fourth = document.getElementById('fourthNumber');
var fifth = document.getElementById('fifthNumber');
var sixth = document.getElementById('sixthNumber');


var numbers = [];

for(var i = 0; i < 6; i++) {
   var number;
   do {
      number = Math.floor(Math.random() * 48) + 1;
   }
   while(numbers.indexOf(number) != -1);
   
   numbers[i] = number;
}

first.innerHTML = numbers[0];
second.innerHTML = numbers[1];
third.innerHTML = numbers[2];
fourth.innerHTML = numbers[3];
fifth.innerHTML = numbers[4];
sixth.innerHTML = numbers[5];