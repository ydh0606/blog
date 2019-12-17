
// Ready
//console.log ("Resize In!");





// Main Resize

function titleSize() {

	//main

	$('.title_en h1').css({
		"fontSize" : $(window).width() / 21
	});

	$('.title_en span a').css({
		"fontSize" : $(window).width() / 21
	});

	$('.title_en').css({
		"marginTop" : - ($('.title_en').height() / 2)
	});



	$('.title_ko h1').css({
		"fontSize" : $(window).width() / 23
	});

	$('.title_ko span a').css({
		"fontSize" : $(window).width() / 23
	});

	$('.title_ko').css({
		"marginTop" : - ($('.title_ko').height() / 2) + 25
	});


	// sub
	
	$('#title h1').css({
		"fontSize" : $(window).width() / 15
	});

	$('#title h2').css({
		"fontSize" : $(window).width() / 30
	});

};

function menuSize(){

	$('.menu_box').css({
		"width" : $('.white_wrap').width() / 1.5,
		"height" : $('.white_wrap').height() / 3,
		"marginTop" : - ($('.menu_box').height() / 2)
		//"marginLeft" : - ($('.menu_box').width() / 2)
	});

}




$(window).resize(function() {
	titleSize();
	menuSize();
}).trigger('resize');

titleSize();
menuSize();