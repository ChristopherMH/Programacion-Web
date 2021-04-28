<template>
  <div>
        <TituloPrincipal :texto="pelicula.title" />
        <h5>Año</h5>
        <p>{{pelicula.release_date}}</p>
  </div>
</template>

<script>
import TituloPrincipal from "../components/TituloPrincipal"
export default {
    name: 'DetallePelicula',
    components: {
      TituloPrincipal
    },
    data() {
      return {
        pelicula: {}
      };
    },
    methods: {
      async detallePelicula(){
        try{
          const res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`);
          const data = await res.json();
          console.log(data);
          this.pelicula = data;
        }catch(error){
          console.log(error);
        }
      }
    },
    created() {
      //ya cargó datos y métodos
      this.detallePelicula();
    },
}
</script>

<style>

</style>