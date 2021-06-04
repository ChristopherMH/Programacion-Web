<template>
	<div>
		<h1>Autos</h1>
		<b-button variant="primary" to="/agregar">Agregar</b-button>
		<Table :items="autos" :fields="campos">
			<!-- <template slot="actions" slot-scope="{ item }">
				<b-button @click="onEliminar(item)">Eliminar</b-button>
			</template> -->
		</Table>
	</div>
</template>

<script>
import Table from "../components/Table.vue";
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
				{ key: "modelo", label: "Modelo" },
				{ key: "marca", label: "Marca" },
				{ key: "anio", label: "Año" },
				{
					key: "color",
					label: "Color",
					formatter: (value) => {
						return value || "Sin datos";
					},
				},
			],
		};
	},
	computed: {
		...mapState(["autos"]),
	},
	methods: {
		...mapActions(["setAutos"]),
	},
	created() {
		this.setAutos();
	},
};
</script>
