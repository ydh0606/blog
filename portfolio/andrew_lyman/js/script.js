// 화면 사이즈 확인

console.log (window.innerWidth, window.innerHeight);





// 배경 음악 재생 컨트롤

var bgSound = document.getElementById ('bgsound');
var bgControl = document.querySelector ('#toggle');

var text;
var overText;



function bgSoundControl() {

	//console.log ('click');

	if (bgSound.paused) {

		text = "ON";
		overText = "OFF"

		console.log ('Music Play');

		bgSound.play();
		bgControl.innerHTML = text;

	} else {

		text = "OFF";
		overText = "ON"

		console.log ('Music Stop');

		bgSound.pause();
		bgControl.innerHTML = text;
	}


}

bgControl.addEventListener('click', bgSoundControl);





// 스크롤시 헤더 배경 및 하단 요소 폰트 컬러 변경

$(function () {

	$(window).scroll(function(){

		var scrPos = $(window).scrollTop();
		var winHeight = $(window).height(); 

		if (scrPos > 50) {
			$("#site ul li a, #sound").addClass("b_color");
			$("#sound span#toggle").addClass("t_box");
		} else {
			$("#site ul li a, #sound").removeClass("b_color");
			$("#sound span#toggle").removeClass("t_box");
		}

		if (scrPos > winHeight - 50) {
			$("header").addClass("h_color");
		} else {
			$("header").removeClass("h_color");
		}
	});
	
});
