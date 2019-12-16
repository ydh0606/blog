// ready
console.log (window.innerWidth, window.innerHeight);





// function scroll

$('.first_fade').addClass("visible");

$(document).on('scroll', function(){
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();

	console.log($(window).height());

	var num = ($(window).height()) * 1;
	var _num = ($(window).height()) * 6;

	var upFadeItem = $('.up_fade');
	var leftFadeItem = $('.left_fade');

	for(var i = 0; i < upFadeItem.length; i++){

		var upFade = upFadeItem[i]
		var y = $(upFade).position()

		if (y.top + num < pageBottom) {
			$(upFade).addClass("visible");
			$('.left_fade').addClass("visible");
		} else if (y.top + _num > pageBottom){
			$(upFade).removeClass("visible");
			$('.left_fade').removeClass("visible");
		}
	}
});