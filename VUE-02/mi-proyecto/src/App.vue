<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Componente HelloWorld -->
    <HelloWorld :msg="titulo" fecha="22-abril-2021"/> 
    <!-- :msg como si fuera en JS, toma el titulo de data -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld2 from './components/HelloWorld.vue' 

export default {
  name: 'App',
  components: {
    HelloWorld
    // ,HelloWorld2 por si fuera necesario el tener segundo import
  },
  data() {
    return {
      // Este titulo
      titulo: "Mi título en Vue"
    }
  },
  methods: {
    
  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
