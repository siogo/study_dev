import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
Vue.use(Vuex)

const state = {
    count: 0,
    title: 'vuex',
    todos:[
        {id:1,text:'...',done:true},
        {id:2,text:'...',done:false}
    ],
    START_PARMA: {}
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})