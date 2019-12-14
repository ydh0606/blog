// Work List Slide

var i = 1;

var _cuId = 0;
var _exId = _cuId;

var titleH = $('.work .title h1').height();
var titleList = $('.title li').length;
var imageList = $('.image li').length;



$(window).on("mousewheel",function(e){

    if(e.originalEvent.wheelDelta >= 0) {
        console.log("Scroll Up");

        i--;

        if(i == -1){               
            i = 3
            $('.title').css({top : - titleH * 4})
            $('.title h1').eq(4).css({opacity : 1})
        } 

        workTitleSlide()

    } else {
        console.log("Scroll Down");
        i++;

        if(i == 6){               
            i = 2
            $('.title').css({top : - titleH * 1})
            $('.title h1').eq(1).css({opacity : 1})
        } 

        workTitleSlide()
    }

});

function workTitleSlide(){
            
    $('.title').stop(true).animate({
        top : - titleH * i
    }, 1000, 'easeInOutCubic')

    $('.work .title h1').stop(true).animate({
        'opacity':0
    }, 1000)

    $('.work .title h1').eq(i).stop(true).animate({
        'opacity':1
    }, 1000)


    //console.log(i);

    workImageSlide(i);
    textFill();
}



function workImageSlide(id){

    _cuId = id - 1;
    //console.log('_cuId', _cuId);
    //console.log('_exId', _exId);

    if(id == 5){               
        id = 1;
        $('.image li').eq(3).removeClass('fade_in');
        $('.image li').eq(0).addClass('fade_in');
    } 

    if(id == 3){
        $('.image li').eq(3).removeClass('fade_in');
        $('.image li').eq(2).addClass('fade_in');
    } 

    if(_exId == -1 && _cuId == 2){
        _exId = 3;
    } else if(_exId == -1 && _cuId == 0){
        _exId = 3;
    }

    $('.image li').eq(_exId).removeClass('fade_in');
    $('.image li').eq(_cuId).addClass('fade_in');

    $('.image_show').css({background : 'url(img/work_' + _exId + '.jpg) no-repeat center center'})
    $('.image_show').css({backgroundSize : 'cover'});

    _exId = _cuId;
    

    if(_exId == 4){
        _exId = 0; 
    }

}



function textFill(){

    var $sort = $('#sort span');
    var $num = $('.num .now');
    var $role = $('.role .half_top');
    var $btn = $('.sub_title .btn a');

    if(i == 5 || i == 1){
        //console.log("andrew")
        $sort.empty().html('Web Design');
        $num.empty().html('01');
        $btn.attr('href', '../clay/index.html');

    } else if(i == 2){
        //console.log("equals")
        $sort.empty().html('Web Design');
        $num.empty().html('02');
        $btn.attr('href', 'index.html');

    } else if(i == 3){
        //console.log("pagatonia")
        $sort.empty().html('Web Design');
        $num.empty().html('03');
        $btn.attr('href', '../patagonia/index.html');

    } else if(i == 4 || i == 0){
        //console.log("clay")
        $sort.empty().html('App Design');
        $num.empty().html('04');
        $btn.attr('href', '../equals/index.html');
    }

}



$('.w_scroll').on('click', function(e) {
    e.preventDefault();

    i++;

    if(i == 6){               
        i = 2
        $('.title').css({top : - titleH * 1})
        $('.title h1').eq(1).css({opacity : 1})
    } 

    workTitleSlide()
});


$('#prev_arr').on('click', function(e) {
    e.preventDefault();

    i--;

    if(i == -1){               
        i = 3
        $('.title').css({top : - titleH * 4})
        $('.title h1').eq(4).css({opacity : 1})
    } 

    workTitleSlide()
});



$('#next_arr').on('click', function(e) {
    e.preventDefault();

    i++;

    if(i == 6){               
        i = 2
        $('.title').css({top : - titleH * 1})
        $('.title h1').eq(1).css({opacity : 1})
    } 

    workTitleSlide()
});


