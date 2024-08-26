<script lang="ts">
	export let projects: Array<{ title: string; img: string }> = [
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		},
		{
			title: 'Lorem ipsum Zjazdowa street',
			img: 'xyz'
		}
	];
</script>

<div class="flex flex-wrap w-full justify-between">
	{#each projects as project}
		<div class="w-full md:w-[30%] m-[10px] project-container cursor-pointer">
			<div class="bg-green-700 aspect-square" />
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
