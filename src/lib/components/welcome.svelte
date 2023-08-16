<script lang="ts">
	import Working from '$lib/assets/illustration-working.svelte';
</script>

<div class="container">
	<div class="image_container">
		<div class="image">
			<Working />
		</div>
	</div>
	<section>
		<h1>More than just shorter links</h1>
		<p>
			Build your brand’s recognition and get detailed insights on how your links are performing.
		</p>
		<a href="/">Get Started</a>
	</section>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 111rem;
		margin-inline: auto;

		@media (min-width: $tablet) {
			padding: 0 2.4rem;
			display: flex;
			gap: 5rem;
		}

		@media (min-width: $desktop) {
			padding: 0;
			gap: 10rem;
		}
	}

	.image_container {
		width: 100%;
		margin-bottom: 3.5rem;
		order: 2;

		@media (min-width: $tablet) {
			margin-bottom: 0;
		}
	}

	.image {
		width: 150%;

		@media (min-width: $tablet) {
			width: 125%;
		}
	}

	section {
		width: 100%;
		max-width: 111rem;

		@media (min-width: $tablet) {
			order: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	h1 {
		margin: 0;
		text-align: center;
		font-size: 4.2rem;
		letter-spacing: -0.105rem;
		font-weight: 700;
		color: $veryDarkBlue;
		margin-bottom: 1.5rem;

		@media (min-width: $tablet) {
			text-align: left;
			font-size: 5.5rem;
		}

		@media (min-width: $desktop) {
			font-size: 7rem;
			font-weight: 700;
			letter-spacing: -0.2rem;
			margin-bottom: 0.5rem;
		}
	}

	p {
		margin: 0;
		text-align: center;
		font-size: 1.8rem;
		letter-spacing: 0.0123rem;
		margin-bottom: 3.2rem;
		color: $gray;

		@media (min-width: $tablet) {
			text-align: left;
			font-size: 2rem;
		}

		@media (min-width: $desktop) {
			font-size: 2.2rem;
			letter-spacing: 0.015rem;
			margin-bottom: 3.8rem;
		}
	}

	a {
		display: block;
		margin-inline: auto;
		width: fit-content;
		font-size: 2rem;
		font-weight: 700;
		color: $white;
		text-decoration: none;
		background-color: $cyan;
		border-radius: 2.8rem;
		padding: 1.4rem 4rem;
		margin-bottom: 16.5rem;
		cursor: pointer;
		transition: background-color 0.15s;

		&:hover {
			background-color: $cyanHover;
		}

		@media (min-width: $tablet) {
			margin-inline: 0;
			margin-bottom: 0;
		}
	}
</style>
