<template>
  <button class="btn btn-primary" @click="accionDisminuir(cantidad)">Disminuir</button>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: 'BotonDisminuir',
    props: {
        cantidad: {
            type: Number,
            required: true
        }
    },
    methods: {
        ...mapActions(['accionDisminuir'])
    },
}
</script>

<style>

</style>