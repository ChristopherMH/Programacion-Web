<template>
  <div>
    <h3>Editar ToDo</h3>

    <form @submit.prevent="guardarTodo">
      <div class="form-group">
        <label for="InputNombre" class="form-label">Nombre</label>
        <input
          v-model.trim="todo.nombre"
          type="text"
          class="form-control"
          id="InputNombre"
          placeholder="Ingrese nombre de la tarea"
        />
      </div>
      <hr />
      <div>Tipo</div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipo"
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="Hogar"
        />
        <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipo"
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="Escuela"
        />
        <label class="form-check-label" for="inlineCheckbox2">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipo"
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="Oficina"
        />
        <label class="form-check-label" for="inlineCheckbox3">Oficina</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipo"
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="Otro"
        />
        <label class="form-check-label" for="inlineCheckbox4">Otro</label>
      </div>
      <hr />
      <div>Prioridad</div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="Baja"
        />
        <label class="form-check-label" for="inlineRadio1">Baja</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Media"
        />
        <label class="form-check-label" for="inlineRadio2">Media</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="Alta"
        />
        <label class="form-check-label" for="inlineRadio3">Alta</label>
      </div>
      <hr />
      <div class="form-group">
        <label for="InputHoras" class="form-label">Horas requeridas</label>
        <input
          v-model.number="todo.horas"
          type="number"
          class="form-control"
          id="InputHoras"
          placeholder="Ingrese las horas requeridas"
        />
      </div>

      <button
        class="btn btn-success mt-3"
        type="submit"
        :disabled="estadoBoton"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
       todo: {
         id: null,
         nombre: "",
         tipo: [],
         prioridad: "",
         horas: 0,
       },
    };
  },
  methods: {
    ...mapActions(["obtenerTodo"]),
    guardarTodo() {
      console.log(this.todo);
      if (this.todo.nombre.trim() === "") {
        console.log("Campo vacío");
        return;
      }
      // Guardar datos
      this.limpiar();
      this.$router.push({ name: "Home" });
    },
    limpiar() {
      this.todo = {
        id: null,
        nombre: "",
        tipo: [],
        prioridad: "",
        horas: 0,
      };
    },
  },
  computed: {
    ...mapGetters(["singleTodo"]),
    estadoBoton() {
      return this.todo.nombre.trim() === "" ? true : false;
    },
  },
  created() {
    this.obtenerTodo(this.$route.params.id);
  },
  beforeMount() {
      Vue.set(this, 'todo', this.singleTodo);
  }
};
</script>

<style></style>