<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	import '../app.css';
	import Head from '$lib/components/head.svelte';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import Hamburger from '$lib/components/navigation/hamburger.svelte';
	let windowSize: number;
	let hideNav = true;
	$: {
		const currentPath = $page.url.pathname;
		hideNav = currentPath.includes('form-submit');
	}
</script>

<svelte:window bind:innerWidth={windowSize} />

<ParaglideJS {i18n}>
	<Head />

	{#if windowSize > 768 && !hideNav}
		<Navigation />
	{:else if windowSize < 768 && !hideNav}
		<Hamburger />
	{/if}

	<slot />
</ParaglideJS>
