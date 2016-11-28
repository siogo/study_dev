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
		this.contr = dirControl(this);
	}

	function FOOD(){

	}

	function init(){
		var smallsnake = new SNAKE();
		var headloca = numSuiji(94,5);
		var bbb = numSuiji(49,0);
		for (let i = headloca; i > headloca-5; i--) {
			smallsnake.arr.push($("td[data-coord='"+bbb+","+i+"']"));
		}
		addColor(smallsnake.arr);
		smallsnake.contr;
	}

	function dirControl(obj){
		$(document).keydown(function(event){
		switch (event.keyCode) {
			case (40):
				control(40,obj);
				break;
			case (39):
				control(39,obj);
				break;
			case (38):
				control(38,obj);
				break;
			case (37):
				control(37,obj);
				break;
			}
		});
	}

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

	function numSuiji(num,j){
		return parseInt(Math.floor(Math.random()*num+j));
	}

	function control(dir,obj){
		clearInterval(runTime);
		runTime = setInterval(function(){
			subColor(obj.arr);
			let runCoord = $(obj.arr[0]).attr('data-coord');
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

			obj.arr.unshift($("td[data-coord='"+coordAbs+","+coordOrd+"']"));
			let headCoord = $(obj.arr[0]).attr('data-coord');
			console.log(headCoord);
			if(headCoord == undefined){
				alert(1);
				init();
			}else{
				for (let i = obj.arr.length-1; i > 0; i--) {
					obj.arr[i] = obj.arr[i-1];
				}
				obj.arr.shift();
				addColor(obj.arr);
			}
		},100);
	}

	init();
})


单页纸：70-257mm
连续纸：76.2-254mm
