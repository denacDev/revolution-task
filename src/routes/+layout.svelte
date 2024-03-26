<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	console.log('$page :>> ', $page);
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import SiteMainNavigation from '$lib/components/SiteMainNavigation.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="page">
	{#if !$page.route.id.includes('/revolution')}
		<SiteMainNavigation />
		<!-- content here -->
		<div class="container-divider"></div>
	{/if}
	<div id="page-content">
		<slot />
		<!-- <div class="container-divider"></div> -->
	</div>
</div>

<style>
	.page {
		margin: 0px auto;
		/* border: 1px solid red; */
		position: relative;
		top: 0;
	}
	#page-content {
		/* border: 1px solid black; */
	}
	.container-divider {
		width: 100%;
		height: 3rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
		border-top: solid rgba(0, 0, 0, 0.15);
		border-width: 1px 0;
		box-shadow: inset 0 0.225em 0.5em -5px rgba(0, 0, 0, 0.15);
	}
</style>
