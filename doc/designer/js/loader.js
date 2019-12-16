
// ready
// console.log("Loader Js In!")





// Loader

var dur = 1; 

var titleLoad = setTimeout(function(){

	// Header

	TweenMax.set($('header ul'), {y:-5});
	TweenMax.to($('header ul'), dur, {y:0});

	$('header ul').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    // Title

	TweenMax.set($('#title_wrap h1'), {y:20});
	TweenMax.to($('#title_wrap h1'), dur, {y:0, ease:Back.easeOut.config(5)});
	TweenMax.set($('#title_wrap h2'), {y:20});
	TweenMax.to($('#title_wrap h2'), dur, {y:0, ease:Back.easeOut.config(5)});

	$('#title_wrap h1').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)
    $('#title_wrap h2').show().stop(true).delay(50)
    .animate({'opacity':1}, 500);

    // Wave

    TweenMax.set($('#section_cont.cont-i'), {y:40});
	TweenMax.to($('#section_cont.cont-i'), dur, {y:0, ease:Back.easeOut.config(2)});

	 $('#section_cont.cont-i').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000);

    // Sub Content

    TweenMax.set($('.cont-s'), {y:20});
	TweenMax.to($('.cont-s'), dur, {y:0, ease:Back.easeOut.config(2)});

	$('.cont-s').stop(true).delay(0)
    .animate({'opacity':1}, 1000);

    $('#img_wrap').show().stop(true).delay(100)
    .animate({'opacity':1}, 1000);

}, 10)


var shapeLoad = setTimeout(function(){

	TweenMax.set($('.shape'), {scale:0.95});
	TweenMax.to($('.shape'), dur, {scale:1});

	// Main Shape

	TweenMax.set($('#m_shape_green'), {x:'18%'});
	TweenMax.to($('#m_shape_green'), 1, {x:'15%', ease:Circ.easeOut});
	TweenMax.set($('#m_shape_pink'), {x:-20});
	TweenMax.to($('#m_shape_pink'), 1, {x:0, ease:Circ.easeOut});
	TweenMax.set($('#m_shape_yellow'), {x:20});
	TweenMax.to($('#m_shape_yellow'), 1, {x:0, ease:Circ.easeOut});

	$('#m_shape_green').show().stop(true).delay(80)
    .animate({'opacity':1}, 500);
    $('#m_shape_pink').show().stop(true).delay(0)
    .animate({'opacity':1}, 500);
    $('#m_shape_yellow').show().stop(true).delay(40)
    .animate({'opacity':1}, 500);

    // About Shape

    TweenMax.set($('#a_shape_green'), {x:20});
	TweenMax.to($('#a_shape_green'), 1, {x:0, ease:Circ.easeOut});
	TweenMax.set($('#a_shape_pink'), {x:20});
	TweenMax.to($('#a_shape_pink'), 1, {x:0, ease:Circ.easeOut});
	TweenMax.set($('#a_shape_yellow'), {x:-20});
	TweenMax.to($('#a_shape_yellow'), 1, {x:0, ease:Circ.easeOut});

	$('#a_shape_green').show().stop(true).delay(80)
    .animate({'opacity':1}, 500);
    $('#a_shape_pink').show().stop(true).delay(0)
    .animate({'opacity':1}, 500);
    $('#a_shape_yellow').show().stop(true).delay(40)
    .animate({'opacity':1}, 500);

}, 100)





// Fade

var upFade = $('.up_fade');

$(document).on('scroll', function(){
	var pageTop = $(document).scrollTop(),
		pageBottom = pageTop + $(window).height();

	var num = ($(window).height()) * 0.1;

	upFade.each(function(){

		var $this = $(this),
		yTop = $this.offset().top;

		if (yTop + num < pageBottom){
			//$this.css('opacity', 1);
			$this.addClass('visible');
			$this.find('img').addClass('scale');
		} else {
			//$this.css('opacity', 0);
			$this.removeClass('visible');
			$this.find('img').removeClass('scale');
		};
	});
});