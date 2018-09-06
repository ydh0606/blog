$(function(){

		var winHeight = $(window).height();  


		// ux bar

		$("#ux_box ul li").click(function(){
			var chkIndex = $(this).index();  //클릭한 요소의 순서값; 
			$("html,body").animate({scrollTop:winHeight * chkIndex});
			return false;
		});


		$("#ux_box ul li").click(function(){
			$("#ux_box ul li a").removeClass("view");			
			$("a",this).addClass("view");

			var chkIndex = $(this).index();  //클릭한 요소의 순서값; 
			$("html,body").animate({scrollTop:winHeight * chkIndex});
			return false;			
		});


		$(window).scroll(function(){

		var scrPos = $(window).scrollTop();

		if(scrPos > winHeight * 4) {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(5).addClass("view");             
			}
			 else if(scrPos >= winHeight * 4) {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(4).addClass("view");             
			}
			 else if(scrPos >= winHeight * 3) {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(3).addClass("view");             
			}
			 else if(scrPos >= winHeight * 2) {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(2).addClass("view");             
			}
			 else if(scrPos >= winHeight ) {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(1).addClass("view");             
			}
			 else {
				$("#ux_box ul li a").removeClass("view");              
				$("a", "#ux_box ul li").eq(0).addClass("view");               
			}

		});





		var win_h = $(".wrap").height();
		var win_w = $(".wrap").width();

		$(".wrap").each(function(index){
			$(this).attr("data-index", win_h * index);
		});


		$(".wrap").on("mousewheel",function(e){
			pageHeight = parseInt($(this).attr("data-index"));

			if(e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({scrollTop:pageHeight - win_h});
			return false;
			} else {
				$("html,body").stop().animate({scrollTop:pageHeight + win_h});
			return false;

			}
		});





		// Family site

		$(".f_site").mouseenter(function() {
			$("#f_site01").css({display:"none"})
			$("#f_site02").css({display:"block"})
		}).mouseleave(function() {
			$("#f_site01").css({display:"block"})
			$("#f_site02").css({display:"none"})
		})





		// Page 01

		$("#menu_box ul li").click(function(){
			var chkIndexMenu = $(this).index() + 1;  
			$("html,body").animate({scrollTop:winHeight * chkIndexMenu});
			return false;
		});




		// Page 02

		var arrScroll = setInterval(function() {  

			$('#s_arr').animate({ marginBottom : -30 } , 1000 );
			$('#s_arr').animate({ marginBottom : 0 } , 550 );

		});

		$('#scroll_box').mouseenter(function() {
			clearInterval(arrScroll);
		}).mouseleave(function() {
			arrScroll = setInterval(function() {  
			$('#s_arr').animate({ marginBottom : -30 } , 1000 );
			$('#s_arr').animate({ marginBottom : 0 } , 550 );
			});
		});
			



		// Page 03

		var sto_w = $("#s_img_slide li").width()
		var sto_h = $("#s_img_slide li").height()
		var sto_c = $("#s_img_slide li").size()
	
		var s = 1
		
		var s_ani_time = 500
		var s_rol_time = 2000
				
	
		$("#next").click(function() {
			s++
			if(s==5) {
				s=2
				$("#s_img_slide").css({left:-sto_w});
			}
			$("#s_img_slide").stop().animate({left:-sto_w*s},s_ani_time)
			$("#s_img_ux li").removeClass("view03")

			if(s==4) {
				$("#s_img_ux li").eq(0).addClass("view03")
			}
			$("#s_img_ux li").eq(s-1).addClass("view03")
		})
		

		$("#s_img_ux li").each(function(index) {
			$(this).attr('data-n',index+1)
		})



		$("#s_img_ux li").click(function() {
			s = parseInt($(this).attr('data-n'))
			$("#s_img_slide").stop().animate({left:-sto_w*s},s_ani_time)
			
			$("#s_img_ux li").removeClass("view03")
			$(this).addClass("view03")
		})
		
		
		
		var s_rolling = setInterval(function() {
				$("#next").click()
			},s_rol_time)
		
		$("#s_img_ux").mouseover(function() {
			clearInterval(s_rolling)	
		}).mouseout(function() {
			s_rolling = setInterval(function() {
				$("#next").click()	
			},s_rol_time)

		})



		// Page 04

		var img_w = $("#n_slide_box li").width()
		var img_h = $("#n_slide_box li").height()
		var img_c = $("#n_slide_box li").size()
		var imgWrap_w = img_w * img_c
	
		var n = 1
		
		var n_ani_time = 1000
		var n_rol_time = 5000
				
	
		$("#n_arr02").click(function() {
			n++
			if(n==6) {
				n=2
				$("#n_slide_box").css({left:-img_w})
			}
			$("#n_slide_box").stop().animate({left:-img_w*n},n_ani_time)
			$("#n_slide_ux li").removeClass("view03")

			if(n==5) {
				$("#n_slide_ux li").eq(0).addClass("view03")
			}
			$("#n_slide_ux li").eq(n-1).addClass("view03")
		})
		
		
		
		$("#n_arr01").click(function() {
			n--
			if(n==-1) {
				n=3
				$("#n_slide_box").css({left:-img_w*(img_c-2)})
			}	
			$("#n_slide_box").stop().animate({left:-img_w*n},n_ani_time)
			$("#n_slide_ux li").removeClass("view03")

			if(n==0) {
				$("#n_slide_ux li").eq(3).addClass("view03")
			}
			$("#n_slide_ux li").eq(n-1).addClass("view03")
		})



		$("#n_slide_ux li").each(function(index) {
			$(this).attr('data-n',index+1)
		})



		$("#n_slide_ux li").click(function() {
			n = parseInt($(this).attr('data-n'))
			$("#n_slide_box").stop().animate({left:-img_w*n},n_ani_time)
			
			$("#n_slide_ux li").removeClass("view03")
			$(this).addClass("view03")
		})
		
		
		
		var n_rolling = setInterval(function() {
		
				$("#n_arr02").click()	

			},n_rol_time)
		
		$(".n_arr").mouseover(function() {
			clearInterval(n_rolling)	
		}).mouseout(function() {
			n_rolling = setInterval(function() {
				$("#n_arr02").click()	
			},n_rol_time)

		})



		// Page 05

		$("#cafe_bg span#go_cafe").hover(function(){
			$("#cafe_bg img").animate({opacity:"0.25"},100);
			$("#c_bg").animate({opacity:"0"},100);
		},function(){
			$("#cafe_bg img").animate({opacity:"0.85"},500);
			$("#c_bg").animate({opacity:"0.7"},300);
		});




		// Page 06

		$("#love_box ul#l_img_box li").hover(function(){
			$("a",this).animate({opacity:"1"},0);
		},function(){
			$("a",this).animate({opacity:"0.5"},500);
		});





		$('#l_img_box li a').click(function() {
			$("#popup").css({display:"block"});
			$('#pop_box p img').attr('src',$(this).attr('href'));
			return false;
		});


		$('#pop_box p img').click(function() {
			$("#popup").css({display:"none"});
		});






		
	});