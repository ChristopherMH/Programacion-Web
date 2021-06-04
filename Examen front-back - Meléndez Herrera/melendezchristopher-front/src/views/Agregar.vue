<template>
	<div>
		<h1>Agregar Auto</h1>
		<b-form @submit.prevent="guardarAuto()">
			<Input
				v-model="auto.modelo"
				id="modelo"
				titulo="Modelo"
				placeholder="Ingrese el Modelo"
				:maxlength="50"
				:error="erroresValidacion && !validacionModelo"
				mensajeError="Es necesario ingresar el modelo"
				class="mb-2"
			/>
			<Input
				v-model="auto.marca"
				id="marca"
				titulo="Marca"
				:maxlength="60"
				:error="erroresValidacion && !validacionMarca"
				placeholder="Ingrese la marca"
				mensajeError="Es necesario ingresar la marca"
				class="mb-2"
			/>
			<Input
				v-model="auto.anio"
				id="anio"
				titulo="Año"
				:maxlength="4"
				:error="erroresValidacion && !validacionAnio"
				mensajeError="Es necesario ingresar el año"
				placeholder="Ingrese el año"
			/>
			<Input
				v-model="auto.color"
				id="color"
				titulo="Color"
				:maxlength="20"
				mensajeError="La longitud máxima es de 20 caracteres"
				placeholder="Ingrese el color"
			/>
			<b-button type="submit" class="mt-2" variant="primary"
				>Guardar</b-button
			>
		</b-form>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
	name: "Agregar",
	components: {
		Input,
	},
	data() {
		return {
			auto: {
				modelo: "",
				marca: "",
				anio: "",
				color: "",
			},
			erroresValidacion: false,
		};
	},
	computed: {
		validacionModelo() {
			return (
				this.auto.modelo !== undefined && this.auto.modelo.trim() !== ""
			);
		},
		validacionMarca() {
			return (
				this.auto.marca !== undefined && this.auto.marca.trim() !== ""
			);
		},
		validacionAnio() {
			return this.auto.anio !== undefined && this.auto.anio.trim() !== "";
		},
	},
	methods: {
		...mapActions(["crearAuto"]),
		guardarAuto() {
			if (
				this.validacionAnio &&
				this.validacionMarca &&
				this.validacionModelo
			) {
				this.erroresValidacion = false;

				//Guardar
				this.crearAuto({
					//pudiera ser también si tenemos en el mismo orden en el objeto de persona a como se enviará a la BD
					//params: this.persona
					params: {
						modelo: this.auto.modelo,
						marca: this.auto.marca,
						anio: this.auto.anio,
						color: this.auto.color,
					},
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
};
</script>

<style></style>
