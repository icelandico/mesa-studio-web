<script>
	import { lazyLoad } from '$lib/utils/lazyLoad';
	import SvelteMarkdown from 'svelte-markdown';
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';
	export let data;

	const source = data.projectDescription;
	let bp;
	let imageLinks;

	onMount(() => {
		runBiggerPicture();
	});

	function runBiggerPicture() {
		bp = BiggerPicture({
			target: document.body
		});

		imageLinks = document.querySelectorAll('#images > .project-img');
		imageLinks.forEach((imageLink) => {
			imageLink.addEventListener('click', openGallery);
		});
	}

	function openGallery(e) {
		e.preventDefault();
		bp.open({
			items: imageLinks,
			el: e.currentTarget
		});
	}

	export function loadImageSize(node) {
		const imageSrc = node.getAttribute('src');

		const img = new Image();
		img.src = imageSrc;

		img.onload = () => {
			const width = img.width;
			const height = img.height;

			if (node.parentElement) {
				node.parentElement.setAttribute('data-width', width);
				node.parentElement.setAttribute('data-height', height);
			}
		};

		img.onerror = () => {
			console.error('Failed to load image:', imageSrc);
		};
	}
</script>

<section class="flex flex-col justify-center pt-[80px] px-4 md:px-12 pb-12">
	<img src={data.projectMainImg} class="object-cover calc-image" alt="mesa projekt" />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12" id="images">
		{#each data.projectGallery as image}
			<a
				href={image.galleryPhoto}
				data-img={image.galleryPhoto}
				data-thumb={image.galleryPhoto}
				data-alt="mesa studio projekt"
				data-caption={image.caption}
				class="project-img"
			>
				<img
					class="aspect-square object-cover image-loading"
					loading="eager"
					use:lazyLoad={image.galleryPhoto}
					use:loadImageSize
					alt="projekt wnętrza"
					src={image.galleryPhoto}
				/>
			</a>
		{/each}
	</div>
	<article class="mt-8">
		<SvelteMarkdown {source} />
	</article>
</section>

<style>
	.calc-image {
		height: calc(100vh - 80px);
	}
</style>
