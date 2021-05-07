<template>
  <div class="contenedor">
      <h1>Mi dato random</h1>
      <button class="btn btn-primary" @click="getRandomFact" type="button">Obtener info</button>
      <hr>
      <TarjetaRandom v-if="randomFact" :type="randomFact.type" :text="randomFact.text" :status="randomFact.status.verified"/>
  </div>
</template>

<script>

import TarjetaRandom from '../components/TarjetaRandom.vue'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'Random',
    components: {
        TarjetaRandom
    },
    methods: {
        ...mapActions(['getRandomFact'])
    },
    computed: {
        ...mapState(['randomFact'])
    }
}
</script>

<style>

.contenedor{
    margin: 30px 60px;
}

h1{
    margin-bottom: 30px;
}

.btn{
    margin-bottom: 10px;
}

</style>