$(document).ready(function(){
	// 创建场地
	var tablecont = $('#container');
	var atr = "<tr></tr>";
	var atd = "<td></td>";
	for (let i = 0; i < 50; i++) {
		tablecont.append(atr);
		for (let j = 0; j < 100; j++) {
			var lastchild = tablecont.children('tr:last');
			lastchild.append(atd);
		}
	}

	function SNAKE(){
		this.lenght = '5';
		this.dir = '0';
	}
})
