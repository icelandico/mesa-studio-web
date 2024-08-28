<script lang="ts">
	import { lazyLoad } from '$lib/utils/lazyLoad';
	export let data;
</script>

<section class="flex flex-col justify-center pt-[80px] px-4 md:px-12 pb-12">
	<img src={data.projectMainImg} class="object-cover calc-image" alt="mesa projekt" />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
		{#each data.gallery as image}
			<div class="">
				<img
					class="aspect-square object-cover image-loading"
					loading="eager"
					use:lazyLoad={image}
					alt="projekt wnętrza"
				/>
			</div>
		{/each}
	</div>
	<article class="mt-8">
		{data.projectDescription}
	</article>
</section>

<style>
	.calc-image {
		height: calc(100vh - 80px);
	}
</style>
