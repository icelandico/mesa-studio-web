<script lang="ts">
	import type { Project } from '$lib/server/projects';
	export let projects: Array<Project>;
</script>

<div class="flex flex-wrap w-full justify-between">
	{#each projects as project}
		<div class="w-full md:w-[30%] m-[10px] project-container cursor-pointer">
			<img class="aspect-square object-cover" src={project.projectMainImg} />
			<p class="mt-4 project-subtitle">{project.title}</p>
		</div>
	{/each}
</div>

<style>
	@media screen and (min-width: 768px) {
		.project-container:nth-child(3n + 1) .project-subtitle {
			text-align: left;
		}

		.project-container:nth-child(3n + 2) .project-subtitle {
			text-align: center;
		}

		.project-container:nth-child(3n) .project-subtitle {
			text-align: right;
		}
	}
</style>
