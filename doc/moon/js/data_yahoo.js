var weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%201132599%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}



function dateTime(){
    
    var $api = $('#api');

    var d = new Date();

    var month = pad(d.getMonth() + 1, 2);
    var date = pad(d.getDate(), 2);
    //console.log("Month = " + month, "Date = " + date);

    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekIndex = d.getDay();
    var day = weekday[weekIndex];
    //console.log("weekIndex = " + weekIndex, "Day = " + day);

    var hours = d.getHours();
    var minutes = d.getMinutes();
    //console.log("Hours = " + hours, "Minutes = " + minutes);

    var timeString = pad(hours, 2) + ':' + pad(minutes, 2) ;
    //console.log(timeString);



    var html = '';

    //html += '<li>' + month + '.' + date + ' ' + day + '</li>';
    $('#month').empty().html(month + '.' + date + ' ' + day);

    if(hours >= 00 && hours < 12){
        //html += '<li>' + timeString + ' AM </li>';
        $('#hour').empty().html(timeString + ' AM');
    }else {
        //html += '<li>' + timeString + ' PM </li>';
        $('#hour').empty().html(timeString + ' AM');
    }

    $api.append(html);



    var $thisMoon = $('.intro .moon img');
    var $moonList = $('.moon_list li')

    var $mainMean = $('.mean li');
    var $controlTime = $('.controller .time li');
    var $controlTitle = $('.controller .control_title');

    var moon_ex;

    if(hours >= 12 && hours < 16){
        //12 - 15 // new moon
        moon_ex = 0;

        $thisMoon.attr("src","img/moon_00.png");
        $('#slider span').css({'top':3});

        $moonList.removeClass ('fade_in');
        $moonList.eq(0).addClass ('fade_in');

        $mainMean.removeClass('select');
        $mainMean.eq(0).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(0).addClass('select');
       // $controlTime.eq(0).children('a').append(' PM');

        $controlTitle.children('h1').html('Idea');
        $controlTitle.children('span').html('New Moon');

    } else if(hours >= 16 && hours < 20){
        //16 - 19 // half moon
        moon_ex = 1;

        $thisMoon.attr("src","img/moon_01.png");
        $('#slider span').css({'top':55});

        $moonList.removeClass ('fade_in');
        $moonList.eq(1).addClass ('fade_in');

        $mainMean.removeClass('select');
        $mainMean.eq(1).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(1).addClass('select');
        //$controlTime.eq(1).children('a').append('PM');

        $controlTitle.children('h1').html('Endeavor');
        $controlTitle.children('span').html('Half Moon');

    } else if((hours >= 20 && hours <= 24) || (hours >= 0 && hours < 4)){
        //20 -24, 0 - 3 // full moon
        moon_ex = 2;

        $thisMoon.attr("src","img/moon_02.png");
        $('#slider span').css({'top':110});

        $moonList.removeClass ('fade_in');
        $moonList.eq(2).addClass ('fade_in');

        $mainMean.removeClass('select');
        $mainMean.eq(2).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(2).addClass('select');
        //$controlTime.eq(2).children('a').append('PM');

        $controlTitle.children('h1').html('Fruition');
        $controlTitle.children('span').html('Full Moon');

    } else if(hours >= 4 && hours < 8){
        //4 - 8 // half moon
        moon_ex = 3;

        $thisMoon.attr("src","img/moon_03.png");
        $('#slider span').css({'top':165});

        $moonList.removeClass ('fade_in');
        $moonList.eq(3).addClass ('fade_in');

        $mainMean.removeClass('select');
        $mainMean.eq(1).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(3).addClass('select');
        //$controlTime.eq(3).children('a').append('AM');

        $controlTitle.children('h1').html('Endeavor');
        $controlTitle.children('span').html('Half Moon');

    } else{
        //8 - 11 // new moon
        moon_ex = 4;

        $thisMoon.attr("src","img/moon_04.png");
        $('#slider span').css({'top':220});

        $moonList.removeClass ('fade_in');
        $moonList.eq(4).addClass ('fade_in');

        $mainMean.removeClass('select');
        $mainMean.eq(0).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(4).addClass('select');
        //$controlTime.eq(4).children('a').append('AM');

        $controlTitle.children('h1').html('Idea');
        $controlTitle.children('span').html('New Moon');
    }

    return moon_ex;
}

dateTime();



// Time Control

var $controlT = $('.controller .time li');
var $thisMoon = $('.moon img');
var $controlTitle = $('.controller .control_title');

var $moonList = $('.moon_list li')
var $moonListBox = $('.moon_list')

var _cuId = dateTime();
var _exId = _cuId;

function timeClick(id){

    function onTimeClick(event){
        //console.log('Weather Click');
        event.preventDefault();

        _cuId = id;

        //console.log('_cuId', _cuId);
        //console.log('_exId', _exId);

        $moonList.removeClass('fade_in');
        $moonList.eq(id).addClass('fade_in');

        $('.moon_list').css({'background':'url(img/moon_0' + _exId + '.png) no-repeat center center'});
        $('.moon_list').css({'backgroundSize':'cover'});

        _exId = _cuId;
      
        $controlT.removeClass('select');
        $controlT.eq(id).addClass('select');

        //var _id = id + 1;

        //$thisMoon.attr("src","img/moon_0" + _id + ".png");

        if(id == 0){
            //console.log("New Moon");
            $controlTitle.children('h1').html('Idea');
            $controlTitle.children('span').html('New Moon');

            $('#slider span').stop(true).delay(0)
            .animate({'top':0}, 300)

        } else if(id == 1){
            //console.log("Half Moon");
            $controlTitle.children('h1').html('Endeavor');
            $controlTitle.children('span').html('Half Moon');

            $('#slider span').stop(true).delay(0)
            .animate({'top':55}, 300)

        } else if(id == 2){
            //console.log("Full Moon");
            $controlTitle.children('h1').html('Fruition');
            $controlTitle.children('span').html('Full Moon');

            $('#slider span').stop(true).delay(0)
            .animate({'top':110}, 300)
        }

         else if(id == 3){
            //console.log("Full Moon");
            $controlTitle.children('h1').html('Endeavor');
            $controlTitle.children('span').html('Half Moon');

            $('#slider span').stop(true).delay(0)
            .animate({'top':165}, 300)
        }

         else if(id == 4){
            //console.log("Full Moon");
            $controlTitle.children('h1').html('Idea');
            $controlTitle.children('span').html('New Moon');

            $('#slider span').stop(true).delay(0)
            .animate({'top':220}, 300)
        }

        $('.control_title').css({
            "marginTop" : - ($('.control_title').height() / 2),
            "marginLeft" : - ($('.control_title').width() / 2)
        });

    }

    $controlT[id].addEventListener('click', onTimeClick);
}



function timeCont(){
    for(var i = 0; i < $controlT.length; i++){
        timeClick(i);
    }
}

timeCont ();





(function($){
$(document).ready(function() {

    var $api = $('#api');

    function weatherData(){
        $.ajax({
            url : weatherApi,
            dataType : 'json',

            success : function(response){
                //console.log(response);

                var results = response['query']['results'];
                var condition = results['channel']['item']['condition'];

                var html = '';

                //console.log(condition); 
                //{code: "26", date: "Thu, 15 Nov 2018 02:00 PM KST", temp: "58", text: "Cloudy"}

                var temp = condition['temp'],
                    text = condition['text'],
                    code = condition['code'];

                //console.log("Temp = " + temp);   
                //console.log("code = " + code, "Text = " + text);   



                //https://developer.yahoo.com/weather/documentation.html

                var $controlW = $('.controller .weather li');

                if((code >= 0 && code <= 2) || (code >= 19 && code <= 30) || code == 44 ){
                    text = "Cloudy";

                    $controlW.removeClass('select');
                    $controlW.eq(1).addClass('select');

                    $('.wea').css({'display':'none'});
                    $('#cloudy').css({'display':'block'});

                } else if((code >= 3 && code <= 4) || (code >= 8 && code <= 12) || code == 35 || (code >= 37 && code <= 40) || (code >= 45 && code <= 47)){
                    text = "Rain";

                    $controlW.removeClass('select');
                    $controlW.eq(2).addClass('select');

                    $('.wea').css({'display':'none'});
                    $('#rain').css({'display':'block'});

                } else if((code >= 5 && code <= 7) || (code >= 13 && code <= 18) || (code >= 41 && code <= 43)){
                    text = "Snow";

                    $controlW.removeClass('select');
                    $controlW.eq(3).addClass('select');

                    $('.wea').css({'display':'none'});
                    $('#snow').css({'display':'block'});

                } else if( code == 3200 ){
                    //not available
                    text = "-";

                } else{
                    //default
                    text = "Clear";

                    $controlW.removeClass('select');
                    $controlW.eq(0).addClass('select');

                }


                //html += '<li>' + temp + '℃</li>';
                //html += '<li>' + text.toUpperCase() + '</li>';

                $('#temp').empty().html(temp + '℃');
                $('#condition').empty().html(text.toUpperCase());

                //$api.append(html);
            },

            error : function(error){
            }
        })
    }

    weatherData();

    $('#data').on('click', function(){
        console.log("Data Area Click");
        dateTime();
        weatherData();
    });

});
})(jQuery);



