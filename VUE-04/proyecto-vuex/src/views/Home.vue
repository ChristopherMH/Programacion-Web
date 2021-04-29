<template>
  <div class="home">
    <p>Total: {{$store.state.total}}</p>
    <br>
    <button @click="accionAumentar">Aumentar</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    //Mapear el state SIEMPRE en computed.
    ...mapState(["total"])
  },
  methods: {
    //mapMutations siempre va aquí en methods
    ...mapMutations(["aumentar"]),//no hacer esto
    ...mapActions(['accionAumentar'])
  },
}
</script>
