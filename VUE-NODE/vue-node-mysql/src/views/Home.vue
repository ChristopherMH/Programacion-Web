<template>
	<div>
		<h1>Personas</h1>
		<b-button variant="primary" to="/agregar">Agregar</b-button>

		<Table :items="personas" :fields="campos">
			<template slot="actions" slot-scope="{ item }">
				<b-button class="me-1" @click="onEditar(item)">Editar</b-button>
				<b-button @click="onEliminar(item)">Eliminar</b-button>
			</template>
		</Table>
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
				{ key: "actions", label: "Acciones" },
			],
		};
	},
	computed: {
		...mapState(["personas"]),
	},
	methods: {
		...mapActions(["setPersonas"]),
		onEditar(item) {
			console.log("Editar", item.item.id);
			this.$router.push({
				name: "Editar",
				params: {
					id: item.item.id,
				},
			});
		},
		onEliminar(item) {
			console.log("Eliminar", item.item.id);
		},
	},
	created() {
		this.setPersonas();
	},
};
</script>
