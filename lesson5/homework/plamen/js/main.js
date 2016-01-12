document.addEventListener("DOMContentLoaded", function(event) {
   var select,
   box = $('.box'),
   wrapper = $('.wrapper'),
   numbers = [];

   $('input[type=button]').on('click', function(){
      if ($('.box').length < 6) {
         $.get("info.php", {type:'lottery'}, function(data) {
            var select = (data);
            if (numbers.indexOf(select) < 0)  {
               numbers.push(select);
               var lastOfArray = numbers.pop();
               wrapper.append('<div class="box">'+ lastOfArray +'</div>');
            }
         },'html')

      }
   });

});