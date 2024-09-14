<script>
	import InstagramIcon from '$lib/components/icons/instagramIcon.svelte';
	import FacebookIcon from '$lib/components/icons/facebookIcon.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div
	class="flex flex-col md:flex-row items-center md:justify-between h-full w-full pb-8 md:pb-0 gap-8 md:gap-16 text-primaryBlue"
>
	<div class="md:basis-1/3">
		<p class="text-primaryBlue text-[40px] text-left">{m.contactWithUs()}:</p>
		<div class="flex justify-between mt-4">
			<div class="flex flex-col basis-1/2">
				<a href="mailto:hi@mesa-studio.pl">hi@mesa-studio.pl</a>
				<a href="tel:799 203 520">tel: 799 203 520</a>
			</div>
			<div class="flex flex-col basis-1/2">
				<a
					class="flex items-center gap-2"
					href="https://www.instagram.com/mesa_studio_/"
					target="_blank"><InstagramIcon width={15} height={15} />mesa_studio_</a
				>
				<a
					class="flex items-center gap-2"
					href="https://www.facebook.com/people/mesa-studio/100088669205685/"
					target="_blank"><FacebookIcon width={15} height={15} />mesa studio</a
				>
			</div>
		</div>
	</div>
	<div class="md:basis-1/2 w-full">
		<form name="contact" class="flex flex-col gap-4" data-netlify="true" method="POST">
			<div class="flex flex-col">
				<label class="text-primaryBlue" for="name">{m.contactFormName()}</label>
				<input class="border-lightBlue border-2 mt-2 h-10 px-2" type="text" id="name" name="name" />
			</div>
			<div class="flex flex-col md:flex-row justify-between gap-4 w-full">
				<div class="flex flex-col w-full">
					<label class="text-primaryBlue" for="email">{m.contactFormEmail()}</label>
					<input
						class="border-lightBlue border-2 mt-2 h-10 px-2"
						type="text"
						id="email"
						name="email"
					/>
				</div>
				<div class="flex flex-col w-full">
					<label class="text-primaryBlue" for="phone">{m.contactFormPhone()}</label>
					<input
						class="border-lightBlue border-2 mt-2 h-10 px-2"
						type="text"
						id="phone"
						name="phone"
					/>
				</div>
			</div>
			<div class="flex flex-col">
				<label class="text-primaryBlue" for="description">{m.contactFormDescription()}?</label>
				<textarea
					class="border-lightBlue border-2 mt-2 px-2 pt-2"
					id="description"
					name="description"
					rows="4"
				/>
			</div>
			<button type="submit" class="p-2 bg-lightBlue text-white">{m.contactSubmit()}</button>
		</form>
	</div>
</div>
