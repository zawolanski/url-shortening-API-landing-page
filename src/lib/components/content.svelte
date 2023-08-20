<script>
	import Tile from './tile.svelte';
	import Recognition from '$lib/assets/icon-brand-recognition.svelte';
	import Records from '$lib/assets/icon-detailed-records.svelte';
	import Customizable from '$lib/assets/icon-fully-customizable.svelte';
	import Line from './line.svelte';
	import Form from './form.svelte';
</script>

<div>
	<Form />
	<h2>Advanced Statistics</h2>
	<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
	<div class="tiles">
		<Tile
			header="Brand Recognition"
			content="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links
			help instil confidence in your content."
		>
			<Recognition slot="icon" />
		</Tile>
    <Line />
		<Tile
			header="Detailed Records"
			content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
		>
			<Records slot="icon" />
		</Tile>
    <Line />
		<Tile
			header="Fully Customizable"
			content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
		>
			<Customizable slot="icon" />
		</Tile>
	</div>
</div>

<style lang="scss">
	h2 {
		margin: 0;
		color: $veryDarkBlue;
		text-align: center;
		font-size: 2.8rem;
		font-weight: 700;
		letter-spacing: -0.07rem;
		margin-bottom: 0.6rem;

		@media (min-width: $desktop) {
			font-size: 4rem;
			letter-spacing: -0.1rem;
			margin-bottom: 1.8rem;
		}
	}

	p {
		margin: 0;
		margin-inline: auto;
		color: $grayishViolet;
		text-align: center;
		text-align: center;
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: 0.0109rem;
		margin-bottom: 4.8rem;
		max-width: 54rem;

		@media (min-width: $desktop) {
			font-size: 1.8rem;
			margin-bottom: 5.6rem;
		}
	}

  .tiles {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: $desktop) {
			flex-direction: row;
      justify-content: center;
      align-items: flex-start;
		}
  }
</style>
