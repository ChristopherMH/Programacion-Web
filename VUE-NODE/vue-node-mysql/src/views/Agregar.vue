<template>
	<div>
		<h1>Agregar Persona</h1>
		<b-form @submit.prevent="guardarPersona()">
			<Input
				v-model="persona.nombre"
				id="nombre"
				titulo="Nombre"
				placeholder="Ingrese el nombre"
				maxlength="50"
				mensajeError="Es necesario ingresar el nombre"
			/>
			<Input
				v-model="persona.telefono"
				id="telefono"
				titulo="Telefono"
				maxlength="10"
				placeholder="Ingrese el telefono"
			/>
			<Input
				v-model="persona.direccion"
				id="direccion"
				titulo="Dirección"
				maxlength="150"
				placeholder="Ingrese la dirección"
			/>
			<b-button type="submit" class="mt-2" variant="primary"
				>Guardar</b-button
			>
		</b-form>
	</div>
</template>

<script>
import Input from "../components/Input";
export default {
	name: "Agregar",
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
		};
	},
	methods: {
		guardarPersona() {},
	},
};
</script>

<style></style>
