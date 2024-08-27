<script lang="ts">
	import SectionContact from '$lib/components/sections/sectionContact.svelte';
	import SectionGallery from '$lib/components/sections/sectionGallery.svelte';
	import SectionProjects from '$lib/components/sections/sectionProjects.svelte';
	import SectionStudio from '$lib/components/sections/sectionStudio.svelte';
	let element: Element;
	let clientHeight: number;
	export let data;
	const indexData = data.homePageData[0];
	const projectsData = data.projectsPageData;
</script>

<section
	id="home"
	class="box-border px-4 md:px-12 pt-[80px] md:h-screen flex items-center justify-center"
>
	<SectionGallery galleryPhotos={indexData.gallery} />
</section>
<section
	id="studio"
	bind:this={element}
	bind:clientHeight
	class="box-border px-4 md:px-12 mt-[80px] md:pt-[80px] md:h-screen flex items-center justify-center"
>
	<SectionStudio subtitle={indexData.studioSubtitle} photo={indexData.studioImage} />
</section>
<section id="projects" class="box-border px-4 md:px-12 pt-[80px]">
	<SectionProjects projects={projectsData} />
</section>
<section
	id="contact"
	class="box-border px-4 md:px-12 pt-[80px] md:h-screen flex items-center justify-center"
>
	<SectionContact />
</section>
