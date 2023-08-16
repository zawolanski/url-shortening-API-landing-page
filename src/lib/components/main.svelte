<script lang="ts">
	import Content from '$lib/components/content.svelte';
	import Welcome from '$lib/components/welcome.svelte';
</script>

<main>
	<div>
		<Welcome />
	</div>
	<div>
		<Content />
	</div>
</main>

<style lang="scss">
	div {
		padding: 0 2.4rem 4rem;
		width: 100%;
		overflow-x: hidden;

		@media (min-width: $tablet) {
			padding: 5.2rem 0;
		}

		@media (min-width: $desktop) {
			padding: 5.2rem 0;
		}

		&:last-child {
			background-color: $mainBG;
			padding: 16rem 0 8rem 0;

			@media (min-width: $desktop) {
				padding-bottom: 12rem;
			}
		}
	}
</style>
