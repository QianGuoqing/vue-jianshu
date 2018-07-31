import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    animationClass: ''
  },
  mutations: {
    setSearchAnimation(state, payload) {
      state.animationClass = payload.classname
    }
  }
})

export default store