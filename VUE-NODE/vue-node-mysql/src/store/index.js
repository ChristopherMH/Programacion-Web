import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		personas: [],
		persona: {},
		loading: false,
	},
	mutations: {
		SET_PERSONAS(state, personas) {
			state.personas = personas;
		},
		SET_PERSONA(state, persona) {
			state.persona = persona;
		},
		SET_LOADING(state, payload) {
			state.loading = payload;
		},
	},
	actions: {
		setPersonas({ commit }) {
			commit("SET_LOADING", true);
			axios
				.get("http://localhost:3000/")
				.then((response) => {
					commit("SET_PERSONAS", response.data);
				})
				.finally(() => commit("SET_LOADING", false));
		},
		crearPersona({ commit }, { params, onComplete, onError }) {
			axios
				.post("http://localhost:3000/", params)
				.then(onComplete)
				.catch(onError);
		},
		obtenerPersona({ commit }, { id, onComplete, onError }) {
			axios
				.get(`http://localhost:3000/${id}`)
				.then((response) => {
					commit("SET_PERSONA", response.data.data);
					onComplete(response);
				})
				.catch(onError);
		},
		editarPersona({ commit }, { id, params, onComplete, onError }) {
			axios
				.put(`http://localhost:3000/${id}`, params)
				.then(onComplete)
				.catch(onError);
		},
		eliminarPersona({ commit }, { id, onComplete, onError }) {
			axios
				.delete(`http://localhost:3000/${id}`)
				.then(onComplete)
				.catch(onError);
		},
	},
	modules: {},
});
