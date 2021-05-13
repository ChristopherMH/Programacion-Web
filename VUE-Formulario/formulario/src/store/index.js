import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    todos: [],
    todo:{
      id: null,
      nombre: "",
      tipo: [],
      prioridad: "",
      horas: 0
    }
  },
  mutations: {
    SET_TODOS(state, todo){
      state.todos.push(todo)
    }
  },
  actions: {
    setTodos({commit}, todo){
      commit('SET_TODOS', todo);
    }
  },
  modules: {
  }
})
