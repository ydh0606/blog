// ready
console.log (window.innerWidth, window.innerHeight);





// onLoad

window.onbeforeunload = function() {

    console.log("Reload")
    scrollTo(0,0);

};





// IE Browser Check

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

	//alert("Yes, IE!");
	//$('.work_img').attr('class', 'work_img float-up');

	$('.text_box h5').css({
        'color':'#60516f',
        'background-image':'inherit',
        '-webkit-background-clip':'inherit',
        '-webkit-text-fill-color':'inherit'
    });

    $('.text_box h3').css({
        'color':'#60516f',
        'background-image':'inherit',
        '-webkit-background-clip':'inherit',
        '-webkit-text-fill-color':'inherit'
    });

    $('.img_list span').css({
        'color':'#60516f',
        'background-image':'inherit',
        '-webkit-background-clip':'inherit',
        '-webkit-text-fill-color':'inherit'
    });

}else {
	//alert("No, IE!");
};





// main resize
titleAuto();

function titleAuto() {

	// One

	var img_h = ($('.title_box').width() / 2.5) * 0.9;

	$('.title_box').css({
		"height" : img_h,
		"marginTop" : - (img_h / 2) + 60
	});

	$('#mp_0').css({
		"width" : $('.title_box').width() / 2.5
	})

	$('h1#title span').css({
		"fontSize" : $('.title_box').width() / 15
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





// Nice Scroll

$(document).ready(function (){

	nice();
	
});

$(window).resize(function (){

	nice();
	
});

var nice = function(){
	$('html').niceScroll({
		zindex:1000000,
		scrollspeed:100,
		mousescrollstep:20,
		cursorcolor:"#60516f",
		cursoropacitymin:0,
		cursoropacitymax:1,
		cursorwidth:"12px",
		cursorminheight:100,
		cursorborder:"0px solid #fff",
		cursorborderradius:"0",
		background:"",
		hidecursordelay:1000
	});
}