import router from '../../router'

export default {
  states: {
    // 存放组件之间的共享数据
    count: 0
  },
  mutations: {
    // 显示更改states里的数据
    mutationName (state) { state.count = 100 }
  },
  getters: {
    // 获取数据的方法
    strLength: state => state.aString.length
  },
  actions: {
    // mutations的加强版，可异步操作
    go ({commit}, [name, id, query] = []) {
      !name ? router.back() : router.push({
        name,
        params: typeof id === 'object' ? id : {id},
        query
      })
    },
    mutationName ({ commit }) {
      commit('mutationName')
    }
  }
}
