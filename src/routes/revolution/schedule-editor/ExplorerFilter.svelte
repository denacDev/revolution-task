<script>
	import { allSchedules } from '$lib/stores/databaseStores';

	let filterValue = '';
	let temp = $allSchedules;

	const handleFilterValue = () => {
		$allSchedules = $allSchedules.filter((item) => new RegExp('^' + filterValue.replace(/\*/g, '.*')).test(item.name));
		if ($allSchedules.length == 0) {
			$allSchedules = temp;
		}
		if (filterValue.length == 0) {
			$allSchedules = temp;
		}
	};
</script>

<div class=" filter-container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->

	<input type="text" placeholder="Search Schedule" id="filter-schedule-input" bind:value={filterValue} on:input={handleFilterValue} />
</div>

<style>
	.filter-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;

		padding: 5px 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		max-width: 100%;
		width: 100%;
	}

	/* fileter input */
	input#filter-schedule-input {
		width: 100%;
		min-width: max-content;
		padding: 3px;
	}
</style>
