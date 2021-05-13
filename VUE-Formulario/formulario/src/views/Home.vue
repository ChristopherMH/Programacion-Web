<template>
  <div class="home">
    <h1>Mis ToDos</h1>
    <router-link to="/agregar" class="btn btn-dark float-right">Agregar</router-link>
    <div>
      <Table/>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import Table from '../components/Table'

export default {  
  name: 'Home',
  components: {
    Table
  },
  computed: {
    ...mapState(["todos"])
  },
}
</script>
