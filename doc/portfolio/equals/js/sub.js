// Sub Page

var $logo = document.querySelector('#logo');
var $topNav = document.querySelector('nav');
var $trailer = document.querySelector('#trailer_box');
var $navBg = document.querySelector('#nav_bg');


var $castSubList = document.querySelectorAll('.cast_sub');
var $pageSubList = document.querySelectorAll('.page_sub');


var $exit = document.querySelector('#exit');

var $sub = document.querySelector('#sub');
var $castList = document.querySelectorAll('.cast_list');
var $subList = document.querySelectorAll('.sub_list');

var $subCast = document.querySelector('#sub_cast');
var $page = document.querySelectorAll('.page');

var $imgArea = document.querySelector('.img_area');
var $sImg = document.querySelectorAll('.s_img');

var $sTitle = document.querySelector('.s_title');
var $sName = $sTitle.querySelector('h2');
var $sRole = $sTitle.querySelector('h3');

var $textArea = document.querySelector('.text_area');


var $castNav = document.querySelector('#cast_nav');
var $navList = $castNav.querySelectorAll('a');
var $navName = $castNav.querySelectorAll('p');
var $navLine = $castNav.querySelectorAll('span');

var $name = document.querySelector('#bio_name');
var $bio = document.querySelectorAll('.bio');


var _cu = 0;
var _ex = _cu;





function subExit(event){
    //console.log('subExit');
    event.preventDefault();

    $sub.style.display = 'none';
}

$exit.addEventListener('click', subExit);
$logo.addEventListener('click', subExit);





function castClick(id){

    function onClickCast(event){
      //console.log('onClickCast');
      event.preventDefault();

      $textArea.scrollTo(0,0);

      var $el = this;

      $sub.style.display = 'block';
      $subCast.style.display = 'block';

      for(var i = 0; i < $page.length; i++){
        $page[i].classList.remove ('show_me');
      }

      if(!$el.classList.contains('bio_sel')){ 
          _cu = id;

          $navName[_ex].classList.remove ('name_sel');
          $navName[_cu].classList.add ('name_sel');

          $navLine[_ex].classList.remove ('line_sel');
          $navLine[_cu].classList.add ('line_sel');

          $bio[_ex].classList.remove ('bio_sel');
          $bio[_cu].classList.add ('bio_sel');

          $sImg[_ex].classList.remove ('fade_in');
          $sImg[_cu].classList.add ('fade_in');

          $imgArea.style.background = 'url(img/sub_cast_0' + _cu + '.jpg) no-repeat center center'
          $imgArea.style.backgroundSize = 'cover'

          _ex = _cu;
      }

      if (id == 1) {
          $sName.innerHTML = 'NICHOLAS<br>HOULT';
          $sRole.innerHTML = 'Silas';

          $name.innerHTML = 'Nicholas Hoult';
      }
      else {
          $sName.innerHTML = 'KRISTEN<br>STEWART';
          $sRole.innerHTML = 'Nia';

          $name.innerHTML = 'Kristen Stewart';
      }
    }

    $castSubList[id].addEventListener('click', onClickCast);
    $castList[id].addEventListener('click', onClickCast);
    $navList[id].addEventListener('click', onClickCast);
}



function selectCastNav(){

    for(var i = 0; i < $castList.length; i++){
        castClick(i);
    }
}

selectCastNav ();





function subMenuClick(id){

    function clickSubMenu(event){
      console.log('clickSubMenu ' + id);
      event.preventDefault();

      $sub.style.display = 'block';
      $subCast.style.display = 'none';
      
      var $el = this;

      if(!$el.classList.contains('show_me')){ 
          _cu = id;

          $subCast.classList.remove ('show_me');

          $page[_ex].classList.remove ('show_me');
          $page[_cu].classList.add ('show_me');

          _ex = _cu;
      }
    }

    $subList[id].addEventListener('click', clickSubMenu);
    $pageSubList[id].addEventListener('click', clickSubMenu);
}



function selectSubMenu(){
    for(var i = 0; i < $subList.length; i++){
        subMenuClick(i);
    }
}

selectSubMenu ();