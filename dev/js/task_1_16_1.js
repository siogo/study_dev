window.onload = function(){
	var cityinput = document.getElementById('aqi-city-input');
	var valueinput = document.getElementById('aqi-value-input');
	var addbtn = document.getElementById('add-btn');
	var aqitable = document.getElementById('aqi-table');

	// 创建数组
	var aqiData = new Array();
	addbtn.onclick = function(){
		var cityvalue = cityinput.value;
		var airvalue = valueinput.value;
		addAqiData(cityvalue,airvalue);
		renderAqiList();
	}

	function addAqiData(x,y){
		var str = x+":"+y;
		aqiData.push(str);
	}

	function renderAqiList(){
		var lastarray = aqiData[aqiData.length-1];
		var spstr = lastarray.split(':');
		// "<tr><td>"+spstr[0]+"</td><td>"+spstr[1]+"</td><td><button>删除</button></td>";
		aqitable.appendChild("ttt");
	}
}