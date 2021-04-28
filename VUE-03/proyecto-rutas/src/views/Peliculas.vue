<template>
  <div class="m-4">
     <TituloPrincipal texto="Películas"/>
     <Tarjeta
        v-for="p in peliculas"
        :key="p.id"
        :titulo="p.title"
        :id="p.id"
      />
  </div>
</template>

<script>
import TituloPrincipal from "../components/TituloPrincipal";
import Tarjeta from "../components/Tarjeta";

export default {
	components: {
		TituloPrincipal,
		Tarjeta
	},
	data() {
		return {
			peliculas: []		
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
