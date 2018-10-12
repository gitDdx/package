// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'cube-ui/lib/style.css'
import Cube from 'cube-ui'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
Vue.use(store)
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
Vue.use(Cube)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   } else {
//     document.title = '练习'
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
