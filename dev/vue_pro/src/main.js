// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie';

// import uploader from 'vue-simple-uploader'
// Vue.use(uploader)

Vue.config.productionTip = false

Vue.use(ElementUI)


// 导航守卫
router.beforeEach((to,from,next)=>{
  if (Cookies.get('Token')){
    next()
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next({ path: '/login' })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
