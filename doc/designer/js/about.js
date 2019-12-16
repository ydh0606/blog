
// ready
// console.log("About Js In!")





// About Scroll

var winH = $(window).height();

$(window).scroll(function(){

	var scrollTop = $(window).scrollTop();
	var bgOpacity = 1 - scrollTop / winH * 1.5;
	// console.log("scrollTop", scrollTop);
	// console.log("bgOpacity", bgOpacity);

	$("#scroll_bg").css("opacity", bgOpacity);


	var title_wrap = document.getElementById('title_wrap');

	var a_shape_green = document.getElementById('a_shape_green');
	var a_shape_pink = document.getElementById('a_shape_pink');
	var a_shape_yellow = document.getElementById('a_shape_yellow');

	title_wrap.style.top = 50 - (scrollTop / 12) + '%';

	a_shape_green.style.top = 50 - (scrollTop / 17) + '%';
	a_shape_pink.style.top = 50 - (scrollTop / 10) + '%';
	a_shape_yellow.style.top = 50 - (scrollTop / 15) + '%';

});





// Shape Parallax

var winW = $(window).width(),
	winH = $(window).height();

var moveSpeed = 0.75;
var bigMove = 50, smallMove = 80, minMove = 100, tinyMove = 200;


$(window).mousemove(function(e) {

	var posX = (e.pageX - winW / 2),
		posY = (e.pageY - winH / 2);

	TweenMax.to($('#a_shape_green img'), moveSpeed, {
		css: {
			transform : "translate(" + ( - posX / smallMove) + "px, " + ( - posY / smallMove) + "px"
		}
	})

	TweenMax.to($('#a_shape_pink img'), moveSpeed, {
		css: {
			transform : "translate(" + ( posX / bigMove) + "px, " + ( posY / bigMove) + "px"
		}
	})

	TweenMax.to($('#a_shape_yellow img'), moveSpeed, {
		css: {
			transform : "translate(" + ( - posX / minMove) + "px, " + ( - posY / minMove) + "px"
		}
	})

	TweenMax.to($('#title_wrap h1'), moveSpeed, {
		css: {
			transform : "translate(" + ( posX / tinyMove) + "px, " + ( posY / tinyMove) + "px"
		}
	})

	TweenMax.to($('#title_wrap h2'), moveSpeed, {
		css: {
			transform : "translate(" + ( - posX / tinyMove) + "px, " + ( - posY / tinyMove) + "px"
		}
	})

});