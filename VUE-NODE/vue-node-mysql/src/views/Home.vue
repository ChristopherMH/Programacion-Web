<template>
	<div>
		<h1>Personas</h1>
		<b-button variant="primary" to="/agregar">Agregar</b-button>
		<Table :items="personas" :fields="campos" />
	</div>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";
export default {
	name: "Home",
	components: {
		Table,
	},
	data() {
		return {
			campos: [
				{ key: "id", label: "Clave" },
				{ key: "nombre" },
				{
					key: "telefono",
					label: "Teléfono",
					formatter: (value) => {
						return value || "Sin datos";
					},
				},
				{
					key: "direccion",
					label: "Dirección",
					formatter: (value) => {
						return value || "-";
					},
				},
			],
		};
	},
	computed: {
		...mapState(["personas"]),
	},
	methods: {
		...mapActions(["setPersonas"]),
	},
	created() {
		this.setPersonas();
	},
};
</script>
