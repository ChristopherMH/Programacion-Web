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
    },
    DELETE_TODO(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    OBTENER_TODO(state, id){
      state.todo = state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    setTodos({commit}, todo){
      commit('SET_TODOS', todo);
    },
    deleteTodo({commit}, id){
      commit('DELETE_TODO', id);
    },
    obtenerTodo({commit}, id){
      commit('OBTENER_TODO', id);
    }
  },
  getters:{
    singleTodo: state =>{
      return state.todo;
    }
  },
  modules: {
  }
})
