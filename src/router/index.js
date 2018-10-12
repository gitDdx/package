import Vue from 'vue'
import Router from 'vue-router'
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
      component: () => import('@/components/home'),
      children: [
        { // 福利
          path: '/welfare',
          name: 'welfare',
          meta: {
            title: '福利'
          },
          component: () => import('@/components/welfare/index'),
          children: [
            { // 福利详情
              path: 'details/:id',
              name: 'details',
              meta: {
                title: '福利详情'
              },
              component: () => import('@/components/welfare/detail'),
              children: []
            }
          ]
        },
        { // 商家
          path: '/business',
          name: 'business',
          meta: {
            title: '商家'
          },
          component: () => import('@/components/business/index'),
          children: []
        },
        { // 我的
          path: '/my',
          name: 'my',
          meta: {
            title: '我的'
          },
          component: () => import('@/components/my/index'),
          children: []
        }
      ]
    }
  ]
})
