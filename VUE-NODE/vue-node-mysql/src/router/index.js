import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Agregar from "../views/Agregar";
import Editar from "../views/Editar";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/agregar",
		name: "Agregar",
		component: Agregar,
	},
	{
		path: "/editar/:id",
		name: "Editar",
		component: Editar,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
