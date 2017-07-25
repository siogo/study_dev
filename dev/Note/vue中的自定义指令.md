

# 关于vue.js的自定义指令

——写于2017.07.02

## 提出需求
首先关于这个问题是因为在做项目的过程中，遇到一个提交表单，需要验证表单然后聚焦元素，通过查资料发现能够使用vuejs中的自定义指令。

## 查阅资料
通过官网给出的信息发现

> 有的情况下,你仍然需要对纯 DOM 元素进行底层操作,这时候就会用到自定义指令。

官网给出的实例代码：

```javascript
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

此实例刚好能够解决需求，但是发现一个问题所在，即：虽然这个实例能够聚焦一个元素的焦点，但是并不是按着需要添加聚集焦点，所以又继续趴到一些网上给的资料，然后发现了这样一串代码：

````html
html：
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
````

```javascript
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```

然后观察了一下发现自定义指令是能够添加数据进去，比官网的第一个实例要来的高级。然后继续返回查看官网的文档又发现一个知识点。

> 指令定义函数提供了几个钩子函数（可选）：
>
> - `bind`: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
> - `inserted`: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
> - `update`: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
> - `componentUpdated`: 被绑定元素所在模板完成一次更新周期时调用。
> - `unbind`: 只调用一次， 指令与元素解绑时调用。
>
> 接下来我们来看一下钩子函数的参数 (包括 `el`，`binding`，`vnode`，`oldVnode`) 。
>
> 钩子函数被赋予了以下参数：
>
> - **el**: 指令所绑定的元素，可以用来直接操作 DOM 。
> - **binding**: 一个对象，包含以下属性：**name**: 指令名，不包括 `v-` 前缀。**value**: 指令的绑定值， 例如： `v-my-directive="1 + 1"`, value 的值是 `2`。**oldValue**: 指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。**expression**: 绑定值的字符串形式。 例如 `v-my-directive="1 + 1"` ， expression 的值是 `"1 + 1"`。**arg**: 传给指令的参数。例如 `v-my-directive:foo`， arg 的值是 `"foo"`。**modifiers**: 一个包含修饰符的对象。 例如： `v-my-directive.foo.bar`, 修饰符对象 modifiers 的值是 `{ foo: true, bar: true }`。
> - **vnode**: Vue 编译生成的虚拟节点，查阅 [VNode API](https://cn.vuejs.org/v2/api/#VNode接口) 了解更多详情。
> - **oldVnode**: 上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

然后官网文档给出了第二个自定义指令的实例：

```html
<div id="hook-arguments-example" v-demo:hello.a.b="message"></div>
```

```javascript
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})
new Vue({
  el: '#hook-arguments-example',
  data: {
    message: 'hello!'
  }
})
```

阅读代码发现*binding*这个对象包含的东西还比较多，根据文档对应。所以提出了一个思路，找到机会实际操作一下

## 思路

于是首先我写了一个自定义指令：

```html
<input type="input" v-model="searchMsg" v-focus="{'isfocus':isfocus}"><button @click="search">搜索</button>

<button @click="changefocus()">取消</button> 
```

```javascript
data(){
	return{
    	isfocus:0,
    }
},
methods:{
  	changefocus(){
    	if(this.isfocus == 1){
        	this.isfocus = 0;
        }else{
        	this.isfocus = 1;
        }
    }
},
// 添加自定义的指令
directives:{
	focus:{
		update: function (el,binding) {
			// 聚焦元素
			// console.log(binding);
			if(binding.value.isfocus == '1'){
				console.log(1);
				// console.log(binding)
			}else{
				console.log(0);
				// console.log(binding)
			}         
		}
	}
}
```

通过一个Botton来控制切换*isfocus*，此为是否聚焦的控制器，然后自定义指令中通过update事件来控制每次点击botton之后的刷新，然后通过打印*binding*发现能够拿到绑定在html中的数据。

<img src="http://optmvphrh.bkt.clouddn.com/image/png/vuedirective.png">

所以我想是否能够通过这种机制去控制显示。so，需要实践。

## 实践

----未完待续