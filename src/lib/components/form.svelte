<script lang="ts">
	import Links from './links.svelte';
	import { urls } from '../store/localStorage';
	import type { ShortlyResponse } from '$lib/types';

	const URL = 'https://api.shrtco.de/v2/';
	let isError = false;

	const handleSubmit = async (e: SubmitEvent) => {
		if (!e.target) return null;
		isError = false;
		const formData = new FormData(e.target as HTMLFormElement);

		const data: { [key: string]: unknown } = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		const link = data.link;

		if (typeof link === 'string') {
			if (link.trim().length === 0) isError = true;
			else {
				try {
					const response = await fetch(`${URL}shorten?url=${link}`);
					const { ok, result }: ShortlyResponse = await response.json();

					if (ok === true) {
						if (!$urls.some((link) => link.originalLink === result.original_link)) {
							urls.set([
								...$urls,
								{
									originalLink: result.original_link,
									shortLink: result.full_short_link2
								}
							]);
						}
					}
				} catch (e) {
					console.log(`Error: ${e}`);
				}
			}
		}
	};
</script>

<section>
	<form on:submit|preventDefault={handleSubmit}>
		<div>
			<input
				class:invalid={isError}
				name="link"
				placeholder="Shorten a link here..."
				aria-label="Link"
			/>
			{#if isError}
				<p id="link" class="error">Please add a link</p>
			{/if}
		</div>
		<button type="submit">Shorten It!</button>
	</form>
	<Links />
</section>

<style lang="scss">
	section {
		padding: 0 2.4rem;
		position: relative;
		top: -8rem;
	}

	form {
		max-width: 111rem;
		margin-inline: auto;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		padding: 2.4rem;
		background-color: $darkViolet;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top right;
		background-image: url('../assets/bg-shorten-mobile.svg');
		margin-bottom: 2.4rem;

		@media (min-width: $tablet) {
			flex-direction: row;
			height: 16.8rem;
			padding: 5.2rem 6.4rem;
			background-size: cover;
			background-position: center;
			background-image: url('../assets/bg-shorten-desktop.svg');
		}
	}

	div {
		width: 100%;
	}

	input {
		width: 100%;
		border-radius: 0.5rem;
		background: $white;
		height: 4.8rem;
		padding: 0 1.6rem;
		font-size: 1.6rem;
		color: $veryDarkBlue;
		font-weight: 500;
		letter-spacing: 0.012rem;
		font-family: Poppins;
		margin-bottom: 0.4rem;
		border: 3px solid transparent;

		&.invalid {
			border: 3px solid $red;

			&::placeholder {
				color: $red;
				opacity: 0.5;
			}
		}

		@media (min-width: $tablet) {
			height: 6.4rem;
		}
	}

	.error {
		color: $red;
		font-size: 1.2rem;
		font-style: italic;
		font-weight: 500;
		letter-spacing: 0.0082rem;
		margin: 0;
	}

	button {
		height: 4.8rem;
		border-radius: 0.5rem;
		border: 0;
		background-color: $cyan;
		color: $white;
		font-family: Poppins;
		font-size: 1.8rem;
		font-weight: 700;
		cursor: pointer;
		transition: background-color 0.15s;

		&:hover {
			background-color: $cyanHover;
		}

		@media (min-width: $tablet) {
			width: 18.8rem;
			height: 6.4rem;
		}
	}
</style>
