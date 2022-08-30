import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    courses: ["carotte", "salade", "phisalis"],
  },
  getters: {
    count(state) {
      return state.count;
    }
  },
  mutations: {
    add2course( state , element) {
      state.courses.push(element)
    }
  },
  actions: {
  },
  modules: {
  }
})
