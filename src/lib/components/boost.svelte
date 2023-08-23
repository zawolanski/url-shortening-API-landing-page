<div>
	<h2>Boost your links today</h2>
	<a href="/">Get Started</a>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 9rem 3.7rem;
		background-color: $darkViolet;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url('../assets/bg-boost-mobile.svg');

    @media (min-width: $tablet) {
      background-image: url('../assets/bg-boost-desktop.svg');
		}
	}

	h2 {
		color: $white;
		font-size: 2.8rem;
		font-weight: 700;
		letter-spacing: -0.07rem;
	}

	a {
		padding: 1.4rem 4rem;
		background-color: $cyan;
		border-radius: 2.8rem;
		text-decoration: none;
		color: $white;
		font-size: 2rem;
		font-weight: 700;
		transition: background-color 0.15s;

		&:hover {
			background-color: $cyanHover;
		}
	}
</style>
