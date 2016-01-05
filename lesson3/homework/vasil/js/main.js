document.addEventListener('DOMContentLoaded',function(event){

	for (i=0; i<4; i++)
	{
		document.getElementById('price_'+i).innerHTML = money[i];
		document.getElementById('price_'+i).addEventListener('click', payMoney);
	}

	for (j = 0; j < 3; j++) {
		
		document.getElementById('drink_'+j).addEventListener('click', chooseDrink)
	};
	document.getElementById('get').addEventListener('click', getDrink)
});

	var money = [0.1, 0.2, 0.5, 1];
	
	var items = Array();
	items['cafe']= 0.3;
	items['cafe_cream']= 0.4;
	items['chocolate']= 0.5;
	
	

	var amount = [];
	var drinks = [];
	var price = '';
	var drink = [];

	var totalPrice=0;
	
	function payMoney(){
		price = this.value;
		amount.push(price);
		
		for (i=0;i<amount.length;i++)
	    {
	        totalPrice += parseFloat(amount[i]);
	    }
	}
	
	var totalDrinks=0;
	
	function chooseDrink(){
		drink = this.value;
		drinks.push(drink);
			for (i=0;i<drinks.length;i++)
			{
				totalDrinks += parseFloat(drinks[i]);
			}

		
	}

	function getDrink(){
		alert(totalPrice);
		alert(totalDrinks);
		if ( totalPrice > totalDrinks){
			alert('You get '+drinks)
			alert('Your change is '+change);
		}
		else{
			alert('Not enought money');
		}
		function getChange(){
		change =  totalPrice - totalDrinks;
		
		}
		getChange();
	}
	
		
