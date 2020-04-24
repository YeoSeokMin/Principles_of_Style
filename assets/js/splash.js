$(document).ready(function(){
	$("#splash_div").on('click', function(){
		$(this).fadeIn(3000)
	});
	$("#splash_div").trigger("click");
});