<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.css';
	import Head from '$lib/components/head.svelte';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import Hamburger from '$lib/components/navigation/hamburger.svelte';
	let windowSize: number;
</script>

<svelte:window bind:innerWidth={windowSize} />

<ParaglideJS {i18n}>
	<Head />

	<Navigation />
	<Hamburger />
	{#if windowSize > 768}
		<Navigation />
	{:else}
		<Hamburger />
	{/if}

	<slot />
</ParaglideJS>
