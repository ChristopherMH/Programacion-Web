<template>
	<div>
		<b-table striped hover :items="items" :fields="fields">
			//bootsrap
			<template #cell(actions)="data">
				<!-- {{ data.index + 1 }} -->
				<!-- eliminar / editar -->
				<!-- //slot de vue -->
				<slot name="actions" :item="data">
					<!-- //Lo que se pinta en la columna -->
					<!-- Está en home lo que agregamos -->
				</slot>
			</template>
		</b-table>
	</div>
</template>

<script>
export default {
	name: "Table",
	props: {
		items: Array,
		fields: Array,
	},
};
</script>

<style></style>
