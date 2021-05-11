<template>
  <div class="home">
    <h1 class="mb-4">Mis posts</h1>
    <div v-if="loading">Cargando.....</div>
    <div v-else>
      <div v-for="p in posts" :key="p.id">
        <router-link class="router-link" :to="`/post/${p.id}`">
          <h4>{{ p.id }} - {{ p.title }}</h4>
        </router-link>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["posts", "loading"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
}
.router-link:hover {
  color: black;
}
</style>