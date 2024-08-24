<script lang="ts">
	export let subtitle: string;
	export let photo: string;
</script>

<div class="flex flex-col md:flex-row items-center justify-between h-full gap-16">
	<div class="md:basis-2/4">
		<p class="text-primaryBlue text-[26px] md:text-[40px] text-left">
			<span>Marianna Matuszewska</span>
			<br />
			<span>Zuzanna Stefanowicz</span>
			<br />
			<span>- architektki wnętrz</span>
			<br />
			<span>absolwentki Akademii</span>
			<br />
			Sztuk Pięknych w Gdańsku
		</p>
		<p class="text-primaryBlue text-2xl mt-16">
			{subtitle}
		</p>
	</div>
	<div class="md:basis-1/4 h-full">
		<img class="h-full" alt="Mesa studio team" src={photo} />
	</div>
</div>
