<template>
	<div>
		<h1>Personas</h1>
		<b-button variant="primary" to="/agregar">Agregar</b-button>

		<Table :items="personas" :fields="campos" :busy="loading">
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
		...mapState(["personas", "loading"]),
	},
	methods: {
		...mapActions(["setPersonas", "eliminarPersona"]),
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
			this.$bvModal
				.msgBoxConfirm("Esta opción no se puede deshacer.", {
					title: "Eliminar Persona",
					size: "sm",
					buttonSize: "sm",
					okVariant: "danger",
					okTitle: "Aceptar",
					cancelTitle: "Cancelar",
					footerClass: "p-2",
					centered: true,
				})
				.then((value) => {
					if (value) {
						this.eliminarPersona({
							id: item.item.id,
							onComplete: (response) => {
								this.$notify({
									type: "success",
									title: response.data.mensaje,
								});
								setTimeout(() => this.setPersonas(), 1000);
							},
						});
					}
				})
				.catch((err) => {
					// An error occurred
				});
		},
	},
	mounted() {
		this.setPersonas();
	},
};
</script>
