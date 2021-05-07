<template>
	<div class="tarjeta">
		<router-link :to="`/detalle/${id}`">
		    <div class="alert alert-primary" role="alert">
			    <div class="texto">{{ texto }}</div>
                <div class="id">{{id}}</div>
		    </div>
        </router-link>
	</div>
</template>

<script>
export default {
    name: "Tarjeta",
    props: {
        texto: String,
        id: [Number, String]
    }
};
</script>

<style>

.tarjeta{
    margin: 20px 50px;
}

.alert{
    background: white;
    color: #0F6AE6;
}

.texto{
    font-weight: 600;
}

</style>
