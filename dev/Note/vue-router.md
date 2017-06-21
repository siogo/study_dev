# vue-router
* 一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 ```this.$route.params```，可以在每个组件内使用。（即可以通过参数传递取到参数）

* 如果一个页面需要出现同级的视图，可以用多个```router-view```
命名视图，即：
```
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```
