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

		// Bigger Picture - grab image links
		imageLinks = document.querySelectorAll('#images > .project-img');
		imageLinks.forEach((imageLink) => {
			imageLink.addEventListener('click', openGallery);
		});
	}

	//  BiggerPicture - function to open
	function openGallery(e) {
		e.preventDefault();
		bp.open({
			items: imageLinks,
			el: e.currentTarget
		});
	}
</script>

<section class="flex flex-col justify-center pt-[80px] px-4 md:px-12 pb-12">
	<img src={data.projectMainImg} class="object-cover calc-image" alt="mesa projekt" />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12" id="images">
		{#each data.gallery as image}
			<a
				href={image}
				data-img={image}
				data-thumb={image}
				data-alt="mesa studio projekt"
				class="project-img"
			>
				<img
					class="aspect-square object-cover image-loading"
					loading="eager"
					use:lazyLoad={image}
					alt="projekt wnętrza"
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
