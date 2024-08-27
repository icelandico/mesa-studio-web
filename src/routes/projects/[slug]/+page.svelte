<script lang="ts">
	export let data;
</script>

<section class="flex flex-col justify-center pt-[80px] px-12 pb-12">
	<img src={data.projectMainImg} alt="mesa projekt" />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
		{#each data.gallery as image}
			<div class="">
				<img class="aspect-square object-cover" src={image} alt="projekt wnętrza" />
			</div>
		{/each}
	</div>
	<article class="mt-8">
		{data.projectDescription}
	</article>
</section>
