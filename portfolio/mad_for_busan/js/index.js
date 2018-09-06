$(function(){


		cloudMoving01();

		function cloudMoving01() {  // 사용자 함수정의
			$("#bg_box span#sea_01").animate({marginLeft:210},1000);
			$("#bg_box span#sea_01").animate({marginLeft:195},1000, cloudMoving01);
		}

		cloudMoving02(); 

		function cloudMoving02() {  
			$("#bg_box span#sea_02").animate({marginLeft:550},1500);
			$("#bg_box span#sea_02").animate({marginLeft:507},1500, cloudMoving02);	
		}




	});