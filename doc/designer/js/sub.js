
// ready
// console.log("Sub Js In!")





// Site Parallax

// var winW = $(window).width(),
// 	winH = $(window).height();

// var moveSpeed = 0.75;
// var bigMove = 30, smallMove = 50, minMove = 80, tinyMove = 200;



// $(window).mousemove(function(e) {

// 	var posX = (e.pageX - winW / 2),
// 		posY = (e.pageY - winH / 2);

// 	TweenMax.to($('#site_shape'), moveSpeed, {
// 		css: {
// 			transform : "translate(" + ( - posX / smallMove) + 50 + "px, " + ( - posY / smallMove) + "px"
// 		}
// 	})

// });



$('#site').mouseenter(function(){
	//console.log("Site Mouse Enter");transform:scale(0.5)
	$('#site_shape').stop().animate({
		// 'width':'136px',
		// 'margin-left':'10px',
		// 'margin-top':'6px',
		'opacity':'0.6'
	}, 400);
});

$('#site').mouseleave(function(){
	//console.log("Site Mouse Enter");transform:scale(0.5)
	$('#site_shape').stop().animate({
		// 'width':'150px',
		// 'margin-left':'0',
		// 'margin-top':'0',
		'opacity':'0.3'
	}, 400);
});





// Under Box 

var enterDur = 600;
var leaveDur = 400;

$('li#prev').mouseenter(function(){

	//console.log("Previous Mouse Enter");

	$(this).find('h4').stop().animate({'margin-left': '20px'}, enterDur, 'easeInOutCubic');
	$(this).find('h3').stop().animate({'margin-left': '30px'}, enterDur, 'easeInOutCubic');
});

$('li#prev').mouseleave(function(){

	//console.log("Previous Mouse Leave");

	$(this).find('h4').stop().animate({'margin-left': '0'}, leaveDur, 'easeInOutCubic');
	$(this).find('h3').stop().animate({'margin-left': '0'}, leaveDur, 'easeInOutCubic');
});

$('li#next').mouseenter(function(){

	//console.log("Next Mouse Enter");

	$(this).find('h4').stop().animate({'margin-right': '20px'}, enterDur, 'easeInOutCubic');
	$(this).find('h3').stop().animate({'margin-right': '30px'}, enterDur, 'easeInOutCubic');
});

$('li#next').mouseleave(function(){

	//console.log("Next Mouse Leave");

	$(this).find('h4').stop().animate({'margin-right': '0'}, leaveDur, 'easeInOutCubic');
	$(this).find('h3').stop().animate({'margin-right': '0'}, leaveDur, 'easeInOutCubic');
});