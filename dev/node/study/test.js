let a = {
	s:'sfs',
	tst:function(){
		return s;
	},
	c:{
		test:'aaa',
		d:{
			sbdk:'feffd'
		}
	}
}

let b = {
	ss:'fefg',
	stre:12434
}


// 判断对象是否是字面意义上相等
function isEqu(comA,comB){
	return JSON.stringify(comA) == JSON.stringify(comB);
}

//console.log(isEqu(a,b));

// 遍历对象
function observe(object){
	if(!object || typeof object !== 'object' ){
		console.log(object);
		return ;
	}else{
		Object.keys(object).forEach((key)=>{
			// console.log(object[key])
			observe(object[key]);
		})
	}
}

observe(a);