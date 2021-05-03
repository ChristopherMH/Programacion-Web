<template>
  <div class="home">
    <h1>Mis posts</h1>
    <div v-for="p in posts"
    :key="p.id">
    <router-link :to="`/post/${p.id}`">
      <h3>{{p.id}} - {{p.title}}</h3>
    </router-link>
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  created() {
    this.getPosts()
  },
}
</script>
