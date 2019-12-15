// ready
console.log (window.innerWidth, window.innerHeight);





// Main Loader

$('.bg_box.fade_in').addClass("visible");

var dur = 1; 

var oneLoad = setTimeout(function(){

	// Header

	TweenMax.set($('.header_wrap'), {y:-20});
	TweenMax.to($('.header_wrap'), dur, {y:0});

	$('.header_wrap').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    // One

    TweenMax.set($('#mp_0'), {x:-80});
	TweenMax.to($('#mp_0'), 0.5, {x:0});

	$('#mp_0').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    TweenMax.set($('#title'), {x:80});
	TweenMax.to($('#title'), dur, {x:0});

	$('#title').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    TweenMax.set($('#sub_title'), {x:100});
	TweenMax.to($('#sub_title'), dur, {x:0});

	$('#sub_title').show().stop(true).delay(100)
    .animate({'opacity':1}, 500)

    TweenMax.set($('#app_btn'), {x:100});
	TweenMax.to($('#app_btn'), dur, {x:0});

	$('#app_btn').show().stop(true).delay(100)
    .animate({'opacity':1}, 500)


}, 10)





//Main Contents Fade

var upFade = $('.up_fade');
var leftFade = $('.left_fade');

$(document).on('scroll', function(){
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

	leftFade.each(function(){

		var num = ($(window).height()) * 0.1;

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
});