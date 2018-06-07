import Vue from 'vue'
import Router from 'vue-router'
import home from './home/index'
import message from './message/index'
import my from './my/index'

// demo list
Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {path: '', redirect: '/home'},
    { // 首页
      path: '/home',
      name: 'home',
      component: () => import('@/components/home.vue'),
      children: home
    },
    { // 消息
      path: '/message',
      name: 'message',
      component: () => import('@/components/message/index.vue'),
      children: message
    },
    { // 我的
      path: '/my',
      name: 'my',
      component: () => import('@/components/my/index.vue'),
      children: my
    }
  ]
})
