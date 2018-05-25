// 有奖问答
export default [
  {
    path: '/answerList',
    name: 'answerList',
    component: () => import('@/components/answer/list.vue'),
    children: []
  },
  {
    path: '/answerEdit/:id',
    name: 'answerEdit',
    component: () => import('@/components/answer/edit.vue')
  }
]
