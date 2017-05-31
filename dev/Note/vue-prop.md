# vue父子组件通信

## props属性

父组件通过使用 *v-bind* 属性将需要通信传递的值绑定到子组件：
```
    <textcom :fatherMessage="message"></textcom>
```
子组件通过使用 *props* 属性接受父组件传递过来的值：
各种props传递值的方式：
```
    props: {
    // 基础类型检测 （`null` 意思是任何类型都可以）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组／对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
```
此例为：
```
    props:{
        fatherMessage:{
            type: Object
        }
    }
```
传递过来的数据能够直接在子组件中使用：
in child.vue：
```
    <p>{{fatherMessage}}</p>
```
