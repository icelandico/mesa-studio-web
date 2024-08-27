<script lang="ts">
	import '../app.css';
	import Head from '$lib/components/head.svelte';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import Hamburger from '$lib/components/navigation/hamburger.svelte';
	let windowSize: number;
</script>

<Head />
<svelte:window bind:innerWidth={windowSize} />

<Navigation />
<Hamburger />
{#if windowSize > 768}
	<Navigation />
{:else}
	<Hamburger />
{/if}

<slot />
