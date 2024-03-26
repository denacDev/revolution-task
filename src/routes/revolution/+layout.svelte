<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	console.log('$page :>> ', $page);
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import SideMainNavigation from '$lib/components/AppSideMainNavigation.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="page">
	<SideMainNavigation />

	<div id="page-content">
		<header id="page-header">
			<div id="logo"><h1>{PUBLIC_APP_NAME}</h1></div>
		</header>
		<slot />
	</div>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		/* gap: 10px; */
	}
	#page-content {
		width: 100%;
		padding: 10px;
		background-color: #f5f5f5;
	}
</style>
