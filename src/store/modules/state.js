import router from '../../router'

export default {
  states: {
    // 存放组件之间的共享数据
    count: 0
  },
  mutations: {
    // 显示更改states里的数据
    increment (state) {
      state.count++
    }
  },
  getters: {
    // 获取数据的方法
    countAdd: function (state) {
      return state.count++
    }
  },
  actions: {
    // mutations的加强版，可异步操作
    go ({commit}, [name, id, query] = []) {
      !name ? router.back() : router.push({
        name,
        params: typeof id === 'object' ? id : {id},
        query
      })
    }
  }
}
