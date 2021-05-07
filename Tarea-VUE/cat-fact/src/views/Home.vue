<template>
  <div class="home">
    <Tarjeta v-for="f in facts"
      :key="f._id"
      :texto="f.text"
      :id="f._id"/>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

import Tarjeta from "../components/Tarjeta.vue"

export default {
  name: 'Home',
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['facts'])
  },
  methods: {
    ...mapActions(['getFacts'])
  },
  created() {
    this.getFacts()
  },
}
</script>
