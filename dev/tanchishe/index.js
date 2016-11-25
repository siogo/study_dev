$(document).ready(function(){
	// 创建场地
	var coordAbs,coordOrd,runTime;
	var tablecont = $('#container');
	var atr = "<tr></tr>";
	var atd = "<td data-coord=''></td>";
	for (let i = 0; i < 50; i++) {
		tablecont.append(atr);
		for (let j = 0; j < 100; j++) {
			var lastchild = tablecont.children('tr:last');
			lastchild.append(atd);
			lastchild.children('td:last').attr('data-coord',i+','+j);
		}
	}

	function SNAKE(){
		this.arr = Array();
		this.dir = 6;
	}

	// 24,49
	// 蛇初始化
	var smallsnake = new SNAKE();

	if(smallsnake.dir == 6){
		for (let i = 49; i > 44; i--) {
			// $("td[data-coord='24,"+i+"']").css("background-color","#000");
			smallsnake.arr.push($("td[data-coord='24,"+i+"']"));
		}
	}
	addColor(smallsnake.arr);

// 37zuo  39you  38shang  40xia
	$(document).keydown(function(event){
		switch (event.keyCode) {
			case (40):
				control(40);
				break;
			case (39):
				control(39);
				break;
			case (38):
				control(38);
				break;
			case (37):
				control(37);
				break;
		}
	});

	function addColor(obj){
		for (let i = 0; i < obj.length; i++) {
			$(obj[i]).css("background","#000");
		}
	}

	function subColor(obj){
		for (let i = 0; i < obj.length; i++) {
			$(obj[i]).css("background","#fff");
		}
	}

	function strSplit(obj,num){
		let splitStr = obj.split(',');
		let coordAbs = parseInt(splitStr[0]);
		let coordOrd = parseInt(splitStr[1]);
		if(num == 1){
			return coordOrd;
		}
		if(num == 0){
			return coordAbs;
		}
	}

	function numSuiji(num){
		return parseInt(Math.floor(Math.random()*num));
	}

	console.log(numSuiji(99));

	function control(dir){
		clearInterval(runTime);
		runTime = setInterval(function(){
			subColor(smallsnake.arr);
			let runCoord = $(smallsnake.arr[0]).attr('data-coord');
			coordAbs = strSplit(runCoord,0);
			coordOrd = strSplit(runCoord,1);
			switch (dir) {
				case (40):
					coordAbs = coordAbs+1;
					break;
				case (39):
					coordOrd = coordOrd+1;
					break;
				case (38):
					coordAbs = coordAbs-1;
					break;
				case (37):
					coordOrd = coordOrd-1;
					break;
			}
			if(coordOrd==101){
				alert(1);
				clearInterval(runTime);
			}else if(coordOrd==-1){
				alert(1);
				clearInterval(runTime);
			}else if(coordAbs==-1){
				alert(1);
				clearInterval(runTime);
			}else if(coordAbs==51){
				alert(1);
				clearInterval(runTime);
			}else{
				smallsnake.arr.unshift($("td[data-coord='"+coordAbs+","+coordOrd+"']"));
				for (let i = smallsnake.arr.length-1; i > 0; i--) {
					smallsnake.arr[i] = smallsnake.arr[i-1];
				}
				smallsnake.arr.shift();
				addColor(smallsnake.arr);
			}
		},100);
	}
})
