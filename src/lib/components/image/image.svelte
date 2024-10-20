<script lang="ts">
	export let image;
	export let alt;
	export let sizes = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';
	export let title = '';
	export let className = '';

	type ImageSource = {
		sources: {
			avif: string;
			webp: string;
		};
		img: {
			src: string;
		};
	};

	async function importImage(image: string): Promise<ImageSource | any> {
		const pictures = import.meta.glob(`../../../../static/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}`, {
			import: 'default',
			query: {
					enhanced: true,
					w: '2400;2000;1600;1200;800;400'
			}
		});
			for (const [path, src] of Object.entries(pictures)) {
				if (path.includes(image)) {
						return await src();
				}
			}
	}

	function handleImageLoad(event: Event) {
		const img = event.target as HTMLImageElement;
		img.style.opacity = '1';
	}
</script>

<picture>
	{#await importImage(image) then src}
	{#if src}
			<source srcset={src.sources.avif} type="image/avif" {sizes} />
			<source srcset={src.sources.webp} type="image/webp" {sizes} />
			<img
				src={src.img.src}
				{alt}
				{loading}
				on:load={handleImageLoad}
				class={className}
				{title}
			/>
		{/if}
	{/await}
</picture>

<style>
	picture {
		aspect-ratio: var(--aspect-ratio, auto);
	}

	img {
		aspect-ratio: var(--aspect-ratio, auto);
		object-fit: cover;
		transition: opacity 0.5s;
		opacity: 0;
		margin: auto;
	}
</style>