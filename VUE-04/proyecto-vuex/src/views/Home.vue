<template>
  <div class="home">
    <h2 :style="colorTotal"> Total: {{ total }}</h2>
    <br>
    <button class="btn btn-primary me-1" @click="accionAumentar">Aumentar</button>
    <BotonDisminuir :cantidad="2" />
    <hr>
    <BotonAccion class="me-1" :estado="true"/>
    <BotonAccion :estado="false"/>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import BotonDisminuir from '../components/BotonDisminuir'
import BotonAccion from '../components/BotonAccion'

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  computed: {
    //Mapear el state SIEMPRE en computed.
    ...mapState(["total"]),
    colorTotal(){
      return this.total >= 100 ? {'color': 'green'} : {'color': 'red'};
    }
  },
  methods: {
    //mapMutations siempre va aquí en methods
    ...mapMutations(["aumentar"]),//no hacer esto
    ...mapActions(['accionAumentar'])
  },
}
</script>