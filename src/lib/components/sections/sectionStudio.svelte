<script lang="ts">
	export let subtitle: string;
	export let photo: string;
	import * as m from '$lib/paraglide/messages.js';
	import Gradient from '../icons/gradient.svelte';
</script>

<div class="flex flex-col md:flex-row items-center justify-between h-full gap-16 relative">
	<div class="md:basis-2/4">
		<p class="text-primaryBlue text-[26px] md:text-[40px] text-left">
			<span>Marianna Matuszewska</span>
			<br />
			<span>Zuzanna Stefanowicz</span>
			<br />
			<span>- {m.studioLine1()}</span>
			<br />
			<span>{m.studioLine2()}</span>
			<br />
			{m.studioLine3()}
		</p>
		<p class="text-primaryBlue text-2xl mt-16">
			{subtitle}
		</p>
	</div>
	<div class="-z-10 absolute w-full h-full">
		<Gradient />
	</div>
	<div class="h-full">
		<img class="h-full object-cover w-full" alt="Mesa studio team" src={photo} />
	</div>
</div>
