<script lang="ts">
	import { onMount } from 'svelte';

	let scrollTopValue: number;
	let activeSection: string;
	let sectionStudio: DOMRect | undefined;
	let sectionProject: DOMRect | undefined;
	let sectionContact: DOMRect | undefined;
	$: setActiveSection(scrollTopValue);

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function setActiveSection(scrollValue: number) {
		const scrollTopValue = scrollValue + 80;
		console.log('Scroll', scrollValue);
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
			class="h-[80px] flex bg-white justify-center items-center border border-2 border-gray-500 p-6 text-xl text-light text-primaryBlue"
		>
			<li class="flex-1">
				<a
					class="cursor-pointer {activeSection === 'studio' ? 'active' : ''}"
					href="#studio"
					on:click|preventDefault={scrollIntoView}>studio</a
				>
			</li>
			<li class=" flex-1">
				<a
					class="cursor-pointer {activeSection === 'projects' ? 'active' : ''}"
					href="#projects"
					on:click|preventDefault={scrollIntoView}>projekty</a
				>
			</li>
			<li class="cursor-pointer flex justify-center basis-6/12">
				<p>LOGO</p>
			</li>
			<li class="cursor-pointer flex-1 text-right">
				<a
					class="cursor-pointer {activeSection === 'contact' ? 'active' : ''}"
					href="#contact"
					on:click|preventDefault={scrollIntoView}>kontakt</a
				>
			</li>
			<li class="cursor-pointer flex-1 text-right">en</li>
		</ul>
	</nav>
</header>

<style>
	.active {
		border-bottom: 3px solid red;
	}
</style>
