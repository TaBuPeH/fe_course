document.addEventListener("DOMContentLoaded", function(event) {
    
	function toto() {

        var chosen = [];                 
        while (chosen.length < 6) {      
            var random_number = (Math.floor(Math.random()*48) + 1);
            if (chosen.indexOf(random_number) == -1) {
              chosen.push(random_number);
            }
        }


        chosen.sort(function(a, b){return a-b});   // Sorting method. It also works without it!
       
        for (i=0; i <6; i++) {
          document.getElementById('d_'+(i+1)).innerHTML = chosen[i]
        };

  }

    toto()


  function blink() { 
    $('.blink_me').fadeOut(500).fadeIn(500, blink); 
  };

  blink()


});



/* line 5: A variable chosen, with a value of an empty array;
   line 6: Do the loop until the length of the array reaches 6;
   line 7: Variable random_number with a value a random number between 1 and 49;
   line 8,9 : Check whether the random number is positioned somewhere in the array chosen. 
   If not it returns -1 and pushes the number into the array. If the number has already been included 
   in the array - do nothing.
   line 13: If you like you can have them sorted!
   line 15: Put each number in a separate div.
   line 24: Let the BLINK be with you!
*/