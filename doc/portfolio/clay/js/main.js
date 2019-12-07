// ready
console.log (window.innerWidth, window.innerHeight);





// main contents

$('.first_fade').addClass("visible");

// $('#mp_0').animate({
// 	'opacity' : '1',
// 	'left' : '5%'
// }, 500);

// $('.title_box h1 span.font_en').animate({
// 	'opacity' : '1'
// }, 300);

// $('#sub_title').animate({
// 	'opacity' : '1'
// }, 1000);

// $('#app_btn').animate({
// 	'opacity' : '1'
// }, 700);





// main parallax
var $parallax = document.querySelectorAll('.parallax');
var $parallaxR = document.querySelectorAll('.parallax_r');

var screenW = window.innerWidth;
var screenH = window.innerHeight;

var _paralS = 10;
var _paralL = 35;



function mouseParallax(e){

   for(var i = 0; i < $parallax.length; i++){
        $parallax[i].style.transform ='translate(' + e.pageX/screenW * - _paralL + 'px, ' + e.pageY/screenH * - _paralL + 'px)';
    }

    for(var i = 0; i < $parallaxR.length; i++){
        $parallaxR[i].style.transform ='translate(' + e.pageY/screenH * _paralS + 'px, ' + e.pageX/screenW * _paralS + 'px)';
    }
}

window.addEventListener('mousemove', mouseParallax);





// main scroll

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