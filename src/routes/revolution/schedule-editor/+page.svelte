<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import pb from '$lib/scripts/dbConnection';
	import { allSchedules } from '$lib/stores/databaseStores';
	import { onDestroy, onMount } from 'svelte';
	import Explorer from './Explorer.svelte';
	export let data;
	let dataIsLoading = true;

	const createData = (e) => {
		if ($allSchedules?.length > 0) {
			$allSchedules = [...$allSchedules, e.record];
		} else {
			$allSchedules = [e.record];
		}
	};
	const updateData = (e) => {
		let filteredUpdate = $allSchedules.filter((schedule) => schedule.id != e.record.id);
		$allSchedules = [...filteredUpdate, e.record];
	};
	const deleteData = (e) => {
		console.log('$allSchedules :>> ', $allSchedules);
		$allSchedules = $allSchedules.filter((schedule) => schedule.id != e.record.id);
	};

	const subscribeAndUpdateData = () => {
		pb.authStore?.loadFromCookie(document.cookie || '');
		pb.realtime.subscribe(
			'schedules',
			function (e) {
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

	const initializeData = () => {
		setTimeout(() => {
			$allSchedules = data.schedules.items || [];
			dataIsLoading = false;
		}, 500);
	};
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
		<div class="center-of-page">
			<img src="https://media1.tenor.com/m/-n8JvVIqBXkAAAAC/dddd.gif" alt="spinner" width="50px" />
			<div>loading data..</div>
		</div>
	{:else}
		<Explorer data={$allSchedules} />
	{/if}
</div>

<style>
	.content {
		position: relative;
	}
	.center-of-page {
		display: flex;

		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: var(--site-gap-flex);
		height: 100vh;
	}
</style>
