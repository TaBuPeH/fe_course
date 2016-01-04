 document.addEventListener("DOMContentLoaded", function(event) {

numbers = [];
while (numbers.length < 6) {
    var select = Math.floor(Math.random() * 48) + 1;
   if (numbers.indexOf(select) < 0)  {
      numbers.push(select)
      alert ('Изтегленото числото е: '+select)
   }

   if(typeof(numbers[0])!=='undefined')
   {
	   document.getElementById('first').innerHTML=numbers[0]
   }
   document.getElementById('second').innerHTML=numbers[1]
   document.getElementById('third').innerHTML=numbers[2]
   document.getElementById('fourth').innerHTML=numbers[3]
   document.getElementById('fifth').innerHTML=numbers[4]
   document.getElementById('sixth').innerHTML=numbers[5]
}

alert ('Честито на печелившите')
});