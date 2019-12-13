
(function($){
    $(document).ready(function(){

    var $highImg = document.querySelector('.img_area');
    var $numArea = $('#_cuid');

    var $arrow = $('.arrow');
    var $prev = $('.prev');
    var $next = $('.next');

    var _id = 0;
    var _itemMax = $highImg.children.length;
    console.log(_itemMax)


    var _cuId = 0;
    var _exId = _cuId;



    function galClick(id){
        _cuId = id;

        // console.log('id', id);
        console.log('_cuId', _cuId);
        console.log('_exId', _exId);

        $('.gal_img_' + _exId).removeClass('fade_in');
        $('.gal_img_' + _cuId).addClass('fade_in');


        // $('.s_img').css({background : 'url(img/img_' + _exId + '.jpg) no-repeat center center'});
        // $('.s_img').css({backgroundSize : 'cover'});


        // if(_cuId == 0 && _exId == 0){ 
        //   $('.s_img_' + _cuId).addClass('fade_in');
        //   $('.s_img').css({background : 'url(img/img_0.jpg) no-repeat center center'})
        //   $('.s_img').css({backgroundSize : 'cover'});

        // } else{
        //   $('.s_img_' + _exId).removeClass('fade_in');
        //   $('.s_img_' + _cuId).addClass('fade_in');

        //   $('.s_img').css({background : 'url(img/img_' + _exId + '.jpg) no-repeat center center'})
        //   $('.s_img').css({backgroundSize : 'cover'});
        // }

        _exId = _cuId;
         
    }


      var init = function() {
          $arrow.on('click', function(e) {
              e.preventDefault();
              var $el = $(this); //$(e.target) - 현재 눌린 버튼을 선택.
              if($el.is($prev)) { //prev. --
                  if(_id > 0){ //최소값일 때 그 이하 감소하지 못하도록.
                      _id--;
                  }
              }else{ //next. ++
                  if(_id < _itemMax - 1){ //최대값일 때 그 이상 증가하지 못하도록.
                      _id++;
                  }
              }
              console.log(_id)

              $numArea.empty().html(_id + 1);
              galClick(_id);
          });
      }
      //함수 호출.
      init();

    });
})(jQuery);
