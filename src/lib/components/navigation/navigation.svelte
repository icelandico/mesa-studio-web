<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const MAIN_PAGE = '/';

	let scrollTopValue: number;
	let activeSection: string;
	let sectionStudio: DOMRect | undefined;
	let sectionProject: DOMRect | undefined;
	let sectionContact: DOMRect | undefined;
	let currentRoute = '';
	$: currentRoute = $page.url.pathname;
	$: setActiveSection(scrollTopValue);
	$: isMainPage = currentRoute === MAIN_PAGE;

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el && isMainPage) return;
		isMainPage
			? el.scrollIntoView({
					behavior: 'smooth'
			  })
			: goto(`/${target.getAttribute('href')}`);
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

	onMount(() => {
		sectionStudio = document.querySelector('#studio')?.getBoundingClientRect();
		sectionProject = document.querySelector('#projects')?.getBoundingClientRect();
		sectionContact = document.querySelector('#contact')?.getBoundingClientRect();
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
					class="inline-block {activeSection === 'studio' ? 'active' : ''}"
					href="#studio"
					on:click|preventDefault={scrollIntoView}>studio</a
				>
			</li>
			<li class="flex-1">
				<a
					class="inline-block {currentRoute.includes('/projects') || activeSection === 'projects'
						? 'active'
						: ''}"
					href="#projects"
					on:click|preventDefault={scrollIntoView}>projekty</a
				>
			</li>
			<li class="inline-block cursor-pointer flex justify-center basis-6/12">
				<a class="inline-block" on:click={() => goto('/')}>LOGO</a>
			</li>
			<li class="flex-1 text-right">
				<a
					class="inline-block cursor-pointer {activeSection === 'contact' ? 'active' : ''}"
					href="#contact"
					on:click|preventDefault={scrollIntoView}>kontakt</a
				>
			</li>
			<li class="cursor-pointer flex-1 text-right">en</li>
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
	}
</style>
