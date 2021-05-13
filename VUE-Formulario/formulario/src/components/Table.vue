<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Clave</th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Prioridad</th>
        <th scope="col">Horas</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody v-if="todos.length">
      <tr v-for="t in todos" :key="t.id">
        <th scope="row">{{ t.id }}</th>
        <td>
          {{ t.nombre }}
        </td>
        <td>{{ t.tipo.join(", ") || "-" }}</td>
        <td>{{ t.prioridad || "Sin datos" }}</td>
        <td>{{ t.horas }}</td>
        <td>
          <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td class="text-center" colspan="6">Sin información para mostrar</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Table",
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style></style>