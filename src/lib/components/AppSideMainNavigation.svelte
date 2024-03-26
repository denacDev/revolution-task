<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import logo from '$lib/static/revolution_transparent.png';
	import logoSmall from '$lib/static/revolution_small_transparent.png';
	let menuOpen = false;
	const handleSideMenuClose = (params) => {
		menuOpen = !menuOpen;

		// close the navigation menu
		let navigation = document.getElementById('site-main-side-navigation');
		let emptyPlaceholder = document.querySelector('.empty-placeholder');
		if (menuOpen == true) {
			navigation.classList.add('visible');
			emptyPlaceholder.style.display = 'block';
		} else {
			navigation.classList.remove('visible');
			emptyPlaceholder.style.display = 'none';
		}
		let logoContainer = document.getElementById('logo-container');
	};
</script>

<nav id="site-main-side-navigation">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="nav-link-disabled">
		<div class="empty-placeholder" style="display:none;">&nbsp;</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<i class="bi bi-arrow-right-square" class:flipArrw={menuOpen == true} style="font-size:1rem;" on:click={handleSideMenuClose}></i>
	</div>
	<div class="nav-link-disabled border-bottom" id="logo-container">
		<div class="logo">
			{#if menuOpen == true}
				<!-- content here -->
				<a href={$page.url.origin}><img src={logo} title="Navigat to the Home site" alt="Revolution logo" width="80px" /></a>
			{:else}
				<a href={$page.url.origin}><img src={logoSmall} title="Navigat to the Home site" alt="Revolution logo" width="20px" /></a>
			{/if}
		</div>
	</div>

	<a title="Schedule Editor" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/schedule-editor'} class:active-link={$page.route.id.includes('/schedule-editor')} data-tippy-content="aaaaaaa"
		><i class="bi bi-gear-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Schedule Editor</span>
	</a>

	<a title="Storage Manager" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/storage-manager'} class:active-link={$page.route.id.includes('/storage-manager')}
		><i class="bi bi-database-gear" style="font-size:1rem;"></i>
		<span class="link-lbl">Storage Manager</span></a>

	<a title="Object Manager" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/object-manager'} class:active-link={$page.route.id.includes('/object-manager')}
		><i class="bi bi-building-fill-gear" style="font-size:1rem;"></i>
		<span class="link-lbl">Object Manager</span></a>

	<a title="Device manager" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/device-manager'} class:active-link={$page.route.id.includes('/device-manager')}
		><i class="bi bi-usb-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Device Manager</span></a>

	<a title="System" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/system'} class:active-link={$page.route.id.includes('/system')}
		><i class="bi bi-cpu-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">System</span></a>

	<a title="Event Viewer" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/event-viewer'} class:active-link={$page.route.id.includes('/event-viewer')}
		><i class="bi bi-egg-fried" style="font-size:1rem;"></i>
		<span class="link-lbl">Event Viewer</span></a>

	<a title="Simulation" class="nav-link border-bottom" href={$page.url.origin + '/revolution' + '/simulation'} class:active-link={$page.route.id.includes('/simulation')}
		><i class="bi bi-diagram-3-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Simulation</span></a>
</nav>

<style>
	nav {
		height: 100vh;
		box-shadow: none;

		display: block;
		width: 35px;
		overflow: hidden;
	}

	:global(nav.visible) {
		min-width: max-content !important;
		width: max-content;
		box-shadow:
			2px 0px 10px 0px rgba(0, 0, 0, 0.1),
			-12px 0px 13px -15px rgba(0, 0, 0, 1) inset;
	}
	.logo,
	.empty-placeholder {
		width: 100%;
		text-align: center !important;
	}

	.nav-link:hover,
	.nav-link:focus {
		background-color: #f5f5f5;
		cursor: pointer;
	}
	.nav-link:last-of-type {
		border-bottom: none !important;
	}
	.nav-link-disabled {
		background-color: none;
	}
	.active-link {
		background-color: #f5f5f5;
		/* box-shadow: 15px 0px 13px -15px rgba(0, 0, 0, 1) inset; */
		cursor: pointer;
	}
	.nav-link,
	.nav-link-disabled {
		width: 100%;
		min-width: max-content;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		padding: 10px;
	}
	.link-lbl {
		/* border: 1px solid black; */
		width: 100%;
		min-width: max-content;
	}
	.bi {
		transition: all 0.2s ease-in-out;
		transform-style: preserve-3d;
	}
	.bi:hover {
		color: red;
		cursor: pointer;
	}

	.flipArrw {
		transform: rotateY(180deg);
	}
</style>
