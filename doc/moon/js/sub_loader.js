// Ready
//console.log ("Loader In!");



$('.sub_item').hide()
$('.about_item').hide()
$('.work_item').hide()





// Sub

function subShowAni(){

	var dur = 1; 

	TweenMax.set($('#logo'), {x:-100});
	TweenMax.to($('#logo'), dur, {x:0});

	TweenMax.set($('#resume'), {x:100});
	TweenMax.to($('#resume'), dur, {x:0});

    $('#logo').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('#resume').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('.gnb').show().stop(true).delay(600)
    .animate({'opacity':1}, 2000)

    $('.profile').show().stop(true).delay(700)
    .animate({'opacity':1}, 1000)

    $('.image_show').show().stop(true).delay(700)
    .animate({'opacity':1}, 1500)

};

subShowAni();





// About

var aboutShowAni = setTimeout(function(){

	var dur = 2; 

	TweenMax.set($('.text_box h1'), {y:100});
	TweenMax.to($('.text_box h1'), dur, {y:0});

	TweenMax.set($('.img_box h1'), {y:100});
	TweenMax.to($('.img_box h1'), dur, {y:0});

	TweenMax.set($('.text'), {y:50});
	TweenMax.to($('.text'), dur, {y:0});

	TweenMax.set($('#color'), {x:100});
	TweenMax.to($('#color'), dur, {x:0});

	TweenMax.set($('#img'), {scaleX:0.85, scaleY:0.85});
	TweenMax.to($('#img'), dur, {scaleX:1, scaleY:1});

    $('.text_box').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)

    $('#color').show().stop(true).delay(700)
    .animate({'opacity':1}, 1000)

}, 300);





// Work

var scrollShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#scroll'), {y:-50});
	TweenMax.to($('#scroll'), dur, {y:0});

    $('#scroll').show().stop(true).delay(100)
    .animate({'opacity':1}, 1000, scrollMov)

}, 1500, 'easeInOutCubic');



var scrollMov = function(){

	TweenMax.to($('#scroll'), 1, {
		bottom:15,
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut, y:-15,
 		yoyoEase:true
 	})

};



var workShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#work_f'), {y:25});
	TweenMax.to($('#work_f'), dur, {y:0});

	TweenMax.set($('#work_s'), {y:50});
	TweenMax.to($('#work_s'), dur, {y:0});

	TweenMax.set($('.num'), {y:50});
	TweenMax.to($('.num'), dur, {y:0});

	TweenMax.set($('#sort'), {x:50});
	TweenMax.to($('#sort'), dur, {x:0});

	TweenMax.set($('.btn'), {x:100});
	TweenMax.to($('.btn'), dur, {x:0});


    $('.title').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)
    
    $('.arr_wrap').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('.num').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('.sub_title').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('.role').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)


}, 1000);
