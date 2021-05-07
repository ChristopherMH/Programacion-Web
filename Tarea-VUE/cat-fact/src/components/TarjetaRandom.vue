<template>
    <div>
        <h1>{{type}}</h1>
        <div class="contenedor">
            <p class="fact">{{text}}</p>
            <p :style="isVerified">{{status?"Verificado":"Sin información sobre su verificación"}}</p>
        </div>
    </div>
    <!-- :type="getRandomFact.type" :text="getRandomFact.text" :status="getRandomFact.status.verified -->
</template>

<script>
    export default {
        name:'TarjetaRandom',
        props:{
            type:String,
            text:String,
            status:Boolean
        },
        computed:{
            isVerified: function(){
                return {color: 'green'};
            }
        }
    }
</script>

<style>

.fact{
    font-weight: bold;
}



</style>