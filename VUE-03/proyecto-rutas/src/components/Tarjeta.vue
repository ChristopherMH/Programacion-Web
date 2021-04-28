<template>
  <div>
    <router-link :to="`/peliculas/${id}`">
      <div class="alert alert-primary" role="alert">
        {{ titulo }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tarjeta",
  props: {
    titulo: String,
    id: [Number, String],
  },
};
</script>

<style></style>