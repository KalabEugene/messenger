import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import auth from './modules/auth'
import common from './modules/common'
import wayforpay from './modules/wayforpay'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        posts,
        auth,
        common,
        wayforpay
    }
})