<script>
	import logoSmall from '$lib/static/revolution_small_transparent.png';
	import logo from '$lib/static/revolution_transparent.png';
	import { page } from '$app/stores';
	let menuOpen = false;
	const handleSideMenuClose = (params) => {
		menuOpen = !menuOpen;
	};
</script>

<!-- <span class="fs-4"> <a href={$page.url.origin}><img src={logoSmall} alt="Revolution logo" width="40" /></a> </span> -->

<nav id="site-main-navigation">
	<span class="fs-4"> <a href={$page.url.origin}><img src={logo} alt="Revolution logo" width="80" /></a> </span>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<i class="bi bi-list" id="menu-icon" on:click={handleSideMenuClose}></i>
	<div class="container d-flex flex-wrap">
		<ul class="nav me-auto" class:nav-active={menuOpen == true}>
			<li class="nav-item"><a href="/" class:active={$page.route.id === '/'} class="nav-link link-body-emphasis px-2" aria-current="page">Home</a></li>
			<li class="nav-item"><a href="/revolution" class:active={$page.route.id === '/revolution'} class="nav-link link-body-emphasis px-2">Product</a></li>
			<li class="nav-item"><a href="/features" class:active={$page.route.id === '/features'} class="nav-link link-body-emphasis px-2">Features</a></li>
			<li class="nav-item"><a href="/shop" class:active={$page.route.id === '/shop'} class="nav-link link-body-emphasis px-2">Shop</a></li>
			<li class="nav-item"><a href="/faqs" class:active={$page.route.id === '/faqs'} class="nav-link link-body-emphasis px-2">FAQs</a></li>
			<li class="nav-item"><a href="/about" class:active={$page.route.id === '/about'} class="nav-link link-body-emphasis px-2">About</a></li>
		</ul>
	</div>
	<div class="container login-container d-flex flex-wrap">
		<ul class="nav" class:nav-active={menuOpen == true}>
			<li class="nav-item"><a href="/login" class:active={$page.route.id === '/login'} class="nav-link link-body-emphasis px-2">Login</a></li>
			<li class="nav-item"><a href="/register" class:active={$page.route.id === '/register'} class="nav-link link-body-emphasis px-2">Sign up</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
		gap: 10px;
	}
	.container {
		width: max-content;
	}

	.active {
		background-color: #e9ecef;
	}
	#menu-icon {
		display: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	@media (max-width: 320px) {
		#menu-icon {
			display: block;
		}
		.nav-item {
			width: 100%;
			text-align: center;
		}
		.nav-item:hover {
			background-color: #e9ecef;
		}
		/* hide nav when menu is closed */
		.nav {
			height: 0;
			opacity: 0;
			overflow: hidden;
			transition: all 0.3s ease;
		}
		:global(.nav-active) {
			min-height: 100% !important;
			height: 100% !important;
			opacity: 1 !important;
		}
	}
	@media (max-width: 420px) {
		nav {
			flex-direction: column;
		}
		.container {
			width: auto;
		}
		.nav {
			justify-content: space-around;
		}
	}
	@media (max-width: 640px) {
		nav {
			flex-direction: column;
		}

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
	}
	@media (min-width: 640px) {
		nav {
			justify-content: flex-start;
		}
		.container {
			/* border: 1px solid black; */
			width: 100%;
		}
		.login-container {
			/* border: 1px solid black; */
			width: max-content !important;
			min-width: max-content !important;
		}
	}
</style>
