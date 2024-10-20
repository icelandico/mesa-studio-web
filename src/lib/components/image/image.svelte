<script lang="ts">
	export let image;
	export let alt;
	export let sizes = '';
	export let loading = 'lazy';
	export let title = '';
	export let className = '';

	async function importImage(image: string) {
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
</script>

<picture>
	{#await importImage(image) then src}
			<source srcset={src.sources.avif} type="image/avif" {sizes} />
			<source srcset={src.sources.webp} type="image/webp" {sizes} />
			<img
				src={src.img.src}
				{alt}
				{loading}
				onload="this.style.opacity=1"
				class={className}
			/>
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