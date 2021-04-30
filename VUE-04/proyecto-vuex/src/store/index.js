import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 90,
  },
  mutations: {
    //Siempre se recibe state como parámetro
    aumentar(state) {
      state.total++;
    },
    disminuir(state, cantidad){
      state.total = state.total - cantidad;
    }
  },
  actions: {
    //como crear funciones
    //el primer parámetro SIEMPRE va a ser un objeto del store
    accionAumentar({commit}){
      //pide como primer parámetro primero el nombre de la mutación
      commit('aumentar');
    },
    accionDisminuir({commit}, cantidad){
      commit('disminuir', cantidad);
    },
    accionBoton({commit}, {estado, cantidad}){
      if(estado){
        commit('aumentar');
      }else{
        commit('disminuir', cantidad)
      }
    }
  },
})