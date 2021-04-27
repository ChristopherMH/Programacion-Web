<template>
	<div>
		<!-- <button @click="consumirPeliculas">Buscar películas</button> -->
		<TituloPrincipal texto="PELÍCULAS" />
		<div
		v-for="p in peliculas"
		:key="p.id">
			{{p.title}}
		</div>
	</div>
</template>

<script>
import TituloPrincipal from "../components/TituloPrincipal";
export default {
	components: {
		TituloPrincipal,
	},
	data() {
		return {
			peliculas: [

			]		
		}
	},
	methods: {
		//una forma de hacerlo
		// consumirPeliculas(){
		// 	fetch('https://ghibliapi.herokuapp.com/films')
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log("fecth", data);
		// 	})
		// 	.catch(error => console.log(error));
		// }

		//segunda forma
		async consumirPeliculas(){
			try{
				const res = await fetch('https://ghibliapi.herokuapp.com/films');
				const data = await res.json();
				console.log(data);
				this.peliculas = data;
			}catch(error){
				console.log(error)
			}
		}
	},
	created() {
		this.consumirPeliculas();
	},
};
</script>

<style></style>
