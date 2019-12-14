//IE Browser Check

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

  console.log("Yes, IE!");
  $('h2#title').css({
    'opacity':'0.8'
  });

}else {
  console.log("No, IE!");
};





// Mouse Pointer
var $cursor = document.querySelector('#cursor');
var $allA = document.querySelectorAll('a');



function mousePointer(e){
    //console.log('Mouse Pointer');
    $cursor.style.transform = 'translate(' + e.pageX + 'px, ' + e.pageY + 'px)';
}

window.addEventListener('mousemove', mousePointer);

function aPointer01(e){
   $cursor.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

function aPointer02(e){
   $cursor.style.backgroundColor = 'rgba(167,176,181,0.5)';
}

for(var i = 0; i < $allA.length; i++){
   $allA[i].addEventListener('mouseover', aPointer01);
   $allA[i].addEventListener('mouseout', aPointer02);
}




// Menu Button

var $menuBtn = document.querySelector('#menu_btn');
var $navBg = document.querySelector('#nav_bg');
var $navSub = document.querySelectorAll('.sub_menu_title');

var _bgH = 250;



function onNav(){
    //console.log('MouseOver Menu Btn');
    $navBg.style.height = _bgH + 'px';
}

function outNav(){
    //console.log('MouseOut Menu Btn');
    $navBg.style.height = 0 + 'px';
}

$menuBtn.addEventListener('mouseover', onNav);
$menuBtn.addEventListener('mouseout', outNav);

$navBg.addEventListener('mouseover', onNav);
$navBg.addEventListener('mouseout', outNav);










// Nav Tab

var $menuTitle = document.querySelectorAll('.menu_title');

var $wrapper = document.querySelector('#wrapper');
var $contentBox = document.querySelectorAll('.bg');

var $tText = document.querySelector('#t_text');
var $tCircle = document.querySelector('#t_circle');

var _cuId = 0;
var _exId = _cuId;



function menuClick(id){

    function onClickMenu(event){
      //console.log('select menu');
      event.preventDefault();
      

      var $el = this;

      if(!$el.classList.contains('menu_select')){ 
          _cuId = id;

          $menuTitle[_exId].classList.remove ('menu_select');
          $el.classList.add ('menu_select');

          $contentBox[_exId].classList.remove ('fade_in');
          $contentBox[_exId].classList.remove ('text_index');
          $contentBox[_cuId].classList.add ('fade_in');
          $contentBox[_cuId].classList.add ('text_index');

          $wrapper.style.background = 'url(img/bg_' + _exId + '.jpg) no-repeat center center'
          $wrapper.style.backgroundSize = 'cover'

          _exId = _cuId;
      }

      if(!$el.classList.contains('circle')) {
          //console.log('Trailer Text');

          $tText.style.display = 'block';
          $tCircle.style.display = 'none';

          //$trailer.addEventListener('mouseover', onText);
          //$trailer.addEventListener('mouseout', outText);

      } else {
          $tText.style.display = 'none';
          $tCircle.style.display = 'block';
      }
    }

    $menuTitle[id].addEventListener('click', onClickMenu);
}



function selectMenu(){
    for(var i = 0; i < $menuTitle.length; i++){
        menuClick(i);
    }
}

selectMenu ();










// Trailer

var $tText = document.querySelector('#t_text');
var $tCircle = document.querySelector('#t_circle');

var $trailer = $tCircle.querySelector('a');
var $tImage = $trailer.querySelectorAll('img')[1];

var $tPlay = document.querySelector('#t_play');



// function onText(){

//     console.log('onText');

//     //$tText.style.display = 'none';
//     $tCircle.style.display = 'block';
   
// }

// function outText(){

//     console.log('outText');

//     $tText.style.display = 'block';
//     $tCircle.style.display = 'none';
   
// }

// $tText.addEventListener('mouseover', onText);
// $tText.addEventListener('mouseout', outText);



function onTrailer(){
    //console.log('onTrailer');

    $tImage.src = 'img/t_video.gif';
    $tPlay.style.transform = 'scale(0, 0)';
}

function outTrailer(){
    //console.log('outTrailer');

    $tImage.src = 'img/t_img.jpg';
    $tPlay.style.transform = 'scale(1, 1)';
}

$tCircle.addEventListener('mouseover', onTrailer);
$tCircle.addEventListener('mouseout', outTrailer);










// Mouse parallax & Gradient

var $homeColor = document.querySelector('.home_color');
var $colorBg = document.querySelectorAll('.color_bg');

var screenW = window.innerWidth;
var screenH = window.innerHeight;

var moveSpeed = 0.75;
var bigMove = 30, smallMove = 50, minMove = 80, tinyMove = 200;

$(window).mousemove(function(e) {

  var posX = (e.pageX - screenW / 2),
      posY = (e.pageY - screenH / 2);

  TweenMax.to($('.parallax'), moveSpeed, {
    css: {
      transform : "translate(" + ( - posX / bigMove) + "px, " + ( - posY / bigMove) + "px"
    }
  });

  TweenMax.to($('.parallax_s'), moveSpeed, {
    css: {
      transform : "translate(" + ( - posX / smallMove) + "px, " + ( - posY / smallMove) + "px"
    }
  });

  TweenMax.to($('.parallax_sr'), moveSpeed, {
    css: {
      transform : "translate(" + ( posX / smallMove) + "px, " + ( posY / smallMove) + "px"
    }
  });

});

function mouseGradient(e){
    //console.log('Mouse Gradient');

    var mouseX = Math.round(event.pageX / screenW * 100);
    var mouseY = Math.round(event.pageY / screenH * 100);

   for(var i = 0; i < $colorBg.length; i++){
        $colorBg[i].style.background = 'radial-gradient(at ' + mouseX + '% ' + mouseY + '%, #2b4355, #c56b15)';
    }
}

window.addEventListener('mousemove', mouseGradient);