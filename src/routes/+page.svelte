<script lang="ts">
	import SectionContact from '$lib/components/sections/sectionContact.svelte';
	import SectionStudio from '$lib/components/sections/sectionStudio.svelte';
	let element: Element;
	let clientHeight: number;
	export let data;
	const indexData = data.homePageData[0];
</script>

<section id="home" class="box-border pt-[80px] h-screen flex items-center justify-center">
	HOME
</section>
<section
	id="studio"
	bind:this={element}
	bind:clientHeight
	class="box-border pt-[80px] h-screen flex items-center justify-center"
>
	<SectionStudio subtitle={indexData.studioSubtitle} photo={indexData.studioImage} />
</section>
<section
	id="projects"
	class="box-border pt-[80px] h-screen bg-gray-300 border-8 border-indigo-400 flex items-center justify-center"
>
	PROJECTS
</section>
<section id="contact" class="box-border pt-[80px] h-screen flex items-center justify-center">
	<SectionContact />
</section>
