$(document).ready(function(){

	$('input[type=button]').click(addIt());
});
function addIt() {

	id= $(this).id

	if (id="coffee") {

		$.get("info.php",{type:id}, function(data){
			$('.content').append(data)
		},'json');
	};
	if (id="gallery") {

		$.get("info.php",{type:id}, function(data){
			$('.content').append(data)
		},'html');
	};
	if (id="lottery") {

		$.get("info.php",{type:id}, function(data){
			$('.content').append(data)
		});
	};
}