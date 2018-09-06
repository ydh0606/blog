var $text = document.querySelector('#text');
var $index = $text.querySelector('span');
var $title = $text.querySelector('a');



$(function(){


	// 슬라이드 네비게이션 클릭 이벤트 
	$("#slide_nav a").click(function() {
		$("#slide_nav span").css({width:"20px"})
		$("span", this).css({width:"35px"})
	});


	$("a", "#slide_nav li:nth-child(1)").click(function() {
		$("#first").css({backgroundImage:"url(img/bg_01.jpg)"})
		$index.innerHTML = "01 / 03";
		$title.innerHTML = "Chris</br>and Sarah";
	});
	$("a", "#slide_nav li:nth-child(2)").click(function() {
		$("#first").css({backgroundImage:"url(img/bg_02.jpg)"})
		$index.innerHTML = "02 / 03";
		$title.innerHTML = "Gate</br>to Heaven";
	});
	$("a", "#slide_nav li:nth-child(3)").click(function() {
		$("#first").css({backgroundImage:"url(img/bg_03.jpg)"})
		$index.innerHTML = "03 / 03";
		$title.innerHTML = "Fleeted</br>Happenings";
	});





	// 화살표 버튼 클릭 이벤트	 
	var i = 1	

	$('#arr_left').click(function() {

		i--;

		if (i == 0){
			i = 3;
		}

		$("a", "#slide_nav li:nth-child("+i+")").click();

	})

	$('#arr_right').click(function() {

		i++;

		if (i == 4){
			i = 1;
		}

		$("a", "#slide_nav li:nth-child("+i+")").click();

	})





	// 슬라이드 네비게이션 자동 변화	
	var rol_time = 5000



	var first_rol = setInterval(function() {

		$('#arr_right').click()	

	}, rol_time)
		




	// 화살표 마우스 오버 시 자동 변화 멈춤
	$('#arr li').mouseover(function() {

		clearInterval(first_rol)	

	}).mouseout(function() {

		first_rol = setInterval(function() {
			$('#arr_right').click()	
		}, rol_time)

	})

	



});


