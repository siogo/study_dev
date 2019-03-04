function Watcher(vm,exp,cb){	//vm:传入作用域、exp属性、cb回调函数
	this.vm = vm;
	this.exp = exp;
	this.cb = cb;
	// 使用get将自己存入Dep的subs中
	this.value = this.get();
}

Watcher.prototype = {
	update:function(){
		this.run();
	},
	run:function(){
		var newValue = this.vm.data[this.exp];
		var oldValue = this.value;
		if(newValue != oldValue){
			this.value = newValue;
			// 在传入的作用域和回调函数中使用newValue和oldValue
			this.cb.call(this.vm,newValue,oldValue);
		}
	},
	get:function(){
		Dep.target = this;
		var value = this.vm.data[this.exp];
		Dep.target = null;
		return value;
	}
}