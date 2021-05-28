<template>
	<div id="app">
		<b-navbar type="dark" variant="dark" toggleable>
			<b-navbar-brand tag="h1" class="mx-2" to="/">
				Inicio
			</b-navbar-brand>
		</b-navbar>
		<router-view class="container  mt-3" />
		<notifications position="bottom right" />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
