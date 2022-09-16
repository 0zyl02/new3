import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import isLogin from './modules/isLogin'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        isLogin, user, menu
    }
})
