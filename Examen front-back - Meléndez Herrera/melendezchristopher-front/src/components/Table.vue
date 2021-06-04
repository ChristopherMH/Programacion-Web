<template>
	<div>
		<b-table stripe hover :busy="busy" :items="items" :fields="fields">
			// Bootstrap
			<template #cell(actions)="data">
				<slot name="actions" :item="data"> </slot>
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
		busy: Boolean,
	},
};
</script>

<style></style>
