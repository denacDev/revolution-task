<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	console.log('$page :>> ', $page);
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import SideMainNavigation from '$lib/components/AppSideMainNavigation.svelte';
	import Message from '$lib/addons/Message.svelte';

	export let data;
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="page">
	<SideMainNavigation />

	<div id="page-content">
		{#if data?.user == undefined}
			<div class="page-not-loaded">
				<Message type="danger" title="Access error" message="Please login in order to access this area" spaceY={false} action="login" />
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(html::-webkit-scrollbar) {
		display: none;
	}
	:global(body::-webkit-scrollbar) {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(html, body) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.page-not-loaded {
		display: flex;
		justify-content: center;
		margin: 100px auto;
		padding: 10px;
	}
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

	@media (max-width: 576px) {
		.page {
			flex-direction: column;
		}
		:global(.content) {
			display: flex;
			flex-direction: column;
		}
	}
</style>
