<script lang="ts">
	export let header: string;
	export let content: string;
</script>

<div class="container">
	<div class="icon">
		<slot name="icon" />
	</div>
	<div class="content">
		<h3>{header}</h3>
		<p>{content}</p>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 32.5rem;
		position: relative;

		@media (min-width: $desktop) {
			max-width: 35rem;

      &:not(:first-child) {
        margin-top: 4.4rem;
      }

      &:last-child {
        margin-top: 8.8rem;
      }
		}
	}

	.icon {
		width: 8.8rem;
		height: 8.8rem;
		border-radius: 50%;
		background-color: $darkViolet;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-inline: auto;
		position: relative;
		z-index: 2;

    @media (min-width: $desktop) {
      margin-inline-start: 3.2rem;
		}
	}

	.content {
		border-radius: 0.5rem;
		background-color: $white;
		padding: 7.7rem 3rem 4.1rem;
		margin-top: -3.3rem;
	}

	h3 {
		text-align: center;
		font-size: 2.2rem;
		font-weight: 700;
		margin: 0;
		margin-bottom: 1.2rem;
		color: $veryDarkBlue;

		@media (min-width: $desktop) {
			text-align: left;
		}
	}

	p {
		text-align: center;
		font-size: 1.5rem;
		margin: 0;
		font-weight: 500;
		color: $grayishViolet;

		@media (min-width: $desktop) {
			text-align: left;
		}
	}
</style>
