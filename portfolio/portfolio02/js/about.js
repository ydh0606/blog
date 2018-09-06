$(function(){



 // SUB ABOUT MAIN 

 	$("html,body").css({overflow:"hidden"});



	$('#aSub_wrap01 #black01').css({ 
		backgroundColor : 'rgba(51,51,51,0.65)'
	})



	$("#aSub_wrap01").on("mousewheel",function(e){
		if(e.originalEvent.wheelDelta <= 0) {
			$('#sub_img #sub_contents').fadeOut();
			$('#aSub_wrap01 #black01').fadeIn();
			$("#aSub_wrap01 #about_typo").delay(600).fadeIn(function(){
				 	$("html,body").css({overflow:""});
			});
		}
	});





	// SUB WORK CONTENTS 02 LOGO





 //  SUB ABOUT FOOTER 

	$('ul#f_nav li').hover(function() {

		chkIndex = $(this).index() + 1

		$('a > img', this).attr('src','img/footux0'+ chkIndex +'.gif');

	},function() {

		$('a > img', this).attr('src','img/footux00'+ chkIndex +'.gif');
	}); 



	$('#f_topBox p#f_top').click(function() {
		$('html,body').stop().animate({ scrollTop : 0 } , 1000 , 'easeInOutCubic');
		return false; 
	});

	// $("#footer ul#f_nav li").click(function(){
		
	// 	return false;
	// })

});