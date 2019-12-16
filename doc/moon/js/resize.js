// Ready
//console.log ("Resize In!");





// Resize

function titleSize() {

	//intro
	$('.intro_title').css({
		"fontSize" : $(window).height() / 8,
		"marginTop" : - ($('.intro_title').height() / 2),
		"marginLeft" : - ($('.intro_title').width() / 2)
	});


	//main
	$('.title_wrap h1').css({
		"marginTop" : - ($('.title_wrap h1').height() / 2),
		"marginLeft" : - ($('.title_wrap h1').width() / 2)
	});

	$('.title_wrap h1 a').css({
		"fontSize" : $(window).height() / 7
	});

	$('.mean ul li').css({
		"fontSize" : $(window).height() / 50
	});


	//controller
	$('.control_title h1').css({
		"fontSize" : $(window).height() / 7
	});

	$('.control_title span').css({
		"fontSize" : $(window).height() / 12
	});

	$('.control_title').css({
		"marginTop" : - ($('.control_title').height() / 2),
		"marginLeft" : - ($('.control_title').width() / 2)
	});

	$('.cloud').css({
		"width" : $(window).width()
	});



	//about
	$('.text_box h1').css({
		"fontSize" : $('.text_box').height() / 4
	});

	$('#color').css({
		"width" : $(window).height() / 2,
		"minWidth" : 300
	});

	$('.img_box').css({
		"marginLeft" : - ($('.img_box').width() / 2)
	});

	$('.img_box h1').css({
		"fontSize" : $('.text_box').height() / 6
	});

	$('#img').css({
		"marginLeft" : - ($('#img').width() / 2),
		"marginTop" : - ($('#img').height() / 2)
	});

	$('#img img').css({
		"marginTop" : - ($('#img img').height() / 2)
	});


	//work
	$('.work .title h1 span').css({
		"fontSize" : $('.left').height() / 4
	});

};



function moonSize() {

	var moonLineW = $(window).height() / 1.6;
	var moonW = ($(window).height() / 1.6) * 0.97;

	$('.moon_line').css({
		"width" : moonLineW,
		"height" : moonLineW,
		"marginTop" : - (moonLineW / 2) - 15,
		"marginLeft" : - (moonLineW / 2)
	});

	$('.moon').css({
		"width" : moonW,
		"height" : moonW,
		"marginTop" : - (moonW / 2) - 15,
		"marginLeft" : - (moonW / 2)
	});

	$('.moon .moon_list').css({
		"width" : moonW,
		"height" : moonW
	});

	$('.moon .moon_list li').css({
		"width" : moonW,
		"height" : moonW
	});

	$('.mean').css({
		"marginBottom" : moonLineW / 35 - 15,
		"marginLeft" : moonLineW / 2
	});

	titleSize();

};



function workSize(){

	var $titleH = $('.work .title h1');

	$titleH.css({
		"height" : $('.left').height() / 1.5
	});

	$('.work .title_show').css({
		"height" : $titleH.height()
	});

	$('.work .title').css({
		"top" : - $titleH.height()
	});
}





$(window).on('resize', function() {
	moonSize();
	titleSize();
	workSize();
}).trigger('resize');

titleSize();
moonSize();
workSize();