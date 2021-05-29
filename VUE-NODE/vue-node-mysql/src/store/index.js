import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		personas: [],
		persona: {},
	},
	mutations: {
		SET_PERSONAS(state, personas) {
			state.personas = personas;
		},
		SET_PERSONA(state, persona) {
			state.persona = persona;
		},
	},
	actions: {
		setPersonas({ commit }) {
			axios.get("http://localhost:3000/").then((response) => {
				commit("SET_PERSONAS", response.data);
			});
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
	},
	modules: {},
});
