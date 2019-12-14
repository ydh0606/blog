// Ready
console.log ("Script In!");
console.log ("W = " + window.innerWidth, "H = " + window.innerHeight);





$(document).ready(function() {

    // ie browser check

    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

        console.log("Yes, IE!");

        $('.text_mask').css({
            'color':'#646e79',
            'background-image':'inherit',
            '-webkit-background-clip':'inherit',
            '-webkit-text-fill-color':'inherit'
        });

        $('.text_mask_y').css({
            'background-image':'inherit',
            '-webkit-background-clip':'inherit',
            '-webkit-text-fill-color':'inherit'
        });

    }else {
        console.log("No, IE!");

    };





    // Mouse Position Parallax

    var winW = $(window).width(),
        winH = $(window).height();

    var conW = $('.contents').width(),
        proW = $('.profile').width();

    var moveSpeed = 0.75;
    var bigMove = 30, smallMove = 50, minMove = 100, move = 10;

    $('body').mousemove(function(e) {
        //console.log(e.pageX, e.pageY);

        // var posX = ((e.pageX - winW / 2) / 30) * - 1;
        // var posY = ((e.pageY - winH / 2) / 30) * - 1;

        var posX = (e.pageX - winW / 2);
        var posY = (e.pageY - winH / 2);
        //console.log(posX, posY);

        TweenMax.to($('.big_move'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / bigMove) + "px, " + (posY / bigMove) + "px"
            }
        })

        TweenMax.to($('.small_move'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / smallMove) + "px, " + (posY / smallMove) + "px"
            }
        })

        TweenMax.to($('.big_move_r'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / bigMove) + "px, " + (- posY / bigMove) + "px"
            }
        })

        TweenMax.to($('.small_move_r'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / smallMove) + "px, " + (- posY / smallMove) + "px"
            }
        })

        TweenMax.to($('.etc_move'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / minMove) + "px, " + (posY / minMove) + "px"
            }
        })

        TweenMax.to($('.etc_move_r'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / minMove) + "px, " + (- posY / minMove) + "px"
            }
        })


        TweenMax.to($('.move_01'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / move) + "px, " + (posY / move) + "px"
            }
        })

        TweenMax.to($('.move_02'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / move) + "px, " + (- posY / move) + "px"
            }
        })



        // Text Mask Parallax

        TweenMax.to($('.p_bg'), moveSpeed, {
            css: {
                backgroundPosition : ((posX / minMove) + 50) + "% " + ((posY / minMove) + 50) + "%"
            }
        })

        TweenMax.to($('.link_mouse'), moveSpeed, {
            css: {
                backgroundPosition : ((posX / bigMove) + 50) + "% " + ((posY / bigMove) + 50) + "%"
            }
        })

        TweenMax.to($('.img_box h1'), moveSpeed, {
            css: {
                backgroundPosition : ((posX / minMove) + 50) + "% " + ((posY / minMove) + 50) + "%"
            }
        })

        TweenMax.to($('.img_box h1'), moveSpeed, {
            css: {
                backgroundPosition : ((posX / minMove) + 50) + "% " + ((posY / minMove) + 50) + "%"
            }
        })


    });



    $('.about .contents').mousemove(function(e) {

        var posX = (e.pageX - winW / 2);
        var posY = (e.pageY - winH / 2);

        TweenMax.to($('.contents #color'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / bigMove) + "px, " + (- posY / bigMove) + "px"
            }
        })

        TweenMax.to($('.text_box h1'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / smallMove) + "px, " + (posY / smallMove) + "px"
            }
        })
        
    });

    $('.profile').mousemove(function(e) {

        var posX = (e.pageX - conW - proW / 2);
        var posY = (e.pageY - winH / 2);
        //console.log(posX, posY);

        TweenMax.to($('#img'), moveSpeed, {
            css: {
                transform : "translate(" + (- posX / bigMove) + "px, " + (- posY / bigMove) + "px"
            }
        })

        TweenMax.to($('.img_box h1'), moveSpeed, {
            css: {
                transform : "translate(" + (posX / smallMove) + "px, " + (posY / smallMove) + "px"
            }
        })

    });


});





// Main Title

$('.title_wrap').on('mouseover', goSub)
$('.title_wrap').on('mouseout', noSub)



function goSub(){
	//console.log("Go Sub Page");

	$('.main_title').show().stop(true).delay(200)
    .animate({'opacity':0}, 500)

	$('.link_title').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)
} 

function noSub(){
	//console.log("No Sub Page");

	$('.link_title').show().stop(true).delay(200)
    .animate({'opacity':0}, 500)

	$('.main_title').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)
} 





// Main Title Mouseover

$('.link_title a').on('mouseover', function(){
    //console.log("mouseOn");
    $(this).addClass('link_mouse');
})

$('.link_title a').on('mouseout', function(){
    $(this).removeClass('link_mouse');
})





// About Image Mouseover

$('.profile').on('mouseover', zoomIn);
$('.profile').on('mouseout', zoomOut);

function zoomIn(){
	//console.log("Zoom Image");

	$('#img img').stop(true).animate({
        'height':'130%',
        'marginTop' : - ($('#img img').height() / 2)
    }, 500)

    $('.img_box h1').stop(true)
    .animate({'opacity':0.4}, 1000, 'easeOutCubic')

}

function zoomOut(){
	//console.log("Zoom Image");

	$('#img img').stop(true).animate({
        'height':'135%'
    }, 500)

    $('.img_box h1').stop(true).delay(100)
    .animate({'opacity':0.2}, 1000, 'easeOutCubic')
}