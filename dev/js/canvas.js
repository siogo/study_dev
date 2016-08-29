var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
var testtime = new Date(2016,7,31,13,20,50);

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
	var nextmin = parseInt((nextShowTimeSeconds)/60);
	var nextsec = parseInt(nextShowTimeSeconds%60);

	var hour = parseInt(cent/3600);
	var min = parseInt((cent - hour*3600)/60);
	var sec = parseInt(cent%60);

	if(nextsec != sec){
		cent = nextShowTimeSeconds;
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