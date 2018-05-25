import Vue from 'vue'
import Router from 'vue-router'
// demo list
import answer from './answer/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '', redirect: '/index'},
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/home.vue'),
      children: []
    },
    ...answer
  ]
})
