<template>
    <div v-if="detalle" class="details">
        <h2>ID: {{detalle._id}}</h2>
        <h3>Fact:</h3>
        <p>{{detalle.text}}</p>
        <h3>Fecha de creación:</h3>
        <p>{{detalle.createdAt}}</p>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: 'DetalleFact',
    computed: {
        ...mapState(['detalle'])
    },
    methods: {
        ...mapActions(['getDetalle'])
    },
    created(){
        this.getDetalle(this.$route.params.id);
    } 
}
</script> 

<style>

h2{
    margin: 40px 0;
}

.details p:first-of-type{
    font-size: 40px;
}


h3{
    color: green;
    font-weight: bold;
    font-size: 16px;
}


</style>