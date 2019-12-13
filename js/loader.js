// Ready
console.log ("Loader In!");



$('.intro_item').hide()
$('.main_item').hide()
$('.control_item').hide()





// Intro

// function introOpenAni(){

// 	var dur = 1; 

// 	TweenMax.set($('.intro_open'), {y:100});
// 	TweenMax.to($('.intro_open'), dur, {y:0});

//     $('.intro .moon').show().stop(true).delay(200)
//     .animate({'opacity':1}, 700)

//     $('.intro .moon_line').show().stop(true).delay(500)
//     .animate({'opacity':1}, 1000)

// }

var introOpenAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('.intro_open'), {y:100});
	TweenMax.to($('.intro_open'), dur, {y:0});

    $('.intro .moon').show().stop(true).delay(200)
    .animate({'opacity':1}, 700)

    $('.intro .moon_line').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)

}, 100)

	





var introShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#intro_i'), {y:100});
	TweenMax.to($('#intro_i'), dur, {y:0});

	TweenMax.set($('#intro_f'), {y:150});
	TweenMax.to($('#intro_f'), dur, {y:0});

    $('.intro_title').show().stop(true).delay(0)
    .animate({'opacity':1}, 2000, 'easeInOutCubic')

}, 300)



var introHideAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#intro_i'), {y:0});
	TweenMax.to($('#intro_i'), dur, {y:-150});

	TweenMax.set($('#intro_f'), {y:0});
	TweenMax.to($('#intro_f'), dur, {y:-100});

	$('.intro_title').stop(true).delay(0)
    .animate({'opacity':0}, 1500)

    $('.intro').stop(true).delay(0)
    .animate({'opacity':0}, 500)

}, 3000)





// Main

var mainOpenAni = setTimeout(function(){

	var dur = 1; 

    TweenMax.set($('#title_d'), {y:50});
	TweenMax.to($('#title_d'), dur, {y:0});

	TweenMax.set($('#title_h'), {y:100});
	TweenMax.to($('#title_h'), dur, {y:0});

    $('.main_title').show().stop(true).delay(0)
    .animate({'opacity':1}, 2000)

}, 3500)



var mainShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#logo'), {x:-100});
	TweenMax.to($('#logo'), dur, {x:0});

	TweenMax.set($('#resume'), {x:100});
	TweenMax.to($('#resume'), dur, {x:0});

	TweenMax.set($('#mean_01'), {x:150});
	TweenMax.to($('#mean_01'), 0.5, {x:0});

	TweenMax.set($('#mean_02'), {x:175});
	TweenMax.to($('#mean_02'), dur, {x:0});

	TweenMax.set($('#mean_03'), {x:200});
	TweenMax.to($('#mean_03'), 1.5, {x:0});

	TweenMax.set($('#data:before'), {y:100});
	TweenMax.to($('#data:before'), dur, {y:0});

	$('.intro').hide().stop(true)

    $('#logo').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('#resume').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('.gnb').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

    $('.mean').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

    $('#data').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

    $('#location').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

}, 3500)



var scrollShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#scroll'), {y:-50});
	TweenMax.to($('#scroll'), dur, {y:0});

    $('#scroll').show().stop(true).delay(100)
    .animate({'opacity':1}, 1000, scrollMov)

}, 4500, 'easeInOutCubic')



function scrollMov(){

	TweenMax.to($('#scroll'), 1, {
		bottom:15,
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut, y:-15,
 		yoyoEase:true
 	})

}



introOpenAni ();





// Controller

$('#scroll').on('click', clickScroll)
$('#data').on('click', clickScroll)

function clickScroll(){

	//console.log($('#scroll b').css("left"));
	//goControl()

	if($('#scroll b').css("left") === "0px"){
		console.log("Go Control");
		goControl()
	} else {
		console.log("Go Main");
		goMain()
	}

}



$(window).on("mousewheel",function(e){

    if(e.originalEvent.wheelDelta >= 0) {
        //console.log("Scroll Up");
        goMain()

    } else {
        //console.log("Scroll Down");
        goControl()
    }

});



function goControl(){
	//console.log("Go Contorller");

	var dur = 1; 

	TweenMax.set($('#title_d'), {y:0});
	TweenMax.to($('#title_d'), dur, {y:-150});

	TweenMax.set($('#title_h'), {y:0});
	TweenMax.to($('#title_h'), dur, {y:-100});

	TweenMax.set($('#mean_01'), {x:0});
	TweenMax.to($('#mean_01'), dur, {x:150});

	TweenMax.set($('#mean_02'), {x:0});
	TweenMax.to($('#mean_02'), dur, {x:175});

	TweenMax.set($('#mean_03'), {x:0});
	TweenMax.to($('#mean_03'), dur, {x:200});

	$('.main_title').stop(true).delay(0)
    .animate({'opacity':0}, 500)

    $('.mean').show().stop(true).delay(100)
    .animate({'opacity':0}, 1000)

    $('#location').show().stop(true).delay(100)
    .animate({'opacity':0}, 2000)

    $('#scroll b').stop(true).delay(1000)
    .animate({'left':70}, 1500, 'easeInOutCubic')

    $('#scroll span').stop(true).delay(1000)
    .animate({'left':0}, 1500, 'easeInOutCubic')

    $('.title_wrap').hide().stop(true).delay(2000)

	$('.control_title').show().stop(true).delay(2000)
    .animate({'opacity':1}, 2000)

    $('.weather').show().stop(true).delay(2000)
    .animate({'opacity':1}, 2000)

    $('.time').show().stop(true).delay(2000)
    .animate({'opacity':1}, 2000)
} 



function goMain(){

	$('#scroll b').stop(true).delay(1000)
    .animate({'left':0}, 1500, 'easeInOutCubic')

    $('#scroll span').stop(true).delay(1000)
    .animate({'left':70}, 1500, 'easeInOutCubic')

    $('.weather').show().stop(true).delay(0)
    .animate({'opacity':0}, 1000)
    
    $('.time').show().stop(true).delay(0)
    .animate({'opacity':0}, 1000)

	$('.control_title').show().stop(true).delay(0)
    .animate({'opacity':0}, 1000, mainShow)

}



function mainShow(){

	var dur = 1; 

	TweenMax.set($('#title_d'), {y:50});
	TweenMax.to($('#title_d'), dur, {y:0});

	TweenMax.set($('#title_h'), {y:100});
	TweenMax.to($('#title_h'), dur, {y:0});

	TweenMax.set($('#mean_01'), {x:150});
	TweenMax.to($('#mean_01'), 0.5, {x:0});

	TweenMax.set($('#mean_02'), {x:175});
	TweenMax.to($('#mean_02'), dur, {x:0});

	TweenMax.set($('#mean_03'), {x:200});
	TweenMax.to($('#mean_03'), 1.5, {x:0});

	$('.control_title').hide().stop(true)

	$('.title_wrap').show().stop(true).delay(0)

    $('.main_title').show().stop(true).delay(0)
    .animate({'opacity':1}, 2000)

    $('.mean').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

    $('#location').show().stop(true).delay(300)
    .animate({'opacity':1}, 2000)

}