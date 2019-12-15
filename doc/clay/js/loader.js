// ready
console.log (window.innerWidth, window.innerHeight);





// Main Loader

$('.bg_box.fade_in').addClass("visible");
$('.con_01_clay').addClass("visible");

var dur = 1; 

var oneLoad = setTimeout(function(){

	// Header

	TweenMax.set($('.header_wrap'), {y:-20});
	TweenMax.to($('.header_wrap'), dur, {y:0});

	$('.header_wrap').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    // Main

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

    $('#bgt_clay').show().stop(true).delay(0)
    .animate({'opacity':0.2}, 500)

    $('#bgt_want').show().stop(true).delay(0)
    .animate({'opacity':0.2}, 500)

    // Function 

    TweenMax.set($('.con_01_clay .text_box'), {x:-80});
	TweenMax.to($('.con_01_clay .text_box'), 0.5, {x:0});

	$('.con_01_clay .text_box').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    TweenMax.set($('.con_01_clay .img_box img'), {x:80});
	TweenMax.to($('.con_01_clay .img_box img'), dur, {x:0});

	$('.con_01_clay .img_box img').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    TweenMax.set($('.con_01_clay #text_list'), {x:50});
	TweenMax.to($('.con_01_clay #text_list'), 1.5, {x:0});

	$('.con_01_clay #text_list').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    $('.con_01_clay .motive').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    $('.con_01_clay .tip').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    // Team

    TweenMax.set($('.team .text_box'), {x:-50});
	TweenMax.to($('.team .text_box'), 0.5, {x:0});

	$('.team .text_box').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    TweenMax.set($('.role_box'), {x:-50});
	TweenMax.to($('.role_box'), dur, {x:0});

	$('.role_box').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    TweenMax.set($('.list_wrap'), {y:50});
	TweenMax.to($('.list_wrap'), dur, {y:0});

	$('.list_wrap').show().stop(true).delay(0)
    .animate({'opacity':1}, 500)

    $('#bgt_team').show().stop(true).delay(0)
    .animate({'opacity':0.2}, 500)

}, 10)





//Main Contents Fade

var upFade = $('.up_fade');
var leftFade = $('.left_fade');
var showFade = $('.show_fade');

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

    showFade.each(function(){

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
});