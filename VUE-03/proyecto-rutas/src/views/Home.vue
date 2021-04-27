<template>
  <div class="home">
    <TituloPrincipal :texto="titulo"/>
    <!-- <TituloPrincipal texto="Título 2"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TituloPrincipal from '../components/TituloPrincipal'
export default {
  name: 'Home',
  components: {
    TituloPrincipal
  },
  data() {
    return {
      titulo: "Home"
    }
  },
}
</script>