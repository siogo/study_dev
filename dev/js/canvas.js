var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 700;
var testtime = new Date(2016,7,31,13,20,50);

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]


window.onload = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	cent = getCurrentShowTimeSeconds();
	setInterval(function(){
        render( context );
		update();
    	},50
    );
}

function update(){
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();
	var nexthour = parseInt(nextShowTimeSeconds/3600);
	var nextmin = parseInt((nextShowTimeSeconds - nexthour*3600)/60);
	var nextsec = parseInt(nextShowTimeSeconds%60);

	var hour = parseInt(cent/3600);
	var min = parseInt((cent - hour*3600)/60);
	var sec = parseInt(cent%60);

	if(nextsec != sec){
		if(parseInt(hour/10) != parseInt(nexthour/10)){
			addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10));
		}

		if(parseInt(hour%10) != parseInt(nexthour%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hour%10));
		}

		if(parseInt(min/10) != parseInt(nextmin/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(min/10));
		}

		if(parseInt(min%10) != parseInt(nextmin%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(min%10));
		}

		if(parseInt(sec/10) != parseInt(nextsec/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(sec/10));
		}

		if(parseInt(sec%10) != parseInt(nextsec%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(sec%10));
		}

		cent = nextShowTimeSeconds;
	}

	updateBalls();
}

function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = - balls[i].vy*0.75;
        }
    }

    var cnt = 0
    for( var i = 0 ; i < balls.length ; i ++ )
        if( balls[i].x + RADIUS > 0 && balls[i].x -RADIUS < WINDOW_WIDTH )
            balls[cnt++] = balls[i]

    while( balls.length > cnt ){
        balls.pop();
    }
}

function addBalls(x,y,num){
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length;j++) {
			if(digit[num][i][j] == 1){
				var aBall = {
					x:x+2*j*(RADIUS+1)+(RADIUS+1),
					y:y+2*i*(RADIUS+1)+(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
					vy:-5,
					color: colors[ Math.floor( Math.random()*colors.length ) ]
				}

				balls.push(aBall);
			}

			
		}
	}
}

function render(ctx){
	ctx.clearRect(0,0,1024,700);

	var hour = parseInt(cent/3600);
	var min = parseInt((cent - hour*3600)/60);
	var sec = parseInt(cent%60);
	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10),ctx);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),ctx);

	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,ctx);

	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(min/10),ctx);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(min%10),ctx);

	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,ctx);

	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(sec/10),ctx);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(sec%10),ctx);

	for (var i = 0; i < balls.length; i++) {
		ctx.fillStyle=balls[i].color;


		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI);
		ctx.closePath();

		ctx.fill();
	}
}

function renderDigit(x,y,num,ctx){

	ctx.fillStyle = "rgb(0,102,153)";

	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[i].length; j++) {
			if(digit[num][i][j] == '1'){
				ctx.beginPath();
				ctx.arc(x+2*j*(RADIUS+1)+(RADIUS+1),y+2*i*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				ctx.closePath();

				ctx.fill();
			}
		}
	}
}

function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var cent = testtime.getTime() - curTime.getTime();
	return parseInt(cent/1000);
}