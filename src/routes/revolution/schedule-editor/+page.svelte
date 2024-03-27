<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import pb from '$lib/scripts/dbConnection';
	import { onDestroy, onMount } from 'svelte';
	import Explorer from './Explorer.svelte';
	export let data;
	let dataIsLoading = true;

	const createData = (e) => {
		//
	};
	const updateData = (e) => {
		//
	};
	const deleteData = (e) => {
		//
	};

	const subscribeAndUpdateData = () => {
		pb.authStore?.loadFromCookie(document.cookie || '');
		pb.realtime.subscribe(
			'schedules',
			function (e) {
				// console.log('subscribe and update data');
				// console.log('e :>> ', e);
				switch (e.action) {
					case 'create':
						createData(e);
						break;
					case 'update':
						updateData(e);
						break;
					case 'delete':
						deleteData(e);
						break;

					default:
						break;
				}
			},
			{} // expand
		);
	};

	const initializeData = () => {};
	onDestroy(() => {
		pb.collection('schedules').unsubscribe();
	});

	onMount(async () => {
		initializeData();
		subscribeAndUpdateData();
	});
</script>

<svelte:head>
	<title>Schedule Editor - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content container-fluid fill-height">
	{#if dataIsLoading == true}
		<p>loading data..</p>
	{:else}
		<Explorer {data} />
	{/if}
</div>

<style>
	@media (max-width: 576px) {
	}
</style>
