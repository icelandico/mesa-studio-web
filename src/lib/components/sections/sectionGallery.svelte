<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	let emblaApi: EmblaCarouselType;
	export let galleryPhotos;

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
	}

	function handlePrev() {
		if (emblaApi) emblaApi.scrollPrev();
	}

	function handleNext() {
		if (emblaApi) emblaApi.scrollNext();
	}
</script>

<div class="flex items-center justify-between p-12 w-full h-full gap-16">
	<div class="embla w-full h-full">
		<button class="embla__button embla__button--prev" on:click={handlePrev}>~</button>
		<button class="embla__button embla__button--next" on:click={handleNext}>~</button>
		<div class="embla__viewport" use:emblaCarouselSvelte on:emblaInit={onInit}>
			<div class="embla__container">
				{#each galleryPhotos as photo}
					<div class="embla__slide">
						<img class="w-full h-screen object-cover" src={photo} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		margin-left: calc(1rem * -1);
	}
	.embla__slide {
		flex: 0 0 33.33%;
		min-width: 0;
		text-align: center;
		padding-left: 1rem;
	}

	.embla__button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
		border: 1px solid #719fc4;
		width: 35px;
		height: 35px;
		font-size: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #003399;
	}

	.embla__button--prev {
		left: 10px;
	}

	.embla__button--next {
		right: 10px;
	}
</style>
