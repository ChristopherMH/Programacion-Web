<template>
<div>
    <div class="m-2" v-for="t in todosCompleted" :key="t.id">
        {{t.id}}-{{t.title}} 
        <p>{{ t.completed ? 'Completo' : 'Sin completar'}}</p>
        <hr>
    </div>
</div>
</template>

<script>
import {mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: "Todos",
  computed: {
      ...mapState(['todos']),
      ...mapGetters(['todosCompleted'])
  },
  methods: {
      ...mapActions(['getTodos'])
  },
  created() {
      this.getTodos()
  }
};
</script>

<style></style>