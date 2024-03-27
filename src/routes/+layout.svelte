<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	console.log('$page :>> ', $page);
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import SiteMainNavigation from '$lib/components/SiteMainNavigation.svelte';
	import { Modals, closeModal } from 'svelte-modals';
	import Notification from '$lib/addons/Notification.svelte';
	import notifications, { addNotification } from '$lib/scripts/notifications';
	console.log('page :>> ', page);
	export let data;
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>
{#if $notifications?.length > 0}
	<!-- content here -->

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

	.container-divider {
		width: 100%;
		height: 3rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
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
		z-index: 2;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
