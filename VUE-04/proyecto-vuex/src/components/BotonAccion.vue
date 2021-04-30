<template>
  <button class="btn btn-dark" @click="accionBoton({estado: estado, cantidad: 3})">{{texto}}</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'BotonAccion',
    props: {
        estado: {
            type: Boolean,
            required: true
        }
    },
    computed:{
        texto(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods: {
        ...mapActions(['accionBoton'])
    },
}
</script>

<style>

</style>