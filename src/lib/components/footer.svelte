<script>
	import IconFacebook from '$lib/assets/icon-facebook.svelte';
	import IconInstagram from '$lib/assets/icon-instagram.svelte';
	import IconPinterest from '$lib/assets/icon-pinterest.svelte';
	import IconTwitter from '$lib/assets/icon-twitter.svelte';
	import Logo from '$lib/assets/logo.svelte';
</script>

<footer>
	<div class="container">
		<div class="logo_container">
			<Logo />
		</div>
		<div class="navigation_container">
			<nav>
				<h3>Features</h3>
				<ul>
					<li><a href="/">Link Shortening</a></li>
					<li><a href="/">Branded Links</a></li>
					<li><a href="/">Analytics</a></li>
				</ul>
			</nav>
			<nav>
				<h3>Resources</h3>
				<ul>
					<li><a href="/">Blog</a></li>
					<li><a href="/">Developers</a></li>
					<li><a href="/">Support</a></li>
				</ul>
			</nav>
			<nav>
				<h3>Company</h3>
				<ul>
					<li><a href="/">About</a></li>
					<li><a href="/">Our Team</a></li>
					<li><a href="/">Careers</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>
		<div class="social_container">
			<a target="_blank" href="https://www.facebook.com" aria-label="Facebook">
				<IconFacebook />
			</a>
			<a target="_blank" href="https://twitter.com" aria-label="Twitter">
				<IconTwitter />
			</a>
			<a target="_blank" href="https://pinterest.com" aria-label="Pinterest">
				<IconPinterest />
			</a>
			<a target="_blank" href="https://www.instagram.com" aria-label="Instagram">
				<IconInstagram />
			</a>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: $veryDarkViolet;
	}

	.container {
		width: 100%;
		max-width: 111rem;
		margin-inline: auto;
		padding: 5.4rem 2.4rem;
		font-size: 1.5rem;
		display: grid;
		justify-content: center;
		gap: 4.6rem;

		@media (min-width: $tablet) {
			padding: 7rem 2.4rem;
			grid-template-columns: 15% 1fr 17rem;
			align-items: flex-start;
			justify-content: flex-start;
		}

		@media (min-width: $desktop) {
			padding: 5.2rem 0;
			grid-template-columns: 30% 1fr 17rem;
		}
	}

	.logo_container {
		margin-inline: auto;
		fill: $white;

		@media (min-width: $tablet) {
			margin-inline: 0;
		}
	}

	h3 {
		text-align: center;
		margin: 0;
		color: $white;
		font-size: 1.6rem;
		font-weight: 700;
		letter-spacing: -0.025rem;
		margin-bottom: 2.2rem;

		@media (min-width: $tablet) {
			text-align: left;
		}
	}

	.navigation_container {
		display: flex;
		flex-direction: column;
		gap: 3.8rem;

		@media (min-width: $tablet) {
			flex-direction: row;
			justify-self: center;
			gap: 2.8rem;
		}

		@media (min-width: $desktop) {
			justify-self: flex-start;
			gap: 7.8rem;
		}
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		@media (min-width: $tablet) {
			align-items: flex-start;
		}

		a {
			color: $gray;
			text-decoration: none;
			transition: color 0.15s;

			&:hover {
				color: $cyan;
			}
		}
	}

	.social_container {
		display: flex;
		align-items: center;
		gap: 2.5rem;

		a {
			transition: fill 0.15s;
			fill: $white;

			&:hover {
				fill: $cyan;
			}
		}
	}
</style>
