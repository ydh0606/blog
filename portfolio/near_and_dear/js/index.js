$(function(){

		// Menu Bar

		var winHeight = $(window).height();  

		$("nav ul#menu li").click(function(){
			$("nav ul#menu li a").removeClass("view");			
			$("a",this).addClass("view");

			var chkIndex = $(this).index(); 

			if (chkIndex == 4) {
				$("html,body").animate({scrollTop:winHeight * 3 + 3350});
			} else {
				$("html,body").animate({scrollTop:winHeight * chkIndex});
			};

			return false;			
		});



		$(window).scroll(function(){

			var scrPos = $(window).scrollTop();

			if(scrPos >= winHeight * 3 + 3350 - 5) {
				$("nav ul#menu li a").removeClass("view");              
				$("a", "nav ul#menu li").eq(4).addClass("view");   
				console.log(scrPos);           
			}
			 else if(scrPos >= winHeight * 3 - 5) {
				$("nav ul#menu li a").removeClass("view");              
				$("a", "nav ul#menu li").eq(3).addClass("view");
				console.log(scrPos);              
			}
			 else if(scrPos >= winHeight * 2 - 5) {
				$("nav ul#menu li a").removeClass("view");              
				$("a", "nav ul#menu li").eq(2).addClass("view"); 
				console.log(scrPos);             
			}
			 else if(scrPos >= winHeight  - 5) {
				$("nav ul#menu li a").removeClass("view");              
				$("a", "nav ul#menu li").eq(1).addClass("view");  
				console.log(scrPos);            
			}
			 else {
				$("nav ul#menu li a").removeClass("view");              
				$("a", "nav ul#menu li").eq(0).addClass("view"); 
				console.log(scrPos);               
			}

		});



		var win_h = $(".layout").height();
		var win_w = $(".layout").width();

		$(".layout").each(function(index){
			$(this).attr("data-index", win_h * index);
			$("#tell_wrap").attr("data-index", win_h * 3 + 3350);
		});


		$(".scroll").on("mousewheel",function(e){
			pageHeight = parseInt($(this).attr("data-index"));

			if(e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({scrollTop:pageHeight - win_h});
				return false;
			} else {
				$("html,body").stop().animate({scrollTop:pageHeight + win_h});
				return false;
			}

		});

		$("#scroll_01").on("mousewheel",function(e){

			var winHeight = $(window).height();  

			if(e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({scrollTop:winHeight * 2});
				return false;
			}

		});

		$("#scroll_02").on("mousewheel",function(e){

			var winHeight = $(window).height();  

			if(e.originalEvent.wheelDelta < 0) {
				$("html,body").stop().animate({scrollTop:winHeight * 3 + 3350});
				return false;
			}

		});





		// Download

		$("#down").mouseenter(function() {
			$(".down_l").css({display:"block"})
		}).mouseleave(function() {
			$(".down_l").css({display:"none"})
		})







		$('#pop_text_01').click(function() {
			$("#popup").css({display:"block"});
			$("#pop_01").css({display:"block"});
			$("#pop_02").css({display:"none"});
			return false;
		});

		$('#pop_text_02').click(function() {
			$("#popup").css({display:"block"});
			$("#pop_01").css({display:"none"});
			$("#pop_02").css({display:"block"});
			return false;
		});


		$('#popup_box, #popup').click(function() {
			$("#popup").css({display:"none"});
		});






		
	});