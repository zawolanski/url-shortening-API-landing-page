<script lang="ts">
	import { isOpen } from '$lib/store/menu';
</script>

<ul class:open={$isOpen}>
	<div class="links">
		<li><a href="/">Feature</a></li>
		<li><a href="/">Pricing</a></li>
		<li><a href="/">Resources</a></li>
	</div>
	<div class="divider" />
	<div class="links">
		<li><a href="/">Login</a></li>
		<li><a class="signup" href="/">Sign Up</a></li>
	</div>
</ul>

<style lang="scss">
	ul {
		display: none;
		align-items: center;
		flex-direction: column;
		position: fixed;
		z-index: 999;
		list-style-type: none;
		margin: 0;
		background-color: $darkVioletBG;
		padding: 4rem 2.4rem;
		border-radius: 1rem;
		top: 9.6rem;
		left: 2.4rem;
		right: 2.4rem;
		gap: 3rem;

		&.open {
			display: flex;
		}

		@media (min-width: $tablet) {
			display: flex;
			position: static;
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			gap: 0;
			flex-grow: 1;
			padding: 0;
			background-color: transparent;
		}
	}

	div.links {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3rem;
		width: 100%;

		@media (min-width: $tablet) {
			flex-direction: row;
			width: auto;
		}
	}

	li {
		width: 100%;

		@media (min-width: $tablet) {
			width: auto;
		}
	}

	a {
		font-size: 1.8rem;
		font-weight: 700;
		text-decoration: none;
		color: $white;
		transition: color 0.15s;
		width: 100%;
		display: block;
		text-align: center;

		@media (min-width: $tablet) {
			color: $grayishViolet;
			font-size: 1.5rem;
			display: inline;

			&:hover {
				color: $veryDarkBlue;
			}
		}

		&.signup {
			color: $white;
			background-color: $cyan;
			padding: 1rem 2.4rem;
			border-radius: 2.8rem;
			transition: background-color 0.15s;

			&:hover {
				background-color: $cyanHover;
			}
		}
	}

	div.divider {
		height: 0.1rem;
		width: 100%;
		background-color: $grayishViolet;
		opacity: 0.25;

		@media (min-width: $tablet) {
			display: none;
		}
	}
</style>
