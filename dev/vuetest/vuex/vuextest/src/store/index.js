import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getter.js'

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		count: 0
	},
	getter,
})

export default store;