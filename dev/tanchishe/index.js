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
		this.arr = Array();
		// this.length = '5';
		// 方向2,4,6,8
		this.dir = 6;
	}

	// 24,49
	var smallsnake = new SNAKE();
	var snakehead = $("td[data-coord='24,49']");
	smallsnake.arr.push(snakehead);
	console.log(snakehead.attr('data-coord'));

	if(smallsnake.dir == 6){

	}
	console.log(smallsnake.arr);
})
