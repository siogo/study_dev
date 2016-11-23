$(document).ready(function(){
	// 创建场地
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
		this.length = 5;
		// 方向2,4,6,8
		this.dir = 6;
	}

	// 24,49
	// 蛇初始化
	var smallsnake = new SNAKE();
	var snakehead = $("td[data-coord='24,49']");
	snakehead.attr("data-head",'yes');
	snakehead.css("background-color", '#000');
	console.log(snakehead.attr('data-coord'));

	if(smallsnake.dir == 6){
		for (let i = 49; i > 44; i--) {
			$("td[data-coord='24,"+i+"']").css("background-color","#000");
		}
	}

	// var runTime = setInterval(function(){
	// 	$('td').css("background-color","#fff");
	// 	let runCoord = $("td[data-head='yes']").attr('data-coord');
	// 	let splitStr = runCoord.split(',');
	// 	let coordAbs = parseInt(splitStr[0]);
	// 	let coordOrd = parseInt(splitStr[1]);
	// 	coordOrd = coordOrd+1;
	// 	$("td[data-head='yes']").removeAttr("data-head");
	// 	if(smallsnake.dir == 6){
	// 		$('td').css("background-color","#fff");
	// 		for (let i = coordOrd; i > coordOrd-5; i--) {
	// 			$("td[data-coord='"+coordAbs+","+i+"']").css("background-color","#000");
	// 		}
	// 		$("td[data-coord='"+coordAbs+","+coordOrd+"']").attr("data-head",'yes');
	// 	}
	// },1000);


// 37zuo  39you  38shang  40xia
	$(document).keydown(function(event){
		if(event.keyCode == 37){

		}
		console.log(event.keyCode);
	});
})
