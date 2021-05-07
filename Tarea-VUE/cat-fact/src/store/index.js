import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts: [],
    detalle: null,
    randomFact: null
  },
  mutations: {
    SET_FACTS(state, facts){
      state.facts = facts;
    },
    SET_DETALLE(state, detalle){
      state.detalle = detalle;
    },
    SET_RandomFact(state, randomFact){
      state.randomFact = randomFact;
    }
  },
  actions: {
    getFacts({commit}){
      axios.get('https://cat-fact.herokuapp.com/facts')
      .then(response =>{
        commit('SET_FACTS', response.data)
      })
      .catch(error => console.error());
    },
    getDetalle({commit}, id){
      axios.get(`https://cat-fact.herokuapp.com/facts/${id}`)
      .then(response => {
        commit('SET_DETALLE', response.data)
      })
      .catch(error => console.error())
    },
    getRandomFact({commit}){
      axios.get('https://cat-fact.herokuapp.com/facts/random')
      .then(response =>{
        commit('SET_RandomFact', response.data)
      })
      .catch(error => console.error());
    }
  },
  modules: {
  }
})
