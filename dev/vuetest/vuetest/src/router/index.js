import Vue from 'vue'
import Router from 'vue-router'
import user from '../components/user/user.vue'
import test from '../components/user/test.vue'
import foo from '../components/user/foo.vue'

Vue.use(Router)

export default new Router({
    routes:[
		{path:'/user/:id',component:user},
		{path:'/test',component:test}
	]
})

