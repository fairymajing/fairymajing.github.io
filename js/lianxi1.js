/**
 * Created by Administrator on 2016/10/24 0024.
 */
var window_width = 1024;
var window_height = 568;
var radius = 8;
var margin_top = 60;
var margin_left = 30;

// var endTime = new Date(2016,8,23,18,47,52);
var curShowTimeSeconds = 0

var balls = [];
const colors = ["rgb(228,186,97)","rgb(96,230,136)","rgb(95,155,245)","rgb(202,137,250)","rgb(235,152,208)","rgb(155,207,232)","olive","rgb(19,151,102)","rgb(247,202,140)","rgb(174,228,146)"];


window.onload = function(){

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    canvas.width = window_width;
    canvas.height = window_height;

    curShowTimeSeconds = getCurrentShowTimeSeconds()
    setInterval(
        function(){
            render( context );
            update();
        },50
    );
}

function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds()

    return ret;
}

function update(){

    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt( nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600)/60 )
    var nextSeconds = nextShowTimeSeconds % 60

    var curHours = parseInt( curShowTimeSeconds / 3600);
    var curMinutes = parseInt( (curShowTimeSeconds - curHours * 3600)/60 )
    var curSeconds = curShowTimeSeconds % 60

    if( nextSeconds != curSeconds ){
        if( parseInt(curHours/10) != parseInt(nextHours/10) ){
            addBalls( margin_left , margin_top , parseInt(curHours/10) );
        }
        if( parseInt(curHours%10) != parseInt(nextHours%10) ){
            addBalls( margin_left + 15*(radius+1) , margin_top , parseInt(curHours/10) );
        }

        if( parseInt(curMinutes/10) != parseInt(nextMinutes/10) ){
            addBalls( margin_left + 39*(radius+1) , margin_top , parseInt(curMinutes/10) );
        }
        if( parseInt(curMinutes%10) != parseInt(nextMinutes%10) ){
            addBalls(margin_left + 54*(radius+1) , margin_top , parseInt(curMinutes%10) );
        }

        if( parseInt(curSeconds/10) != parseInt(nextSeconds/10) ){
            addBalls( margin_left + 78*(radius+1) , margin_top , parseInt(curSeconds/10) );
        }
        if( parseInt(curSeconds%10) != parseInt(nextSeconds%10) ){
            addBalls( margin_left + 93*(radius+1) , margin_top , parseInt(nextSeconds%10) );
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();
}

function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= window_height-radius ){
            balls[i].y = window_height-radius;
            balls[i].vy = - balls[i].vy*0.65;
        }
    }
}

function addBalls( x , y , num ){

    for( var i = 0  ; i < digit[num].length ; i ++ )
        for( var j = 0  ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                var aBall = {
                    x:x+j*2*(radius+1)+(radius+1),
                    y:y+i*2*(radius+1)+(radius+1),
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
                }

                balls.push( aBall )
            }
}

function render( cxt ){

    cxt.clearRect(0,0,window_width, window_height);

    var hours = parseInt( curShowTimeSeconds / 3600);
    var minutes = parseInt( (curShowTimeSeconds - hours * 3600)/60 )
    var seconds = curShowTimeSeconds % 60

    renderDigit( margin_left , margin_top , parseInt(hours/10) , cxt )
    renderDigit( margin_left + 15*(radius+1) , margin_top, parseInt(hours%10) , cxt )
    renderDigit( margin_left + 30*(radius +1) ,margin_top , 10 , cxt )
    renderDigit( margin_left + 39*(radius+1) , margin_top, parseInt(minutes/10) , cxt);
    renderDigit( margin_left + 54*(radius+1) , margin_top, parseInt(minutes%10) , cxt);
    renderDigit( margin_left + 69*(radius+1) , margin_top, 10 , cxt);
    renderDigit( margin_left + 78*(radius+1) , margin_top, parseInt(seconds/10) , cxt);
    renderDigit( margin_left + 93*(radius+1) , margin_top, parseInt(seconds%10) , cxt);

    for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle=balls[i].color;

        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , radius , 0 , 2*Math.PI , true );
        cxt.closePath();

        cxt.fill();
    }
}

function renderDigit( x , y , num , cxt ){

    cxt.fillStyle = "peachpuff";

    for( var i = 0 ; i < digit[num].length ; i ++ )
        for(var j = 0 ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                cxt.beginPath();
                cxt.arc( x+j*2*(radius+1)+(radius+1) , y+i*2*(radius+1)+(radius+1) , radius , 0 , 2*Math.PI )
                cxt.closePath()

                cxt.fill()
            }
}
