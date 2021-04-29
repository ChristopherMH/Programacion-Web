import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 110,
    suma: 0
  },
  mutations: {
    //Siempre se recibe state como parámetro
    aumentar(state){
      state.total++;
    }
  },
  actions: {
    //como crear funciones
    //el primer parámetro SIEMPRE va a ser un objeto del store
    accionAumentar({commit}){
      //pide como primer parámetro primero el nombre de la mutación
      commit('aumentar')
    }
  },
})
