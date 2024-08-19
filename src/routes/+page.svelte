<script lang="ts">
	import FacebookIcon from '$lib/components/icons/facebookIcon.svelte';
	import InstagramIcon from '$lib/components/icons/instagramIcon.svelte';
	let element: any;
	let clientHeight: any;

	$: console.log('height', clientHeight);
</script>

<section
	id="home"
	class="box-border pt-[80px] h-screen bg-gray-100 border-8 border-sky-600 flex items-center justify-center"
>
	HOME
</section>
<section
	id="studio"
	bind:this={element}
	bind:clientHeight
	class="box-border pt-[80px] h-screen bg-gray-200 border-8 border-lime-400 flex items-center justify-center"
>
	STUDIO
</section>
<section
	id="projects"
	class="box-border pt-[80px] h-screen bg-gray-300 border-8 border-indigo-400 flex items-center justify-center"
>
	PROJECTS
</section>
<section
	id="contact"
	class="box-border pt-[80px] h-screen bg-gray-400 border-8 border-zinc-700 flex items-center justify-center"
>
	contact
</section>
