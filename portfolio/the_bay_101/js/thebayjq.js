// JavaScript Document





$(function() {
	
	// 네비게이션 
		var line_h = 200
		var bg_h = 250
		var pointer_h = 280
		
		var en_time = 300
		var lev_time = 500



		$('#nav_bg').css({'opacity':'0.95'})


		$('#gnb').mouseenter(function() {
			$('.gnb_sub').stop().animate({height:line_h},en_time)
			$('#nav_pointer').stop().animate({height:pointer_h},en_time)
			$('#nav_bg').stop().animate({height:bg_h},en_time)
		}).mouseleave(function() {
			$('.gnb_sub').stop().animate({height:0},en_time)
			$('#nav_pointer').stop().animate({height:0},lev_time)
			$('#nav_bg').stop().animate({height:0},lev_time)
		})
		
		
		
		$('#menu01, #nav_pointer01').mouseenter(function() {
			$('#menu01 a').css({'backgroundPosition':'0 -130px'})
		}).mouseleave(function() {
			$('#menu01 a').css({'backgroundPosition':'0 -10px'})
		})
		
		
		$('#menu02, #nav_pointer02').mouseenter(function() {
			$('#menu02 a').css({'backgroundPosition':'0 -160px'})
		}).mouseleave(function() {
			$('#menu02 a').css({'backgroundPosition':'0 -40px'})
		})
		
		
		$('#menu03, #nav_pointer03').mouseenter(function() {
			$('#menu03 a').css({'backgroundPosition':'0 -190px'})
		}).mouseleave(function() {
			$('#menu03 a').css({'backgroundPosition':'0 -70px'})
		})
		
		
		$('#menu04, #nav_pointer04').mouseenter(function() {
			$('#menu04 a').css({'backgroundPosition':'0 -220px'})
		}).mouseleave(function() {
			$('#menu04 a').css({'backgroundPosition':'0 -100px'})
		})





	// 메인 슬라이더 
		var s_ani_time = 1000
		var s_rol_time = 5000
		
		var s = 1
		
		$('#s_icon01 img').attr('src','img/icon01.png')
		$('#s_btn').css({display:'none'})
		
		
		
		$('#s_icon01 img').click(function() {
			$('#slider01').stop().fadeIn(s_ani_time)
			$('#s_icon li img').attr('src','img/icon02.png')
			$(this).attr('src','img/icon01.png')
		})
		$('#s_icon02 img').click(function() {
			$('#slider01').stop().fadeOut(s_ani_time)
			$('#s_icon li img').attr('src','img/icon02.png')
			$(this).attr('src','img/icon01.png')
		})



		$('#s_btn').click(function() {
			s++
			
			if(s==2){
				$('#slider01').stop().fadeOut(s_ani_time)
			}	
			if(s==3){
				s=1
				$('#slider01').stop().fadeIn(s_ani_time)
			}	
			
			$('#s_icon li img').attr('src','img/icon02.png')
			$('#s_icon0'+s+' img').attr('src','img/icon01.png')
		}) 
		
		
		
		var rolling= setInterval(function(){
				$('#s_btn').click()		
			},s_rol_time)
		$('#s_icon li').mouseenter(function(){
			clearInterval(rolling)
		}).mouseleave(function(){			
			rolling= setInterval(function(){
				$('#s_btn').click()		
			},s_rol_time)		
		})




	
	// 뉴스 슬라이드
		var img_w = $('#main_news li').width()
		var img_h = $('#main_news li').height()
		var img_c = $('#main_news li').size()
		var imgWrap_w = img_w * img_c
	
		var n = 2
		
		var n_ani_time = 1000
		var n_rol_time = 2000
				
		$('#main_news').css({width:imgWrap_w})
		
		
		
		$('#n_next').click(function() {
			n++
			if(n==img_c-2) {
				n=2
				$('#main_news').css({left:-img_w})
			}
			$('#main_news').stop().animate({left:-img_w*n},n_ani_time)
		})
		
		
		
		$('#n_prev').click(function() {
			n--
			if(n==-1) {
				n=2
				$('#main_news').css({left:-img_w*3})
			}	
			$('#main_news').stop().animate({left:-img_w*n},n_ani_time)
		})
		
		
		
		var n_rolling = setInterval(function() {
				$('#n_next').click()	
			},n_rol_time)
		
		$('#news').mouseover(function() {
			clearInterval(n_rolling)	
		}).mouseout(function() {
			n_rolling = setInterval(function() {
				$('#n_next').click()	
			},n_rol_time)
		})
	
});
	
	
	
	
	