var inputs = document.getElementsByTagName('input');
        for (var i = 0; i< inputs.length; i++){
            inputs[i].addEventListener('focus', function(){
                var div = this.parentNode;

                div.className = div.className += ' colored';
            });
                
        };

        for (var i = 0; i< inputs.length; i++){
            inputs[i].addEventListener('blur', function(){
                var div = this.parentNode;

                div.className = div.className -= ' colored';
            });
                
        };