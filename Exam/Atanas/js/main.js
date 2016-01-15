

document.addEventListener("DOMContentLoaded",function(){
jQuery(document).ready(function($) {
          
          $('#banner-slide').bjqs({
            animtype      : 'slide',
            height        : 480,
            width         : '100%',
            responsive    : true,
            randomstart   : true
          });
          
        });

document.getElementById('menuIcon').addEventListener('click',function(){
        if(document.getElementById('rightMenu').style.display != 'block'){
            document.getElementById('rightMenu').style.display = 'block';
        }
        else{
            document.getElementById('rightMenu').style.display = 'none';
        }
    });
});