<script lang="ts">
	import type { Project } from '$lib/server/projects';
	export let projects: Array<Project>;
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
	{#each projects as project}
		<div class="project-container cursor-pointer">
			<a class="block w-full h-full" href={`projects/${project.slug}`}>
				<img
					class="aspect-square object-cover"
					src={project.projectMainImg}
					alt="projekt wnętrza"
				/>
				<p class="mt-4 project-subtitle">{project.title}</p>
			</a>
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
