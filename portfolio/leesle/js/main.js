$(function(){


 
	

		$('#pic_box .pic').mouseenter(function() {
			pic_name = $('img', this).attr('alt')

			$('img', this).attr( 'src' , 'img/'+pic_name+'.gif')

		}).mouseleave(function() {

			$('img', this).attr( 'src' , 'img/'+pic_name+'.png')

		});






		var winHeight = $(window).height();  
		var win_h = $("#main_top").height();

		

		$("#main_top").on("mousewheel", function(e) {

			if (e.originalEvent.wheelDelta < 0) {					//내릴때
				$("html,body").stop().animate({scrollTop : win_h},1000,'swing');
			} else if (e.originalEvent.wheelDelta > 0) { 			//올릴때
				$("html,body").stop().animate({scrollTop : 0});
			}

			return false;
			
		});


		$("html,body").on("mousewheel", function(e) {

			if (e.originalEvent.wheelDelta < 0) {					//내릴때
				$("html,body").scrolling()
			} else if (e.originalEvent.wheelDelta > 0) { 			//올릴때
				$("html,body").scrolling()
			}

			return false;
			
		});






		var sub_h = $("#sub_back").height();

		

		$("#sub_back").on("mousewheel", function(e) {

			if (e.originalEvent.wheelDelta < 0) {					//내릴때
				$("html,body").stop().animate({scrollTop : sub_h},1000,'swing');
			} else if (e.originalEvent.wheelDelta > 0) { 			//올릴때
				$("html,body").stop().animate({scrollTop : 0});
			}

			return false;
			
		});



});