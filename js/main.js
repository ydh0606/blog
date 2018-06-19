var $logoBtn = document.getElementById('logo');
var $navMenu = document.getElementById('nav_menu');
var $menuTitle = $navMenu.getElementsByClassName('menu_title');

var $contentBox = document.querySelectorAll('.bg');

var _cuId = 0;
var _exId = _cuId;



var $headerWrap = document.getElementById('header_wrap');
var $navBg = document.getElementById('nav_bg');

setTimeout(function(){
    $headerWrap.style.height = 250 + 'px';
    $navBg.style.height = 100 + '%';

    setTimeout(function(){
        $navBg.style.transition = 'none';
    }, 400);

}, 1500);





function menuClick(id){

    function onClickMenu(evnet){
       event.preventDefault();

       console.log('select menu');

       var $el = this;

       if(!$el.classList.contains('selected')){ 
            _cuId = id + 1;

            $contentBox[_exId].classList.remove('selected');
            $contentBox[_cuId].classList.add('selected');

            _exId = _cuId;
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





function onClickLogo(evnet){
   event.preventDefault();

   console.log('select logo');

   $contentBox[1].classList.remove('selected');
   $contentBox[2].classList.remove('selected');
   $contentBox[3].classList.remove('selected');
   $contentBox[0].classList.add('selected');
}

$logoBtn.addEventListener('click', onClickLogo);