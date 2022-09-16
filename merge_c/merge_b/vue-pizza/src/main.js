import Vue from 'vue'
import App from './App.vue'
// 引入router
import VueRouter from 'vue-router'
import myRouter from './router'
import store from './store/index'
import axios from 'axios'


// 使用VueRouterxs
Vue.use(VueRouter)
// 实例化VueRouter
const router = new VueRouter({
  mode: "history",
  routes: myRouter
})

Vue.prototype.$axios = axios
axios.defaults.baseURL = "https://wd4782151544jfcwop.wilddogio.com/"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
