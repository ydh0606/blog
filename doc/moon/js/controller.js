// Ready
console.log ("Controller In!");





// Weather

var $controlW = $('.controller .weather li');

function weatherClick(id){

    function onWeatherClick(event){
    	//console.log('Weather Click');
    	event.preventDefault();
      
    	$controlW.removeClass('select');
		$controlW.eq(id).addClass('select');

		if(id == 1){
	    	//console.log("CLOUDY");
	    	$('.wea').css({'display':'none'});
	    	$('#cloudy').css({'display':'block'});
	    } else if(id == 2){
	    	//console.log("RAIN");
	    	$('.wea').css({'display':'none'});
	    	$('#rain').css({'display':'block'});
	    } else if(id == 3){
	    	//console.log("SNOW");
	    	$('.wea').css({'display':'none'});
	    	$('#snow').css({'display':'block'});
	    } else {
	    	//console.log("CLEAR");
	    	$('.wea').css({'display':'none'});
	    }
    }

    $controlW[id].addEventListener('click', onWeatherClick);
}



function weatherCont(){
    for(var i = 0; i < $controlW.length; i++){
        weatherClick(i);
    }
}

weatherCont ();





// // Time

// var $controlT = $('.controller .time li');
// var $thisMoon = $('.moon img');
// var $controlTitle = $('.controller .control_title');

// var $moonList = $('.moon_list li')
// var $moonListBox = $('.moon_list')

// var _cuId = 0;
// var _exId = _cuId;

// function timeClick(id){

//     function onTimeClick(event){
//     	//console.log('Weather Click');
//     	event.preventDefault();

//     	_cuId = id;

//     	console.log('_cuId', _cuId);
//     	console.log('_exId', _exId);

//     	$moonList.eq(_exId).removeClass('fade_in');
//         $moonList.eq(_cuId).addClass('fade_in');

//         //$('.moon_list').css({'background':'url(img/moon_0' + _exId + '.png) no-repeat center center'});
//         //$('.moon_list').css({'backgroundSize':'cover'});

//     	_exId = _cuId;
      
//     	$controlT.removeClass('select');
// 		$controlT.eq(id).addClass('select');

// 		//var _id = id + 1;

//    		//$thisMoon.attr("src","img/moon_0" + _id + ".png");

//    		if(id == 0 || id == 4){
// 	    	//console.log("New Moon");
// 	    	$controlTitle.children('h1').html('Idea');
//        		$controlTitle.children('span').html('New Moon');

// 	    } else if(id == 1 || id == 3){
// 	    	//console.log("Half Moon");
// 	    	$controlTitle.children('h1').html('Endeavor');
//        		$controlTitle.children('span').html('Half Moon');

// 	    } else {
// 	    	//console.log("Full Moon");
// 	    	$controlTitle.children('h1').html('Fruition');
//        		$controlTitle.children('span').html('Full Moon');
// 	    }

// 	    $('.control_title').css({
// 			"marginTop" : - ($('.control_title').height() / 2),
// 			"marginLeft" : - ($('.control_title').width() / 2)
// 		});

//     }

//     $controlT[id].addEventListener('click', onTimeClick);
// }



// function timeCont(){
//     for(var i = 0; i < $controlT.length; i++){
//         timeClick(i);
//     }
// }

// timeCont ();





// Rain

var winH = $(window).innerHeight();

var pos, delay, speed;
var rainOpacity = [0.3, 0.5, 0.7];
var rainDrop = 25;


for (var i = 0; i < rainDrop; i++) {
  
	pos = Math.floor((Math.random() * 100) + 1);
	delay = Math.random();
	speed = (Math.random() * 0.5) + 0.5;

	rain_01 = document.createElement("div");
	rain_01.className = "rain_01";
	rain_01.style.left = pos + "%";
	rain_01.style.opacity = rainOpacity[parseInt(Math.random()*3)];

	TweenMax.to(rain_01, speed, {
		x : - pos - 50,
		y : winH,
		delay : delay,
		repeat : -1,
		ease:Linear.easeNone
	});



	pos = Math.floor((Math.random() * 100) + 1);
	delay = Math.random();
	speed = (Math.random() * 0.5) + 0.5;

	rain_02 = document.createElement("div");
	rain_02.className = "rain_02";
	rain_02.style.left = pos + "%";
	rain_02.style.opacity = rainOpacity[parseInt(Math.random()*3)];

	TweenMax.to(rain_02, speed, {
		x : - pos - 50,
		y : winH,
		delay : delay,
		repeat : -1,
		ease:Linear.easeNone
	});


	document.getElementById('rain').appendChild(rain_01);
	document.getElementById('rain').appendChild(rain_02);
}





// Snow

var snowOpacity = [0.1, 0.3, 0.6];
var snowDrop = 20;


for (var i = 0; i < snowDrop; i++) {
  
	pos = Math.floor((Math.random() * 100) + 0.5);
	delay = Math.random();
	speed = (Math.random() * 3) + 2;

	snow_01 = document.createElement("div");
	snow_01.className = "snow_01";
	snow_01.style.left = pos + "%";
	snow_01.style.opacity = snowOpacity[parseInt(Math.random()*2)];

	TweenMax.to(snow_01, speed, {
		y : winH,
		delay : delay,
		repeat : -1,
		ease:Linear.easeNone
	});



	pos = Math.floor((Math.random() * 100) + 0.5);
	delay = Math.random();
	speed = (Math.random() * 5) + 2;

	snow_02 = document.createElement("div");
	snow_02.className = "snow_02";
	snow_02.style.left = pos + "%";
	snow_02.style.opacity = snowOpacity[parseInt(Math.random()*3)];

	TweenMax.to(snow_02, speed, {
		y : winH,
		delay : delay,
		repeat : -1,
		ease:Linear.easeNone
	});


	document.getElementById('snow').appendChild(snow_01);
	document.getElementById('snow').appendChild(snow_02);
}



// Cloudy

function cloudMov(){

	TweenMax.to($('#cloud_01'), 7, {
		left:'-35%',
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut,
 		yoyoEase:true
 	})

 	TweenMax.to($('#cloud_02'), 15, {
 		delay : delay,
		right:'-15%',
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut,
 		yoyoEase:true
 	})

 	TweenMax.to($('#cloud_03'), 20, {
		left:'0%',
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut,
 		yoyoEase:true
 	})

}

cloudMov()

