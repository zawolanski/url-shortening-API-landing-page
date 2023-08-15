<script lang="ts">
	import { isOpen } from '$lib/store/menu';

  const handleClick = () => {
    isOpen.set(!$isOpen)
  }
</script>

<button on:click={handleClick} aria-expanded={$isOpen}>
	<div aria-hidden="true">
		<div class="bar1" />
		<div class="bar2" />
		<div class="bar3" />
	</div>
</button>

<style lang="scss">
  button {
    width: 2.4rem;
    height: 2.1rem;
    border: 0;
    margin: 0;
    cursor: pointer;
    position: relative;
    background-color: transparent;

    @media (min-width: $tablet) {
      display: none;
		}
  }

  .bar1, .bar2, .bar3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;
    background-color: $grayishViolet;
  }

  .bar2 {
    top: 0.9rem;
  }

  .bar3 {
    top: 1.8rem;
  }
</style>