<script lang="ts">
	export let subtitleOne: string;
	export let subtitleTwo: string;
	export let subtitleThree: string;

	export let photo: string;
	import Gradient from '../icons/gradient.svelte';
	import Image from '../image/image.svelte';
</script>

<div class="flex flex-col md:flex-row items-center justify-between h-full gap-16 relative">
	<div class="md:basis-2/4">
		<p class="text-primaryBlue text-[26px] md:text-[34px] text-left">
			{subtitleOne}
		</p>
		<p class="text-primaryBlue text-2xl mt-16">
			{subtitleTwo}
		</p>
		<p class="text-primaryBlue text-2xl mt-16">
			{subtitleThree}
		</p>
	</div>
	<div class="-z-10 absolute w-full h-full">
		<Gradient />
	</div>
	<div class="h-full">
		<Image
			image={photo}
			alt="mesa studio team"
			className="h-full object-cover w-full"
		/>
	</div>
</div>
