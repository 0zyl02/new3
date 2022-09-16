import Vue from 'vue'
import App from './App.vue'
// 引入router
import VueRouter from 'vue-router'
// 引入axios模块
import axios from 'axios'
import myRouter from './router'


// 使用VueRouterxs
Vue.use(VueRouter)
// 实例化VueRouter
const router = new VueRouter({
  mode: "history",
  routes: myRouter
})

Vue.config.productionTip = false
// axios可以配置全局根路径
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"

// 配置Vue原型(在任何组件中都可以使用全局的axios请求)
Vue.prototype.$axios = axios;
// 使用    this.$axios


// 封装自定义全局指令(三种：无参数/有参数/还有一个)
// 无参数
// Vue.directive("rainBow", {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })

// 有参数
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    // 是否有  例如v-on:click里边的click
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = '20px'
    }
  }
})

// // 自定义全局过滤器   第一个参数为名字,第二个参数是回调(|前边的值)
// Vue.filter("to-uppercase", value => {
//   return value.toUpperCase();
// })

// z自定义全局过滤器(博客内容只显示100个字符，剩下的显示。。。)
Vue.filter("snippet", value => {
  return value.slice(0, 100) + "。。。";
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
