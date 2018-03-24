import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/test/test.vue'
import Login from '@/components/login/login.vue'
import navBar from '@/components/base/navBar.vue'
import proList from '@/components/proList/proList.vue'
import newPro from '@/components/proList/newPro.vue'
import proDetail from '@/components/proList/proDetail.vue'
import addPro from '@/components/proList/addPro.vue'
import exhibitsDetail from '@/components/proList/exhibitsDetail.vue'
import myproject from '@/components/myproject/myproject.vue'
import personInfo from '@/components/personInfo/personInfo.vue'
import home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'navBar',
            component: navBar,
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: home,
            component: home,
            redirect: 'home/prolist',
            children: [{
                    path: 'myproject',
                    name: '我的项目',
                    component: myproject,
                    nav: true
                },
                {
                    path: 'personInfo',
                    name: '个人资料',
                    component: personInfo,
                    nav: true
                },
                {
                    path: 'prolist',
                    name: '创建项目',
                    component: proList,
                    nav: true
                },
                {
                    path: 'newPro',
                    name: 'newPro',
                    component: newPro,
                    nav: false
                },
                {
                    path: 'addPro',
                    name: 'addPro',
                    component: addPro,
                    nav: false
                },
                {
                    path: 'exhibitsDetail/:id',
                    name: 'exhibitsDetail',
                    component: exhibitsDetail,
                    nav: false
                },
                {
                    path: 'proDetail/:id',
                    name: 'proDetail',
                    component: proDetail,
                    nav: false
                },
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})