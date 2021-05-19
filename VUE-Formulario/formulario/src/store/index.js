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
    },
    UPDATE_TODO(state, todo){
      state.todos.map(t => t.id === todo.id ? todo : t)//si es igual se retorna todo el todo que se está enviando, si no retorna el que ya estaba
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
    },
    updateTodo({commit}, todo){
      commit('UPDATE_TODO', todo);
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
