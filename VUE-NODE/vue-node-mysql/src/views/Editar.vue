<template>
	<div>
		<h1>Editar</h1>
		<b-form @submit.prevent="guardarPersona()">
			<Input
				v-model="persona.nombre"
				id="nombre"
				titulo="Nombre"
				placeholder="Ingrese el nombre"
				:maxlength="50"
				:error="erroresValidacion && !validacionNombre"
				mensajeError="Es necesario ingresar el nombre"
				class="mb-2"
			/>
			<Input
				v-model="persona.telefono"
				id="telefono"
				titulo="Telefono"
				:maxlength="10"
				placeholder="Ingrese el telefono"
				class="mb-2"
			/>
			<Input
				v-model="persona.direccion"
				id="direccion"
				titulo="Dirección"
				:maxlength="150"
				:error="erroresValidacion && !validacionDireccion"
				placeholder="Ingrese la dirección"
			/>
			<b-button type="submit" class="mt-2" variant="primary"
				>Guardar</b-button
			>
		</b-form>
	</div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import Input from "../components/Input";
export default {
	name: "Editar",
	components: {
		Input,
	},
	data() {
		return {
			persona: {
				nombre: "",
				direccion: "",
				telefono: "",
			},
			erroresValidacion: false,
		};
	},
	computed: {
		validacionNombre() {
			return (
				this.persona.nombre !== undefined &&
				this.persona.nombre.trim() !== ""
			);
		},
		validacionDireccion() {
			return (
				this.persona.direccion !== undefined &&
				this.persona.direccion.trim() !== ""
			);
		},
	},
	methods: {
		...mapActions(["obtenerPersona", "editarPersona"]),
		guardarPersona() {
			if (this.validacionNombre && this.validacionDireccion) {
				this.erroresValidacion = false;
				//Guardar
				this.editarPersona({
					id: this.$route.params.id,
					params: this.persona,
					onComplete: (response) => {
						console.log(response.data);
						this.$notify({
							type: "success",
							title: response.data.mensaje,
						});
						this.$router.push({
							name: "Home",
						});
					},
					onError: (error) => {
						console.log(error.response.data.mensaje);
						this.$notify({
							type: "error",
							title: error.response.data.mensaje,
						});
					},
				});
			} else {
				this.erroresValidacion = true;
			}
		},
	},
	created() {
		this.obtenerPersona({
			id: this.$route.params.id,
			onComplete: (response) => {
				Vue.set(this, "persona", response.data.data);
			},
		});
	},
};
</script>

<style></style>
