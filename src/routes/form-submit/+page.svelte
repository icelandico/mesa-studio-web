<script>
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="bg-blue-300 fixed h-screen w-full z-9999 flex justify-center items-center">
	<div
		class="h-[15%] flex flex-col items-center justify-center p-4 bg-white rounded-md gap-6 text-[#003399]"
	>
		<p class="font-bold">{m.contactSubmitMessage()}</p>
		<a class="cursor-pointer self-start text-left" href={'/'}>
			{m.backToSite()}
		</a>
	</div>
</div>
