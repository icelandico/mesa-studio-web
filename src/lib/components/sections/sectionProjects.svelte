<script lang="ts">
	import type { Project } from '$lib/server/projects';
	import { lazyLoad } from '$lib/utils/lazyLoad';
	import * as m from '$lib/paraglide/messages.js';
	export let projects: Array<Project>;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
	<h2 class="md:hidden text-primaryBlue text-[40px] text-left capitalize">{m.projects()}</h2>
	{#each projects as project}
		<div class="project-container cursor-pointer">
			<a class="block w-full h-full" href={`projects/${project.slug}`}>
				<img
					class="aspect-square object-cover image-loading"
					use:lazyLoad={project.projectMainImg}
					alt="projekt wnętrza"
					loading="eager"
				/>
				<p class="mt-4 project-subtitle text-primaryBlue">{project.title}</p>
			</a>
		</div>
	{/each}
</div>

<style>
	@media screen and (min-width: 768px) {
		.project-container:nth-child(3n + 2) .project-subtitle {
			text-align: left;
		}

		.project-container:nth-child(3n + 3) .project-subtitle {
			text-align: center;
		}

		.project-container:nth-child(3n + 1) .project-subtitle {
			text-align: right;
		}
	}
</style>
