// ready
console.log (window.innerWidth, window.innerHeight);






// main resize
titleAuto();

function titleAuto() {
	$('#mp_0').css({
		"width" : $('.title_box').width() / 2.5
	})



	var img_h = ($('.title_box').width() / 2.5) * 0.89;

	$('.title_box').css({
		"height" : img_h,
		"marginTop" : - (img_h / 2) + 75
	});

	$('.title_box h1 span').css({
		"fontSize" : $('.title_box').width() / 14
	});

	$('.bg_text span').css({
		"fontSize" : $('.title_box').width() / 6
	});
}

$(window).resize(function() {
	titleAuto();
})
 




// menu fixed
var winHeight = $(window).height();

$(window).scroll(function() {

	var scrollTop = $(window).scrollTop();
	if (scrollTop > 100) {
	  $('header').addClass('header_ani');
	  $('.header_wrap').addClass('line_ani');
	} else {
	  $('header').removeClass('header_ani');
	  $('.header_wrap').removeClass('line_ani');
	}

});





// menu move
var $menu = $('.gnb ul');
var $menuList = $menu.children();

$menuList.mouseover(function() {
	var menuIndex = $menuList.index(this);
	console.log(menuIndex);

	menuMove(menuIndex);
});

$menu.mouseout(function() {
	var selectIndex = $menu.children('#select').index();
	console.log("select", selectIndex);

	menuMove(selectIndex);
});

function menuMove(i) {

	$('#menu_line').stop().animate({
		'left': 125 * i
	}, 150)

};




$('li#dh a').mouseover(showBtn);
$('li#je a').mouseover(showBtn);
$('li#sj a').mouseover(showBtn);

$('li#dh a').mouseout(hideBtn);
$('li#je a').mouseout(hideBtn);
$('li#sj a').mouseout(hideBtn);



var btn_dur = 500;

function showBtn(){

	$('.btn', this).stop().animate({
		//'left': '7%'
		'top': '85%',
		'opacity': '1'
	}, btn_dur)
	
}

function hideBtn(){

	$('.btn', this).stop().animate({
		//'left': '100%'
		'top': '100%',
		'opacity': '0'
	}, btn_dur)

}