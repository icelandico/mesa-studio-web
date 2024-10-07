<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page, navigating } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { get } from 'svelte/store';
	import MesaIcon from '../icons/mesaIcon.svelte';

	let scrollTopValue: number;
	let activeSection: string;
	let sectionStudio: DOMRect | undefined;
	let sectionProject: DOMRect | undefined;
	let sectionContact: DOMRect | undefined;
	let currentRoute = '';
	let isMainPage: boolean;
	$: currentRoute = $page.url.pathname;
	$: setActiveSection(scrollTopValue);
	$: {
		const currentPath = $page.url.pathname;
		isMainPage = currentPath === '/' || currentPath === '/en';
	}

	function scrollIntoView({ target }) {
		const hashValue = target.hash;
		const el = document.querySelector(hashValue);

		if (!el && isMainPage) return;

		isMainPage
			? el.scrollIntoView({
					behavior: 'smooth'
			  })
			: goto(`/${languageTag() === 'en' ? 'en' : ''}${hashValue}`);
	}

	function setActiveSection(scrollValue: number) {
		if (!isMainPage) {
			activeSection = '';
			return;
		}
		const scrollTopValue = scrollValue + 80;
		if (
			sectionStudio &&
			scrollTopValue >= sectionStudio.top &&
			scrollTopValue <= sectionStudio.bottom
		) {
			activeSection = 'studio';
			return;
		}
		if (
			sectionContact &&
			scrollTopValue >= sectionContact.top &&
			scrollTopValue <= sectionContact.bottom
		) {
			activeSection = 'contact';
			return;
		}
		if (
			sectionProject &&
			scrollTopValue >= sectionProject.top &&
			scrollTopValue <= sectionProject.bottom
		) {
			activeSection = 'projects';
			return;
		}
		activeSection = '';
	}

	function handleLanguageSwitch() {
		const newLang = languageTag() === 'en' ? 'pl' : 'en';
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLang);
		goto(localisedPath);
	}

	onMount(() => {
		if (isMainPage) {
			sectionStudio = document.querySelector('#studio')?.getBoundingClientRect();
			sectionContact = document.querySelector('#contact')?.getBoundingClientRect();
			sectionProject = document.querySelector('#projects')?.getBoundingClientRect();

			const hash = window.location.hash;
			if (hash) {
				const el = document.querySelector(hash);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
					setTimeout(() => {
						setActiveSection(window.scrollY);
					}, 500);
				}
			}
		}
	});
</script>

<svelte:window bind:scrollY={scrollTopValue} />

<header class="fixed w-full z-10">
	<nav>
		<ul
			class="h-[80px] flex bg-white justify-center items-center px-4 md:px-12 text-xl text-light text-primaryBlue"
		>
			<li class="flex-1">
				<a
					class="inline-block navigation-item {activeSection === 'studio' ? 'active' : ''}"
					href="#studio"
					on:click|preventDefault={scrollIntoView}
					aria-label="Mesa studio info">{m.studio()}</a
				>
			</li>
			<li class="flex-1">
				<a
					class="navigation-item inline {currentRoute.includes('/projects') ||
					activeSection === 'projects'
						? 'active'
						: ''}"
					href="#projects"
					on:click|preventDefault={scrollIntoView}
					aria-label="Mesa studio projects">
					{m.projects()}
					</a>
			</li>
			<li class="cursor-pointer flex justify-center basis-6/12 h-full">
				<a
					class="inline-block"
					href={`/`}
					on:click={() => goto(`/`)}
					aria-label="Mesa studio homepage"
				>
					<MesaIcon height={80} />
				</a>
			</li>
			<li class="flex-1 text-right">
				<a
					class="inline cursor-pointer navigation-item {activeSection === 'contact'
						? 'active'
						: ''}"
					href="#contact"
					on:click|preventDefault={scrollIntoView}
					aria-label="Mesa studio contact"
				>
					{m.contact()}
				</a>
			</li>
			<li class="flex-1 text-right navigation-item">
				<span class="inline-block cursor-pointer" on:click={handleLanguageSwitch}
					>{languageTag() === 'en' ? 'pl' : 'en'}</span
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	a {
		position: relative;
	}

	a.active::after {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		content: '~';
		display: block;
		text-align: center;
		margin-top: -7px;
		font-size: 58px;
		color: currentColor;
		font-family: 'Playfair Display Variable', serif;
	}

	.navigation-item {
		font-weight: 300;
	}
</style>
