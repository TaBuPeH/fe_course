document.addEventListener('DOMContentLoaded',function(event){

	for (i=0; i<5; i++)
	{
		document.getElementById('c_'+i).innerHTML = sum[i];
		document.getElementById('c_'+i).addEventListener('click', writeIn);
	}

	for (i = 0; i < 4; i++) {
		
		document.getElementById('b_'+i).addEventListener('click', makeItRain)
	};
});

var sum = [0.1, 0.2, 0.5, 1, 2];

var credit = [];

var result = 0;

function writeIn() {

	var tempRes = this.value;

	credit.push(tempRes);

	result = 0

	for (i=0; i<credit.length; i++){

			result += parseFloat(credit[i])
	}

	document.getElementById('text').value = 'Credit:'+parseFloat(result);
	
}

function makeItRain()
{
	var sec = this.value

	var end = parseFloat(result) - parseFloat(sec);

	document.getElementById('text').value = "Please Wait..."

	if(end<0){

		document.getElementById('text').value = 'Not Enough Credit';

		return;
	}

	else{
	setTimeout(function(){

		document.getElementById('text').value = 'Change:'+parseFloat(end);

	}, 1000);


	for (i=0; i<5; i++)
	{
		document.getElementById('c_'+i).removeEventListener('click', writeIn);

	}

	for (i = 0; i < 4; i++) {
		
		document.getElementById('b_'+i).removeEventListener('click', makeItRain)
	};

	for (i=0; i<5; i++)
	{
		document.getElementById('c_'+i).addEventListener('click', function(){

			location.reload();
		});

	}
		
	
}

	
}