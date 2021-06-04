import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		autos: [],
	},
	mutations: {
		SET_AUTOS(state, autos) {
			state.autos = autos;
		},
	},
	actions: {
		setAutos({ commit }) {
			axios.get("http://localhost:3000/").then((response) => {
				commit("SET_AUTOS", response.data);
			});
		},
		crearAuto({ commit }, { params, onComplete, onError }) {
			axios
				.post("http://localhost:3000/", params)
				.then(onComplete)
				.catch(onError);
		},
	},
	modules: {},
});
