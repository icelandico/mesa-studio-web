<script lang="ts">
	import { lazyLoad } from '$lib/utils/lazyLoad';
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

<div class="flex items-center justify-between w-full h-full">
	<div class="embla w-full h-full">
		<div class="embla__viewport h-full" use:emblaCarouselSvelte on:emblaInit={onInit}>
			<div class="embla__container h-full">
				{#each galleryPhotos as photo}
					<div class="embla__slide">
						<img
							class="w-full h-full object-cover gallery-img"
							src={photo}
							alt="mesa studio galeria"
							title="mesa studio interior design"
							loading="eager"
							srcset="
								{photo} 256×384,
								{photo} 710×1065,
								{photo} 970×1455,
								{photo} 1170×1755,
								{photo} 1350×2025,
								{photo} 1500×2250,
								{photo} 1650×2475,
								{photo} 1780×2670,
								{photo} 1910×2865
							"
							sizes="(min-width: 780px) calc(33.33vw - 43px), calc(100vw - 32px)"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div class="embla__controls">
			<button class="embla__button embla__button--prev" on:click={handlePrev}>~</button>
			<button class="embla__button embla__button--next" on:click={handleNext}>~</button>
		</div>
	</div>
</div>

<style>

	.gallery-img {
		aspect-ratio: 2/3;
	}
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		margin-left: calc(1rem * -1);
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		text-align: center;
		padding-left: 1rem;
	}

	.embla__controls {
		margin-top: 12px;
		display: flex;
		justify-content: space-between;
	}

	.embla__button {
		border-radius: 50%;
		border: 1px solid #719fc4;
		width: 40px;
		height: 40px;
		font-size: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #003399;
	}

	.embla__button--prev {
		left: 1rem;
	}

	.embla__button--next {
		right: 1rem;
	}

	@media screen and (min-width: 768px) {
		.embla__slide {
			flex: 0 0 33.33%;
		}

		.embla__button {
			position: absolute;
			top: 50%;
			width: 35px;
			height: 35px;
			transform: translateY(-50%);
		}

		.embla__button--prev {
			left: 10px;
		}

		.embla__button--next {
			right: 10px;
		}
	}
</style>
