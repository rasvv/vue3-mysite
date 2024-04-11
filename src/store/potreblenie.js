import { createStore } from 'vuex'
import { tarifModule } from './modules/tarifModule'
import { potreblenieModule } from './modules/potreblenieModule'



export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tarifModule: tarifModule,
    potreblenieModule: potreblenieModule

  }
})
