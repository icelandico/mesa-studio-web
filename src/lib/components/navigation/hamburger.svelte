<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MesaIcon from '../icons/mesaIcon.svelte';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { get } from 'svelte/store';

	let open = false;
	let currentRoute = '';
	$: currentRoute = $page.url.pathname;

	function handleToggleMenu(route?: string) {
		open = !open;
		if (currentRoute.includes('/projects') && route) {
			goto(route);
		}
	}

	function handleLanguageSwitch() {
		const newLang = languageTag() === 'en' ? 'pl' : 'en';
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLang);
		goto(localisedPath);
	}
</script>

<header class="fixed w-full z-10">
	<nav
		class="h-[80px] flex bg-white justify-center items-center px-4 text-xl text-light text-primaryBlue"
	>
		<div class="flex w-full justify-between items-center">
			<div><a class="w-full h-full" href="/"><MesaIcon height={60} /></a></div>
			<div
				class="relative w-[40px] h-[26px] flex flex-col justify-between pointer z-50"
				on:click={() => handleToggleMenu()}
			>
				<span
					class="h-1 block w-full b-radius-[10px] bg-primaryBlue transition ease duration-250 {open
						? 'active-1'
						: ''}"
				/>
				<span
					class="h-1 block w-full b-radius-[10px] bg-primaryBlue transition ease duration-250 {open
						? 'active-2'
						: ''}"
				/>
				<span
					class="h-1 block w-full b-radius-[10px] bg-primaryBlue transition ease duration-250 {open
						? 'active-3'
						: ''}"
				/>
			</div>
		</div>
		<div
			class="fixed flex justify-center align-center bg-white h-screen left-0 right-0 bottom-0 z-40 {open
				? ''
				: 'hidden'}"
		>
			<ul class="flex flex-col justify-center items-center p-12 gap-8">
				<li>
					<a
						class="text-4xl inline-block"
						href="#studio"
						on:click={() => handleToggleMenu('/#studio')}>studio</a
					>
				</li>
				<li>
					<a
						class="text-4xl inline-block"
						href="#projects"
						on:click={() => handleToggleMenu('/#projects')}>projekty</a
					>
				</li>
				<li>
					<a
						class="text-4xl inline-block cursor-pointer"
						href="#contact"
						on:click={() => handleToggleMenu('/#contact')}>kontakt</a
					>
				</li>
				<li class="text-4xl cursor-pointer text-right">
					<span class="inline-block cursor-pointer" on:click={handleLanguageSwitch}
						>{languageTag() === 'en' ? 'pl' : 'en'}</span
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.close-icon {
		position: absolute;
		width: 50px;
		height: 50px;
		cursor: pointer;
		z-index: 999;
		right: 10px;
		top: 10px;
	}

	.close-icon::before,
	.close-icon::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 45px;
		height: 5px;
		background-color: black;
		transform-origin: center;
		border-radius: 5px;
	}

	.close-icon::before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.close-icon::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.active-1 {
		transform: translateY(11px) rotate(45deg);
	}

	.active-2 {
		opacity: 0;
	}

	.active-3 {
		transform: translateY(-11px) rotate(-45deg);
	}
</style>
