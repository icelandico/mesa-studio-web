<script lang="ts">
	import InstagramIcon from '$lib/components/icons/instagramIcon.svelte';
	import FacebookIcon from '$lib/components/icons/facebookIcon.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import Gradient from '../icons/gradient.svelte';

	function validationErrors(node) {
		const output = node;
		node.addEventListener('invalid', onInvalid);
		node.addEventListener('input', onInput);
		function onInvalid() {
			const errorMessage: HTMLDivElement | null = document.querySelector('.error-message');
			node.style.outlineColor = '#ca634d';
			errorMessage?.classList.remove('hidden');
		}

		function onInput() {
			if (node.validationMessage === '') output.textContent = '';
		}

		return {
			destroy() {
				node.removeEventListener('invalid', onInvalid);
				node.removeEventListener('input', onInput);
			}
		};
	}

	function onSubmitClick(event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();

		if (valid == false) {
			event.preventDefault();
			[...form].find((e) => e.validity.valid == false)?.focus();
		}
	}
</script>

<div
	class="flex flex-col md:flex-row items-center md:justify-between h-full w-full pb-8 md:pb-0 gap-8 md:gap-16 text-primaryBlue relative"
>
	<div class="md:basis-1/3">
		<h2 class="text-primaryBlue text-[40px] text-left">{m.contactWithUs()}:</h2>
		<div class="flex mt-4 gap-8">
			<div class="flex flex-col">
				<a href="mailto:hi@mesa-studio.pl">hi@mesa-studio.pl</a>
				<a href="tel:799 203 520">tel: 799 203 520</a>
			</div>
			<div class="flex flex-col">
				<a
					class="flex items-center gap-2"
					href="https://www.instagram.com/mesa_studio_/"
					target="_blank"><InstagramIcon width={20} height={20} />mesa_studio_</a
				>
				<a
					class="flex items-center gap-2"
					href="https://www.facebook.com/people/mesa-studio/100088669205685/"
					target="_blank"><FacebookIcon width={20} height={20} />mesa studio</a
				>
			</div>
		</div>
	</div>
	<div class="-z-10 absolute w-full h-full">
		<Gradient />
	</div>
	<div class="md:basis-1/2 w-full">
		<form
			name="contact"
			class="flex flex-col gap-4"
			data-netlify="true"
			method="POST"
			action="/form-submit"
		>
			<div class="flex flex-col">
				<input type="hidden" name="form-name" value="contact" />
				<label class="text-primaryBlue" for="name">{m.contactFormName()}</label>
				<input
					class="border-lightBlue border-2 mt-2 h-10 px-2"
					type="text"
					id="name"
					name="name"
					required
					use:validationErrors
				/>
			</div>
			<div class="flex flex-col md:flex-row justify-between gap-4 w-full">
				<div class="flex flex-col w-full">
					<label class="text-primaryBlue" for="email">{m.contactFormEmail()}</label>
					<input
						class="border-lightBlue border-2 mt-2 h-10 px-2"
						type="text"
						id="email"
						name="email"
						required
						use:validationErrors
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
				<label class="text-primaryBlue" for="description">{m.contactFormDescription()}</label>
				<textarea
					class="border-lightBlue border-2 mt-2 px-2 pt-2"
					id="description"
					name="description"
					rows="4"
					required
					use:validationErrors
				/>
			</div>
			<div class="error-message hidden text-[#ca634d]">{m.contactValidationInfo()}</div>
			<button
				type="submit"
				on:click={onSubmitClick}
				class="p-2 bg-white border-lightBlue border-2 text-primaryBlue rounded-[50%] h-[75px] w-[75px] self-center"
				>{m.contactSubmit()}</button
			>
		</form>
	</div>
</div>

<style>
	.hidden {
		display: none;
	}

	.visible {
		display: unset;
	}
</style>
