<script lang="ts">
	import SectionContact from '$lib/components/sections/sectionContact.svelte';
	import SectionGallery from '$lib/components/sections/sectionGallery.svelte';
	import SectionProjects from '$lib/components/sections/sectionProjects.svelte';
	import SectionStudio from '$lib/components/sections/sectionStudio.svelte';
	import { languageTag } from '$lib/paraglide/runtime.js';

	let element: Element;
	let clientHeight: number;
	export let data;
	const lang = languageTag();
	const indexData = data.homePageData[0][lang];
	const projectsData = data.projectsPageData
		.filter((el) => el.locale === languageTag())
		.sort((a, b) => (new Date(a.addDate) < new Date(b.addDate) ? 1 : -1));
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
	class="box-border px-4 md:px-12 mt-12 md:pt-[80px] xl:h-screen flex flex-col lg:flex-row items-center justify-center"
>
	<SectionStudio
		subtitleOne={indexData.studioSubtitleOne}
		subtitleTwo={indexData.studioSubtitleTwo}
		subtitleThree={indexData.studioSubtitleThree}
		photo={indexData.studioImage}
	/>
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
