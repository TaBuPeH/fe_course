document.addEventListener("DOMContentLoaded", function(event) {

	var iztegleni = Array();
	//iztegleni.length=0;
	do
	{
		var tempResult = Math.floor(Math.random()*48) + 1;

		if(iztegleni.indexOf(tempResult) == -1)
		{
			iztegleni.push(tempResult);
		}
	}
	while(iztegleni.length < 6);
	console.log(iztegleni);

	document.getElementById('start').addEventListener('click', function(){

	

	document.getElementById('first').innerHTML = iztegleni[0];
	document.getElementById('secound').innerHTML = iztegleni[1];
	document.getElementById('third').innerHTML = iztegleni[2];
	document.getElementById('fourth').innerHTML = iztegleni[3];
	document.getElementById('fifth').innerHTML = iztegleni[4];
	document.getElementById('sixth').innerHTML = iztegleni[5];
	});
	});
