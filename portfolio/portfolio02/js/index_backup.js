
$(function(){



// MAIN 01 HOME _ 메인 첫번째 홈

	// var chgImg = ["home_011","home_022","home_033"];
	// $("#home_contents > h2").click(function(){
	// 	var chkIndex = $(this).index() - 1;
	// 	$("#home_img > img").attr("src","img/"+chgImg[chkIndex]+".jpg");
	// 	return false;
	// });

	var chgImg = ["home_011","home_022","home_033"];

	$("#home_contents #home_link > h2").hover(function(){

		var chkIndex = $(this).index();

		$("#home_img img#home_img01").attr("src","img/"+chgImg[chkIndex]+".jpg");
		$("#home_img img#home_img02").attr("src","img/"+chgImg[chkIndex]+".png");

		$('span.link_line01' , this).stop().animate({ width : 25 } , 700 );
		$('span.link_line02' , this).stop().animate({ width : 25 } , 700 );

	},function() {

		$("#home_img img#home_img01").attr("src","img/home_00.jpg");
		$("#home_img img#home_img02").attr("src","img/home_00.png");

		$('span.link_line01, .link_line02').stop().animate({ width : 0 } , 700 )

	});





	var homeScroll = setInterval(function() {  

		$('#scroll_box').animate({ marginBottom : -10 } , 1000 );
		$('#scroll_box').animate({ marginBottom : 0 } , 1000 );

	});

	$('#scroll_box').mouseenter(function() {
		clearInterval(homeScroll);
	}).mouseleave(function() {
		homeScroll = setInterval(function() {  
		$('#scroll_box').animate({ marginBottom : -10 } , 1000 );
		$('#scroll_box').animate({ marginBottom : 0 } , 1000 );
		});
	});





// MAIN 02 - 05  _ 메인 ani

	var dol = 0

	var timer = setInterval(function(){
		dol++

		if(dol == 5) {
			dol = 0
		};
		$('.main_dol01 > img').css({ marginLeft : -650 * dol });
		$('.main_dol02 > img').css({ marginLeft : -700 * dol });

	} , 200 );





// MAIN 02 - 05  _ 메인 ux

	var winHeight = $(window).height();



	// $('#scroll_box').click(function(){

	// 	$('#home_contents .home_area h2').fadeOut(1500)
	// 	$('#home_contents h1#home_logo').delay(500).fadeOut(2500)
	// 	$('#home #home_back, .home_area').delay(1000).fadeOut(1000)
	// 	$('#home').stop().animate({ marginTop : - winHeight } , 2000 , 'easeInOutCubic');
	// 	return false; 
		
	// });	



	$('#ux_bar').css({ backgroundColor : 'rgba(51,51,51,0.65)'});





	$(".ux_icon, #gnb02 .uxbar_wrap").mouseenter(function() {

		$("#ux_bar").stop().animate({ width : 300 });
		$('#gnb01').css({ display : 'none' });

	});

	$("#gnb02 .uxbar_wrap").mouseleave(function() {

		$("#ux_bar").stop().animate({ width : 0 });
		$('#gnb01').css({ display : 'block' });

	});






	$('#main_contents .gnb ul.ux_menu li').click(function() {

		var gnbIndex = $(this).index()

		$('html,body').stop().animate({ scrollTop:winHeight * gnbIndex } , 1000 , 'easeInOutCubic');
		return false; 

	});





// MAIN FOOTER _ 푸터

	// $('#footer').css({ backgroundColor : 'rgba(51,51,51,0.65)'});



	$('ul#footer_ux li').click(function() {

		var footIndex = $(this).index()

		$('html,body').stop().animate({ scrollTop:winHeight * footIndex } , 1000 , 'easeInOutCubic');
		return false; 

	});





});