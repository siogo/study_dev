function observe(data){
	if(!data || typeof data !== 'object'){
		return ;
	}else{
		Object.keys(data).forEach((key)=>{
			defineRactive(data,key,data[key])
		})
	}
}

function defineRactive(data,key,value){
	observe(data[key]);
	var dep = new Dep();
	Object.defineProperty(data,key,{
		enumerable:true,
		configurable:true,
		get:function(){
			// 为每个属性都添加watcher
			// 当watcher初始化的时候回获取一次属性的值，此时会把watcher实例添加进来
			if(Dep.target){
				dep.addSub(Dep.target);
			}
			return value;
		},
		set:function(val){
			if(value === val){
				return ;
			}else{
				value = val;
				dep.notify();
			}
		}
	})
}

// 消息订阅器（订阅者集合即watcher集合）
function Dep(){
	this.subs = []
}

Dep.prototype = {
	addSub:function(sub){
		this.subs.push(sub);
	},
	notify:function(){
		this.subs.forEach((sub)=>{
			sub.update();
		})
	}
}