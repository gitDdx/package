// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'cube-ui/lib/style.css'
import Cube from 'cube-ui'
import VueCookie from 'vue-cookie'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(store)
Vue.use(Cube)
Vue.use(VueCookie)

// 使用mock数据
// import Mock from './mock'
// Mock.bootstrap()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
