<template>
  <div>
    <button class="btn btn-dark" @click="onRegresar">Regresar</button>
    <p>{{ $route.params.id }}</p>
    <h3>title</h3>
    <p>{{post.title}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: "DetallePost",
  computed: {
    ...mapState(['post'])
  },
  methods: {
    ...mapActions(['getPost']),
    onRegresar() {
      this.$router.push({
        name: 'Home'
      })
    }
  },
  created() {
    this.getPost({id: this.$route.params.id})
  }
};
</script>

<style></style>