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
	    	$('.wea').stop().animate({'opacity': '0'}, 1000);
	    	$('#cloudy').stop().animate({'opacity': '1'}, 1000);
	    } else if(id == 2){
	    	//console.log("RAIN");
	    	$('.wea').stop().animate({'opacity': '0'}, 1000);
	    	$('#rain').stop().animate({'opacity': '1'}, 1000);
	    } else if(id == 3){
	    	//console.log("SNOW");
	    	$('.wea').stop().animate({'opacity': '0'}, 1000);
	    	$('#snow').stop().animate({'opacity': '1'}, 1000);
	    } else {
	    	//console.log("CLEAR");
	    	$('.wea').stop().animate({'opacity': '0'}, 1000);
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