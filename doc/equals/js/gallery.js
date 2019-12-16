
// ready
//console.log ("Gallery In!");


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

        _exId = _cuId;
         
    }


      var init = function() {
          $arrow.on('click', function(e) {
              e.preventDefault();
              var $el = $(this); 
              if($el.is($prev)) { 
                  if(_id > 0){ 
                      _id--;
                  }
              }else{ //next. ++
                  if(_id < _itemMax - 1){ 
                      _id++;
                  }
              }
              console.log(_id)

              $numArea.empty().html(_id + 1);
              galClick(_id);
          });
      }
      init();

    });
})(jQuery);