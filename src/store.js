import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contents: [],
    theContents: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    contents: state => {
      return state.theContents
    }
  }
})
