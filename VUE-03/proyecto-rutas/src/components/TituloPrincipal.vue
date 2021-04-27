<template>
  <div>
      <!-- Reutilizar un componente -->
      <h1>{{texto}}</h1>
  </div>
</template>

<script>
export default {
    name: 'TituloPrincipal',
    props: {
        texto: {
            type: String,
            // required: true
            default: "Título principal"
        }
    }
}
</script>

<style scoped>
    h1{
        color: orange
    }
</style>