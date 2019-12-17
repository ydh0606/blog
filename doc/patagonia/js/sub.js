
// ready
//console.log("Sub Script In!")

$('.big_box').hide();
$('.sub_item').hide();
$('.title_wrap').hide();
$('.line_img').hide();





$(document).ready(function() {

	// Scroll

	var nice = function(){

		$('html').niceScroll({
			zindex:100000,
			scrollspeed:100,
			mousescrollstep:20,
			cursorcolor:"#a67c52",
			cursoropacitymin:0,
			cursoropacitymax:0.8,
			cursorwidth:"8px",
			cursorminheight:100,
			cursorborder:"0px solid #fff",
			cursorborderradius:"0",
			background:"",
			hidecursordelay:1000
		});
	}

    // Browser check

    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

        //alert("IE Browser");

        nice();

		$(window).resize(function (){
			nice();
		});

    }else if (agent.indexOf("edge") != -1) {

		//alert("IE Edge Browser");

		nice();

		$(window).resize(function (){
			nice();
		});

	}else if (agent.indexOf("whale") != -1) {

		//alert("Whale Browser");

		// nice();

		// $(window).resize(function (){
		// 	nice();
		// });

	}else if (agent.indexOf("chrome") != -1) {

		//alert("Chrome Browser");

		// nice();

		// $(window).resize(function (){
		// 	nice();
		// });

	}else if (agent.indexOf("safari") != -1) {

		//alert("Safari Browser");

		// nice();

		// $(window).resize(function (){
		// 	nice();
		// });

	}else if (agent.indexOf("firefox") != -1) {

		//alert("Firefox Browser");

		nice();
		
		$(window).resize(function (){
			nice();
		});

	}else {
		//alert("ETC Browser");
	}
});





// Sub Load

window.onload = function () {
	//console.log("Load Complete");
	setTimeout('loading()', 1000);
}

// setTimeout(function(){
// 	loading();
// }, 1500)

function loading(){

	$('.load').animate({'opacity':0}, 500);
	$('.big_box').show().delay(0).animate({'opacity':1}, 800);

	subOpenAni();
}





// Sub Load Animation

function subOpenAni(){

	var dur = 0.5; 

	TweenMax.set($('.drop'), {css:{y:-35}});
	TweenMax.set($('.title_wrap'), {css:{y:-50}});

	TweenMax.to($('#logo'), dur, {css:{y:0}, delay:0.5});

	TweenMax.to($('#menu'), dur, {css:{y:0}, delay:0.7});

	TweenMax.to($('#sns li').eq(0), dur, {css:{y:0}, delay:0.5});
	TweenMax.to($('#sns li').eq(1), dur, {css:{y:0}, delay:0.6});
	TweenMax.to($('#sns li').eq(2), dur, {css:{y:0}, delay:0.7});

	TweenMax.to($('#site a'), dur, {css:{y:0}, delay:0.8});

	TweenMax.to($('.line_img'), 3.5, {css:{y:0}, delay:0.6, ease:Elastic.easeOut.config(1, 0.5)});
	TweenMax.to($('.title_wrap'), 4, {css:{y:0}, delay:0.6, ease:Elastic.easeOut.config(1, 0.5)});

	TweenMax.to($('html'), dur, {css:{'background-color':'#333333'}, delay:0.8});
	TweenMax.to($('body'), dur, {css:{'background-color':'#333333'}, delay:0.8});

    $('.sub_item').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000);

    $('.title_wrap').show().stop(true).delay(700)
    .animate({'opacity':1}, 1500);

    $('.line_img').show().stop(true).delay(800)
    .animate({'opacity':0.6}, 1500);

}



$('.white_wrap').on("mousewheel",function(e){
    return false;
});



var winH = $(window).height();
//console.log(conH);

$(window).scroll(function(){

	var scrollTop = $(window).scrollTop();
	//console.log(scrollTop);

	var bgOpa = 1 - scrollTop / winH * 0.5;
	var lineOpa = 1 - scrollTop / winH * 1.5;
	var titleOpa = 1 - scrollTop / winH * 1.2;
	//console.log(opacity);
	

	$(".sub_bg").css("opacity", bgOpa);
	$(".line_img").css("opacity", lineOpa);
	$(".title_wrap").css("opacity", titleOpa);



	var upFade = $('.up_fade');

	var pageTop = $(document).scrollTop(),
		pageBottom = pageTop + $(window).height();

	upFade.each(function(){

		var num = ($(window).height()) * 0.15;

		var $this = $(this),
		yTop = $this.offset().top;

		if (yTop + num < pageBottom){
			//$this.css('opacity', 1);
			$this.addClass('visible');
		} else {
			//$this.css('opacity', 0);
			$this.removeClass('visible');
		};
	});
})