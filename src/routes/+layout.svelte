<script lang="ts">
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/700.css';
	import '../app.scss';
</script>

<div>
	<slot />
</div>

<style lang="scss">
	div {
		width: 100%;
		max-width: 111rem;
		margin-inline: auto;
	}
</style>
