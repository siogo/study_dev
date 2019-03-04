
var data = {
	name:'zhangzao',
	test:{
		str:'zzz'
	}
}

// 1.首先遍历对象属性

// function observe(object){
// 	if(!object || typeof object !== 'object'){
// 		console.log(object);
// 		return ;
// 	}else{
// 		Object.keys(object).forEach((key)=>{
// 			observe(object[key]);
// 		})
// 	}
// }

// 2.为对象的每个属性添加【访问器属性】

// function defineRactive(object,key,val){
// 	Object.defineProperty(object,key,{
// 		enumerable:true, //可枚举
// 		configurable:false, //不可配置
// 		get:function(){
// 			return val;
// 		},
// 		set:function(newVal){
// 			console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
// 			val = newVal;
// 		}
// 	})
// }

// 1、2步骤结合
// function observe(object){
// 	if(!object || typeof object !== 'object'){
// 		console.log(object);
// 		return ;
// 	}else{
// 		Object.keys(object).forEach((key)=>{
// 			defineRactive(object,key,object[key]);
// 		})
// 	}
// };

// function defineRactive(object,key,val){
// 	observe(val);
// 	Object.defineProperty(object,key,{
// 		enumerable:true, //可枚举
// 		configurable:false, //不可配置
// 		get:function(){
// 			return val;
// 		},
// 		set:function(newVal){
// 			if(val === newVal){
// 				return ;
// 			}else{
// 				console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
// 				val = newVal;
// 			}
// 		}
// 	})
// }
// 到这里更改对象的值能够监测到变化

// 3.添加订阅者
// function Dep(){
// 	this.subs = [];
// }

// Dep.prototype = {
// 	// 添加订阅者
// 	addSub:function(sub){
// 		//为每一个订阅者添加更新方法
// 		sub.update = function(){
// 			console.log('update')
// 		};
// 		this.subs.push(sub);
// 	},
// 	// 消息通知
// 	notify:function(){
// 		this.subs.forEach((sub)=>{
// 			sub.update();
// 		})
// 	}
// }

// 1、2、3步骤合并可得，在值更改的时候，需要通知订阅者值变化
function observe(object){
	if(!object || typeof object !== 'object'){
		return ;
	}else{
		Object.keys(object).forEach((key)=>{
			defineRactive(object,key,object[key]);
		})
	}
};

function defineRactive(object,key,val){
	var dep = new Dep();
	observe(val);
	Object.defineProperty(object,key,{
		enumerable:true, //可枚举
		configurable:false, //不可配置
		get:function(){
			Dep.target && dep.addDep(Dep.target);
			return val;
		},
		set:function(newVal){
			if(val === newVal){
				return ;
			}else{
				console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
				val = newVal;
				dep.notify();
			}
		}
	})
}

function Dep(){
	this.subs = [];
}

Dep.prototype = {
	// 添加订阅者
	addSub:function(sub){
		//为每一个订阅者添加更新方法
		sub.update = function(){
			console.log('update')
		};
		this.subs.push(sub);
	},
	// 消息通知
	notify:function(){
		this.subs.forEach((sub)=>{
			sub.update();
		})
	}
}

function Watcher(){
	this.value = this.get('name');
}

Watcher.prototype = {
	get:function(key){
		Dep.target = this;
		this.value = data[key];
		Dep.target = null;
	}
}


// 添加指令编译compile

function Compile(el){
	if(this.isElementNode(el)){
		this.$el = el;
	}else{
		this.$el = document.querySelector(el);
	}
	if(this.$el){
		this.node2Fragment(this.$el);
	}
}

Compile.prototype = {
	// 各种校验
	isElementNode:function(node){
		return node.nodeType == 1;
	},
	node2Fragment:function(el){
		console.log(el);
		var fragment = document.createDocumentFragment();
		console.log(el.childNodes);
	}
}

var app = new Compile('#mvvm-app');
console.log(app);