$(function(){



 // SUB WORK MAIN 

	$('html,body').css({ overflow : 'hidden' });



	$('#wSub_wrap01 #black01').css({ 
		backgroundColor : 'rgba(51,51,51,0.65)'
	});



	$('#wSub_wrap01').on('mousewheel',function(e){
		if(e.originalEvent.wheelDelta <= 0) {
			$('#sub_img #sub_contents').fadeOut(1000);
			$('#wSub_wrap01 #black01').fadeIn(1000);
			$('#wSub_wrap01 #work_typo').delay(700).fadeIn(function(){
				$('html,body').css({ overflow : '' });
			});
		}
	});





// SUB WORK CONTENTS 01 CONCEPT, STORYTELLING

	var n = 1

	var stIndex = $(this).index() + 1
	var stImg = '#slide0' + stIndex



	$('ul#st_slide li').hide()
	$('ul#st_slide li#slide01').show()

	$('ul#slide_btn li').click(function() {
		
		$('ul#slide_btn li img').attr('src','img/slide_icon01.png');
		$('img',this).attr('src','img/slide_icon02.png');

		$('ul#st_slide li').fadeOut(0);
		$(stImg).fadeIn(0);

		return false; 
	});



	var rolling = setInterval(function() {
		slide()
	} , 5000);

	$('ul#slide_btn li').mouseenter(function() {
		clearInterval(rolling);
	}).mouseleave(function() {
		rolling = setInterval(function() {
			slide()
		} , 5000);
	});



	function slide(){
		n++			
		
		if(n==5){				
			n=1
			$('ul#st_slide li').fadeOut(1000);
			$(stImg).fadeIn(1000);
		};	
		
		$('ul#st_slide li').fadeOut(1000);
		$('ul#st_slide li#slide0' + n).fadeIn(1000);
		
		$('ul#slide_btn li img').attr('src','img/slide_icon01.png');
		$('ul#slide_btn li#btn0' + n + ' img').attr('src','img/slide_icon02.png');
		
	};





// SUB WORK CONTENTS 02 LOGO





 //  SUB WORK FOOTER 

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



});