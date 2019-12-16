
// ready
// console.log("Main Js In!")





// Main Scroll

var winH = $(window).height();

$(window).scroll(function(e){

	var scrollTop = $(window).scrollTop();
	var bgOpacity = 1 - scrollTop / winH * 1.5;
	// console.log("scrollTop", scrollTop);
	// console.log("bgOpacity", bgOpacity);

	$("#scroll_bg").css("opacity", bgOpacity);


	var title_wrap = document.getElementById('title_wrap');

	var m_shape_green = document.getElementById('m_shape_green');
	var m_shape_pink = document.getElementById('m_shape_pink');
	var m_shape_yellow = document.getElementById('m_shape_yellow');

	title_wrap.style.top = 50 - (scrollTop / 12) + '%';

	m_shape_green.style.top = 0 - (scrollTop / 30) + '%';
	m_shape_pink.style.top = 50 - (scrollTop / 10) + '%';
	m_shape_yellow.style.top = 50 - (scrollTop / 14) + '%';

})





// Shape & Title Parallax

var winW = $(window).width(),
	winH = $(window).height();

var moveSpeed = 0.75;
var bigMove = 30, smallMove = 50, minMove = 80, tinyMove = 200;

$(window).mousemove(function(e) {

	var posX = (e.pageX - winW / 2),
		posY = (e.pageY - winH / 2);

	TweenMax.to($('#m_shape_green img'), moveSpeed, {
		css: {
			transform : "translate(" + ( - posX / bigMove) + "px, " + ( - posY / bigMove) + "px"
		}
	})

	TweenMax.to($('#m_shape_pink img'), moveSpeed, {
		css: {
			transform : "translate(" + ( - posX / smallMove) + "px, " + ( - posY / smallMove) + "px"
		}
	})

	TweenMax.to($('#m_shape_yellow img'), moveSpeed, {
		css: {
			transform : "translate(" + ( posX / minMove) + "px, " + ( posY / minMove) + "px"
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





// Work List

var enterDur = 1000;
var leaveDur = 800;

$('ul#work_list li').mouseenter(function(){

	//console.log("Mouse Enter");

	$(this).find('h4').stop().animate({'margin-left': '20px'}, enterDur, 'easeOutBounce');
	$(this).find('h3').stop().animate({'margin-left': '30px'}, enterDur, 'easeOutBounce');
});

$('ul#work_list li').mouseleave(function(){

	//console.log("Mouse Leave");

	$(this).find('h4').stop().animate({'margin-left': '0'}, leaveDur, 'easeOutBounce');
	$(this).find('h3').stop().animate({'margin-left': '0'}, leaveDur, 'easeOutBounce');
});





// Work Img Tilt or Float

$('.work_img').mouseenter(function(){
	//console.log("Float-Down Mouse Enter");
	$(this).addClass('float-down');
});

$('.work_img').mouseleave(function(){
	//console.log("Float-Up Mouse Leave");
	$(this).removeClass('float-down');
	$(this).addClass('float-up');
});


// IE Browser Check

// var agent = navigator.userAgent.toLowerCase();

// if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

// 	//alert("Yes, IE!");
// 	//$('.work_img').attr('class', 'work_img float-up');

// 	$('.work_img').mouseenter(function(){
// 		//console.log("Float-Down Mouse Enter");
// 		$(this).addClass('float-down');
// 	});
// 	$('.work_img').mouseleave(function(){
// 		//console.log("Float-Up Mouse Leave");
// 		$(this).removeClass('float-down');
// 		$(this).addClass('float-up');
// 	});

// }else {
// 	//alert("No, IE!");
// 	$('.work_all').attr('class', 'work_img work_all data-tilt');
// 	$('.work_app').attr('class', 'work_img work_app m-data-tilt');
// };



// $(document).ready(function (){

// 	$('.data-tilt').tilt({
// 		maxTilt:20,
// 		perspective:1000,
// 		easing:"cubic-bezier(.03,.98,.52,.99)",
// 		scale:1.02,
// 		speed:1000,
// 		transition:true, 
// 		disableAxis:'X',
// 		reset:true, 
// 		glare:false, 
// 		maxGlare:0.1 
// 	});

// 	$('.m-data-tilt').tilt({
// 		perspective:400
// 	});

// });