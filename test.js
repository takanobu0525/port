$(function(){
	setTimeout(function(){
		$('.top h1').slideDown(1500);
	},2500);
	setTimeout(function(){
		$('.top p').fadeIn(1500);
	},1000);
	setTimeout(function(){
		$('body').fadeIn(1000);
	},0);
	
$(".btnlist").on("click", function() {
	const scrollTarget = $(this)[0].attributes[1].nodeValue;
	const offsetTop = $(scrollTarget).offset().top;
	$("html, body").animate({ scrollTop: offsetTop }, 500);
	return false;
});
	$(function() {
		$('header').click(function() {
			$('.header-right').fadeIn();
		});
	});
});
