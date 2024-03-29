<script>
	import { page } from '$app/stores';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import SiteMainNavigation from '$lib/components/SiteMainNavigation.svelte';
	import { Modals, closeModal } from 'svelte-modals';
	import Notification from '$lib/addons/Notification.svelte';
	import notifications from '$lib/scripts/notifications';
	export let data;
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

{#if $notifications?.length > 0}
	<div class="notifications-container">
		{#each $notifications as { id, message, type, time }}
			<!-- Render notifications -->
			<Notification {id} {message} {type} {time} />
		{/each}
	</div>
{/if}

<header>
	<Modals>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div slot="backdrop" class="backdrop" on:click={closeModal} on:keydown={closeModal} />
	</Modals>
</header>

<div class="page">
	{#if !$page.route.id.includes('/revolution')}
		<SiteMainNavigation auth={data?.user} />
		<div class="container-divider"></div>
	{/if}
	<div id="page-content">
		<slot />
	</div>
</div>

<style>
	.page {
		margin: 0px auto;
		position: relative;
		top: 0;
	}

	.container-divider {
		width: 100%;
		height: 3rem;
		border-top: solid rgba(0, 0, 0, 0.15);
		border-width: 1px 0;
		box-shadow: inset 0 0.225em 0.5em -5px rgba(0, 0, 0, 0.15);
	}
	.notifications-container {
		display: block;
		width: 100%;
		min-width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		pointer-events: none;
	}
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 3;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
