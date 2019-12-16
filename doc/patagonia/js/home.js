// ready
console.log("Home Script In!")
console.log (window.innerWidth, window.innerHeight);

$('.big_box').hide();
$('.main_item').hide();
$('.wrap').hide();





// Home Load 

window.onload = function () {
	console.log("Load Complete");
	setTimeout('loading()', 1500);
}

function loading(){

	$('.load').animate({'opacity':0}, 500);
	$('.big_box').show().delay(350).animate({'opacity':1}, 500);

	mainOpenAni();
}





// Home Load Animation

function mainOpenAni(){

	var dur = 0.5; 

	TweenMax.set($('.drop'), {css:{y:-35}});
	TweenMax.set($('.title_wrap'), {css:{y:-100}});

	TweenMax.to($('#logo'), dur, {css:{y:0}, delay:0.5});

	TweenMax.to($('.lang_en'), dur, {css:{y:0}, delay:0.5});
	TweenMax.to($('.lang_ko'), dur, {css:{y:0}, delay:0.6});
	TweenMax.to($('#menu'), dur, {css:{y:0}, delay:0.7});

	TweenMax.to($('#sns li').eq(0), dur, {css:{y:0}, delay:0.5});
	TweenMax.to($('#sns li').eq(1), dur, {css:{y:0}, delay:0.6});
	TweenMax.to($('#sns li').eq(2), dur, {css:{y:0}, delay:0.7});

	TweenMax.to($('#site a'), dur, {css:{y:0}, delay:0.8});
	TweenMax.to($('#load'), dur, {css:{y:0}, delay:0.8});

	TweenMax.to($('.title_wrap'), 4, {css:{y:0}, delay:0.6, ease:Elastic.easeOut.config(1, 0.5)});

	$('.main_item').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000);

    $('.wrap').show().stop(true).delay(700)
    .animate({'opacity':1}, 1500);

    selectTitle();

} 





// Main Background Image

var _cuId = 1;
var _exId = _cuId;

function onMouseTitle(id){

	//console.log(id);

	_cuId = id;
	//console.log(_cuId, _exId);

	$('.bg ul li').eq(_exId-1).delay(1000).removeClass('fade_in');
	$('.bg ul li').eq(_cuId-1).delay(1000).addClass('fade_in');

	$('.bg').css('background', 'url(img/main_bg_blur_0' + _exId + '.jpg) no-repeat center center');
	$('.bg').css('backgroundSize', 'cover');

	_exId = _cuId;

	$('#load span img').attr('src', 'img/ani_load.gif');
	
}



var setRolling, rol_02, rol_03, rol_01, rolling;

function bgRolling(){
	rol_02 = setTimeout('onMouseTitle(2)', 0);
	rol_03 = setTimeout('onMouseTitle(3)', 6500);
	rol_01 = setTimeout('onMouseTitle(1)', 13000);
	rolling = setTimeout('bgRolling()', 19500);
};

setRolling = setTimeout('bgRolling()', 9000);



function selectTitle(){
	var $titleA = $('.title h1 span a');

	$titleA.css('cursor', 'pointer');



    $('.title_01').on('mouseover', function(){
    	onMouseTitle(1);
    	loadSet();
    });
    $('.title_02').on('mouseover', function(){
    	onMouseTitle(2);
    	loadSet();
    });
    $('.title_03').on('mouseover', function(){
    	onMouseTitle(3);
    	loadSet();
    });

    $('.title h1 span').on('mouseout', function(){
    	onMouseTitle(1);

		function bgRolling(){
			rol_02 = setTimeout('onMouseTitle(2)', 0);
			rol_03 = setTimeout('onMouseTitle(3)', 6500);
			rol_01 = setTimeout('onMouseTitle(1)', 13000);
			rolling = setTimeout('bgRolling()', 19500);
		};

		setRolling = setTimeout('bgRolling()', 6500);
    })
}

function loadSet(){
	$('#load span img').attr('src', 'img/ani_load_set.gif');

	clearTimeout(setRolling);
	clearTimeout(rol_02);
	clearTimeout(rol_03);
	clearTimeout(rol_01);
	clearTimeout(rolling);
}





// Main Title Underline

var $underTitle = $('.title span a');

$underTitle.on('mouseover', function(){

 	//console.log(this)

 	var $underThis = $(this).parent();
 	var underW = $underThis.width();

 	$('b', $underThis).stop(true).delay(100)
    .animate({'width':underW}, 500, 'easeOutCubic')

});

$underTitle.on('mouseout', function(){

	var $underThis = $(this).parent();

 	$('b', $underThis).stop(true).delay(100)
    .animate({'width':0}, 500, 'easeOutCubic')

});





// Language

$('.title_ko').hide();

$('ul.lang li').on('click', function(e){
	e.preventDefault();

	//console.log("Language CLICK");
	$('ul.lang li a').removeClass('select');
	$('a', this).addClass('select');

	//console.log(this);
});

$('ul.m_lang li').on('click', function(e){
	e.preventDefault();

	//console.log("Language CLICK");
	$('ul.m_lang li a').removeClass('select');
	$('a', this).addClass('select');

	//console.log(this);
});



$('.lang_en').on('click', function(e){
	e.preventDefault();

	console.log("English Ver");

	//var $select = $(this).has('.select');

	titleOut();
	enShow();

});

$('.lang_ko').on('click', function(e){
	e.preventDefault();

	console.log("Korean Ver");

	titleOut();
	koShow();

});



function titleOut(){

	var dur = 1; 

    $('.title').show().stop(true).delay(100)
    .animate({'opacity':0}, 200)

}

function enShow(){

	var dur = 3.5; 

	TweenMax.set($('.title_en'), {y:-50});
	TweenMax.to($('.title_en'), dur, {css:{y:0}, ease:Elastic.easeOut.config(1, 0.5)});

	$('.title_ko').hide();

    $('.title_en').show().stop(true).delay(200)
    .animate({'opacity':1}, 1500)

}

function koShow(){

	var dur = 3.5; 

	TweenMax.set($('.title_ko'), {y:-50});
	TweenMax.to($('.title_ko'), dur, {css:{y:0}, ease:Elastic.easeOut.config(1, 0.5)});

	$('.title_en').hide();

    $('.title_ko').show().stop(true).delay(200)
    .animate({'opacity':1}, 1500)

}