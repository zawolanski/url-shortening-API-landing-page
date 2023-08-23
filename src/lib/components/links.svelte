<script lang="ts">
	import { browser } from '$app/environment';
	import { urls } from '$lib/store/localStorage';

	let copiedBtnIndex: null | number = null;

	const handleCopyValue = async (index: number) => {
		if (browser) {
			const link = document.getElementById(`id_${index}`)?.innerText;
			if (link) {
				await navigator.clipboard.writeText(link);
				copiedBtnIndex = index;
			}
		}
	};
</script>

<div class="container">
	{#each $urls as url, i}
		<div class="link_wrapper">
			<p class="original_link">{url.originalLink}</p>
			<div class="divider" />
			<div class="short_link_wrapper">
				<p class="short_link" id={`id_${i}`}>{url.shortLink}</p>
				<button
					type="button"
					class:copied={copiedBtnIndex === i}
					on:click={() => handleCopyValue(i)}>{copiedBtnIndex === i ? 'Copied!' : 'Copy'}</button
				>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
		max-width: 111rem;
		margin-inline: auto;
	}

	.link_wrapper {
		display: flex;
		flex-direction: column;
		background-color: $white;
		border-radius: 0.5rem;

		@media (min-width: $tablet) {
			flex-direction: row;
			padding: 1.8rem 3.2rem;
			align-items: center;
		}
	}

	p {
		line-height: 3.6rem;
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: 0.012rem;
		color: $veryDarkBlue;
		margin: 0;

		@media (min-width: $tablet) {
			font-size: 2rem;
		}
	}

	.original_link {
		padding: 0.6rem 1.6rem;

		@media (min-width: $tablet) {
			padding: 0;
			flex-grow: 1;
		}
	}

	.short_link_wrapper {
		padding: 0.6rem 1.6rem 1.6rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;

		@media (min-width: $tablet) {
			padding: 0;
			flex-direction: row;
			gap: 2.4rem;
		}
	}

	.short_link {
		color: $cyan;
	}

	.divider {
		height: 0.1rem;
		background-color: $grayishViolet;
		opacity: 0.25;

		@media (min-width: $tablet) {
			display: none;
		}
	}

	button {
		height: 4rem;
		width: 100%;
		border-radius: 0.5rem;
		border: 0;
		background-color: $cyan;
		cursor: pointer;
		color: $white;
		font-family: Poppins;
		font-size: 1.6rem;
		font-weight: 700;
		transition: background-color 0.15s;

		&.copied {
			background-color: $darkViolet;
		}

		&:not(.copied):hover {
			background-color: $cyanHover;
		}

		@media (min-width: $tablet) {
			width: 10rem;
		}
	}
</style>
