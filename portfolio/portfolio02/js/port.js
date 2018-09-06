$(function(){



	$('#port_list').masonry({
	  itemSelector: '.port_item',
	  columnWidth:15
	});

	$('#p_all').click(function(){
		$('.port_item').fadeIn();
		$('#port_list').masonry();

		$('ul#port_ux li a').css({ color : '#777777' });
		$('a', this).css({ color : '#ff5b51' });

		return false;
	});

	$('#p_web').click(function(){
		$('.port_item').hide();
		$('.web').fadeIn();
		$('#port_list').masonry();

		$('ul#port_ux li a').css({ color : '#777777' });
		$('a', this).css({ color : '#ff5b51' });

		return false;
	});

	$('#p_art').click(function(){
		$('.port_item').hide();
		$('.artwork').fadeIn();
		$('#port_list').masonry();

		$('ul#port_ux li a').css({ color : '#777777' });
		$('a', this).css({ color : '#ff5b51' });

		return false;
	});





	$('ul#port_list li').mouseenter(function() {
		pHover = $('img', this).attr('alt')

		$('img', this).attr( 'src' , 'img/'+pHover+'01'+'.jpg' )
	}).mouseleave(function() {
		$('img', this).attr( 'src' , 'img/'+pHover+'.jpg' )
	});

	



 //  SUB PORTFOLIO FOOTER 

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