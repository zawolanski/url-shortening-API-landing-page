<script lang="ts">
	import Content from '$lib/components/content.svelte';
	import Welcome from '$lib/components/welcome.svelte';
	import Boost from './boost.svelte';
</script>

<main>
	<div>
		<Welcome />
	</div>
	<div>
		<Content />
	</div>
	<Boost />
</main>

<style lang="scss">
	div {
		padding: 0 2.4rem;
		width: 100%;

		@media (min-width: $tablet) {
			padding: 5.2rem 0;
		}

		@media (min-width: $desktop) {
			padding: 5.2rem 0;
		}

		&:first-child {
			overflow-x: hidden;

			@media (min-width: $tablet) {
				padding-bottom: 21.8rem;
			}
		}

		&:nth-child(2) {
			background-color: $mainBG;
			padding: 0 0 8rem;

			@media (min-width: $desktop) {
				padding-bottom: 12rem;
			}
		}
	}
</style>
