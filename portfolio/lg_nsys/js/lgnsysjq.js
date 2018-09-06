// JavaScript Document





$(function(){		

	// 네비게이션
		var line_h = 150
		var bg_h = 200
		var pointer_h = 225
		
		var en_time = 300
		var lev_time = 500
		
		var n = 77
		var n2 = 172

		$('#gnb').mouseenter(function() {
			$('.nav_sub').stop().animate({height:line_h},en_time)
			$('#nav_pointer').stop().animate({height:pointer_h},en_time)
			$('#nav_bg').stop().animate({height:bg_h},en_time)
		}).mouseleave(function() {
			$('.nav_sub').stop().animate({height:0},en_time)
			$('#nav_pointer').stop().animate({height:0},lev_time)
			$('#nav_bg').stop().animate({height:0},lev_time)
		})
		
		
		
		$('#menu01, #nav_pointer01').mouseenter(function() {
			$('#tri_pointer').css({
				'display':'block',
				'left':n
			})
			$('#menu01 a').css({'backgroundPosition':'52px -25px'})
		}).mouseleave(function() {
			$('#tri_pointer').css({
				'display':'none'
			})
			$('#menu01 a').css({'backgroundPosition':'52px 0'})
		})
		
		
		$('#menu02, #nav_pointer02').mouseenter(function() {
			$('#tri_pointer').css({
				'display':'block',
				'left':n+n2
			})
			$('#menu02 a').css({'backgroundPosition':'-117px -25px'})
		}).mouseleave(function() {
			$('#tri_pointer').css({
				'display':'none'
			})
			$('#menu02 a').css({'backgroundPosition':'-117px 0'})
		})
		
		
		$('#menu03, #nav_pointer03').mouseenter(function() {
			$('#tri_pointer').css({
				'display':'block',
				'left':n+n2*2
			})
			$('#menu03 a').css({'backgroundPosition':'-285px -25px'})
		}).mouseleave(function() {
			$('#tri_pointer').css({
				'display':'none'
			})
			$('#menu03 a').css({'backgroundPosition':'-285px 0'})
		})
		
		
		$('#menu04, #nav_pointer04').mouseenter(function() {
			$('#tri_pointer').css({
				'display':'block',
				'left':n+n2*3
			})
			$('#menu04 a').css({'backgroundPosition':'-457px -25px'})
		}).mouseleave(function() {
			$('#tri_pointer').css({
				'display':'none'
			})
			$('#menu04 a').css({'backgroundPosition':'-457px 0'})
		})
		
		
		
		
		
	// 메인 슬라이드
        var img_w =$('#s_img li').width()
		var img_h =$('#s_img li').height()
		var img_c =$('#s_img li').size()
		var imgWrap_w = img_w * img_c
		
		var ani_time = 500
		var interval_time=3000	
			 
		var s = 1		
	
		$('#s_img').css('width',imgWrap_w)
		
		$('#s_btn li').each(function(index) {
			$(this).attr('id','btn0'+(index+1))
			$(this).attr('data-s',index+1)
        })	
			
		$('#s_btn li:not(:last)').click(function() {			
			s = parseInt($(this).attr('data-s'))
			
			$('#s_img').stop().animate({left:-img_w*s},ani_time)
			$('#text_box').stop().animate({left:-316*s},ani_time)
			
			$('#s_btn li img:not(:last)').attr('src','img/slid-icon.png')
			$('img',this).attr('src','img/slidOn-icon.png')			
		})



		var rolling= setInterval(function() {
			mainSlide()
		},interval_time)
		
		$('#s_btn li img:not(:last)').click(function() {
			clearInterval(rolling)
			$('#s_btn #btn04 img').attr('src','img/slidStop-icon.png')
		})
		
		$('#s_btn #btn04').click(function() {
			if($('#s_btn #btn04 img').attr('src')=='img/slidPlay-icon.png') {
				$('#s_btn #btn04 img').attr('src','img/slidStop-icon.png')
				clearInterval(rolling)
			} else {
				$('#s_btn #btn04 img').attr('src','img/slidPlay-icon.png')
					rolling= setInterval(function() {
						mainSlide()
					},interval_time)
				}
		})



		function mainSlide(){
			s++			
			
			if(s==5){				
				s=2
				$('#s_img').css({left:-img_w*1})
				$('#text_box').css({left:-316*1})
			}	
					
			$('#s_img').stop().animate({left:-img_w*s},ani_time)
			$('#text_box').stop().animate({left:-316*s},ani_time)
			
			$('#s_btn li img:not(:last)').attr('src','img/slid-icon.png')
			$('#s_btn #btn0'+s+' img').attr('src','img/slidOn-icon.png')
			
			if(s==4){
				$('#s_btn #btn01 img').attr('src','img/slidOn-icon.png')
				$('#s_btn #btn04 img').attr('src','img/slidPlay-icon.png')				
			}	
		}
		
		
		
		
		
		// 사이드 네비게이션_서브
			$('#sub_bar #s_menu01').animate({height:132},u_time)
			
			$('#s_m_1').css({backgroundPosition:'-180px 0'})
			$('#u_m_1').css({
				backgroundImage:'url(img/bul_pink.gif)',
				backgroundRepeat:'no-repeat',
				backgroundPosition:'15px 15px',
				color:'#c30452'
			})
			
		
		
			var sub_h = $('.s_m').height()
			
			var u_time = 200
			var u_delay = 150
			
			$('.s_m:not(:first)').mouseenter(function() {
				
				var u_li_h = $('.under_m li').height()
				var u_li_c = $('.under_m li',this).size()
				var under_h = u_li_h*u_li_c
				
				$(this).stop().animate({height:under_h+sub_h+2},u_time)
			}).mouseleave(function() {
				$(this).stop().delay(u_delay).animate({height:sub_h},u_time)
			})
			
			
			/*
			$('#s_menu01, #under_m01').mouseenter(function() {
				$('#s_m_1').css({'backgroundPosition':'-180px 0'})
			}).mouseleave(function() {
				$('#s_m_1').css({'backgroundPosition':'0 0'})
			})
			*/
			
			
			$('#s_menu02, #under_m02').mouseenter(function() {
				$('#s_m_2').css({'backgroundPosition':'-180px -47px'})
			}).mouseleave(function() {
				$('#s_m_2').css({'backgroundPosition':'0 -47px'})
			})
			
			
			$('#s_menu04, #under_m04').mouseenter(function() {
				$('#s_m_4').css({'backgroundPosition':'-180px -140px'})
			}).mouseleave(function() {
				$('#s_m_4').css({'backgroundPosition':'0 -140px'})
			})
			
			
			
			
			
		// 사이드 네비게이션_로그인
			$('#s_menu01 #l_m_1').css({backgroundPosition:'-180px 0'})
		
		
		
		
		
		// 채용정보
		
});
	
	
	
	