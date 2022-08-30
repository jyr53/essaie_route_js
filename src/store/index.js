import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  getters: {
    count(state){
      return state.count;}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
