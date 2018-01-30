import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter.js'
import user from './modules/user'
import product from './modules/product'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        user,
        product
    },
    getters
})

export default store