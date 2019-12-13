// Menu Show

$('.white_wrap').hide();

var exScrollTop = 0;

$('#menu').on('click', function(e){
	e.preventDefault();

	exScrollTop = $(window).scrollTop();
	//console.log('exScrollTop' + exScrollTop);

	//console.log("Menu CLICK");

	$('.white_wrap').show().stop(true).delay(100)
	.css({'top':exScrollTop})
	.animate({'opacity':1}, 500, 'easeInOutCubic', function(){
		bodyHidden()
		$('.white_wrap').css({'top':0})
	})
});

$('#close').on('click', function(e){
	e.preventDefault();

	//console.log("Close CLICK");

	bodyVisible();
	moveScrollTop();

	$('.white_wrap').show().stop(true).delay(100)
	.animate({'opacity':0}, 500, 'easeInOutCubic', function(){
		$('.white_wrap').hide();
		
	})

}); 

function bodyHidden(){
	$('html').css({'overflow':'hidden'})
    $('body').css({'overflow':'hidden'})
}

function bodyVisible(){
	$('html').css({'overflow':'visible'})
	$('body').css({'overflow':'visible'})
}

function moveScrollTop(){

	//console.log('moveScrollTop', exScrollTop);

	$('.white_wrap').css({'top':exScrollTop});
	$(window).scrollTop(exScrollTop);
	
}





// Menu

$('#right ul li').on('mouseover', function(){

	//console.log(this);
 	var underW = $('a', this).width();
 	var menuTxt = $(this).children('a').html();
 	//console.log(underW)
 	//console.log(menuTxt)

 	$('b', this).stop(true).delay(100)
    .animate({'width':underW}, 500, 'easeOutCubic')

    // if(menuTxt === "Home"){
    // 	//console.log("Home");
    // 	$('#left h3').html('Since 1960');

    // } else if(menuTxt === "Patagonia"){
    // 	//console.log("Patagonia");
    // 	$('#left h3').html('Our Story');

    // } else if(menuTxt === "Worn Wear"){
    // 	//console.log("Worn Wear");
    // 	$('#left h3').html('Better Than New');

    // } else if(menuTxt === "E-Fibers"){
    // 	//console.log("E-Fibers");
    // 	$('#left h3').html('Eco Material');
    // } 

});

$('#right ul li').on('mouseout', function(){

 	$('b', this).stop(true).delay(100)
    .animate({'width':0}, 500, 'easeOutCubic')

    //$('#left h3').html('Since 1960');

});
