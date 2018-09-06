
$(function(){
	var winHeight = $(window).height();
	// var link = location.href;
	// var param = null;
	// var params = new Object;
	// var winHeight = $(window).height();

	// param = link.split("?");
	// var imsi = param[1].split("=");
	// var pageChk = imsi[1];

	// if (pageChk != null) {
	// 	$("html,body").animate({scrollTop:winHeight},0);

	// 	switch(pageChk) {
	// 		case 1:
	// 		$(".back_img").stop().hide().eq(0).fadeIn();
	// 		wheelNum = 0;
	// 		break;

	// 		case 2:
	// 		$(".back_img").stop().hide().eq(1).fadeIn();
	// 		wheelNum = 1;
	// 		break;

	// 		case 3:
	// 		$(".back_img").stop().hide().eq(2).fadeIn();
	// 		wheelNum = 2;
	// 		break;		

	// 		case 4:
	// 		$(".back_img").stop().hide().eq(3).fadeIn();
	// 		wheelNum = 3;
	// 		break;					
	// 	}
	// 	return false;		
	// }


	$("#main_wrap #main_about").fadeIn();
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






	$('ul.ux_menu li').click(function() {
		var gnbIndex = $(this).index();
		switch(gnbIndex) {
			case 0:
			$('html,body').stop().animate({ scrollTop:winHeight * gnbIndex } , 1000 , 'easeInOutCubic');
			break;

			case 1:
			$(".back_img").stop().hide().eq(0).fadeIn();
			wheelNum = 0;
			break;

			case 2:
			$(".back_img").stop().hide().eq(1).fadeIn();
			wheelNum = 1;
			break;

			case 3:
			$(".back_img").stop().hide().eq(2).fadeIn();
			wheelNum = 2;
			break;		

			case 4:
			$(".back_img").stop().hide().eq(3).fadeIn();
			wheelNum = 3;
			break;					
		}
		return false;
		
	});





// MAIN FOOTER _ 푸터

	// $('#footer').css({ backgroundColor : 'rgba(51,51,51,0.65)'});



	$('ul#footer_ux li').click(function() {

		var footIndex = $(this).index()

		$('html,body').stop().animate({ scrollTop:winHeight * footIndex } , 1000 , 'easeInOutCubic');
		return false; 

	});

	$(".back_img").each(function(index){
		$(this).attr("data-h",winHeight*index);
	});

	var wheelNum = 0;

	// $(window).scroll(function(){
	// 	var scrPos = $(window).scrollTop();
	// 	if(scrPos >= winHeight) {
	// 		$("html,body").css({overflow:"hidden"});	
	// 	}
	// });
			
	$(".back_img").mousewheel(function(e){
		st = parseInt($(this).attr("data-h"));
		if(e.originalEvent.wheelDelta <= 0 && wheelNum < 3 ) {
			$(".back_img").eq(wheelNum).stop().fadeOut(function(){
				wheelNum++;
				$(".back_img").eq(wheelNum).stop().fadeIn();
				return false;	
			});

		} else if (e.originalEvent.wheelDelta > 0 && wheelNum > 0 ) {
			$(".back_img").eq(wheelNum).stop().fadeOut(function(){
				--wheelNum;	
				$(".back_img").eq(wheelNum).stop().fadeIn();
				return false;	
			});				
									
		}

	});


		// 	if(e.originalEvent.wheelDelta > 0 && wheelNum > 0) {
			    
		// 		wheelNum--;	
		// 		$(".back_img").eq(wheelNum).delay(500).fadeOut();
		// 		$(".back_img").eq(wheelNum - 1).delay(500).fadeIn();				
		// 		return false;
		// 	}
		// });

		// } else if (scrPos < winHeight) {
		// 	$("html,body").css({overflow:""});				

		// }	
 	$("#scroll_box").click(function(){
 		$("html, body").animate({scrollTop:winHeight});
 		return false; 
 	})

});