<script lang="ts">
	import Logo from '$lib/assets/logo.svelte';
	import NavigationButton from '$lib/components/navigation_button.svelte';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<header>
	<Logo />
	<nav aria-label="Main menu">
		<NavigationButton />
		<Navigation />
	</nav>
</header>

<style lang="scss">
	header {
		padding: 4rem 2.4rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5rem;
		width: 100%;
		max-width: 111rem;
		margin-inline: auto;

		@media (min-width: $tablet) {
			padding: 5.2rem 2.4rem;
		}

		@media (min-width: $desktop) {
			padding: 5.2rem 0;
		}
	}

	nav {
		@media (min-width: $tablet) {
			display: flex;
			align-items: center;
			flex-grow: 1;
		}
	}
</style>
