<script>
	import { allSchedules } from '$lib/stores/databaseStores';
	import { onMount } from 'svelte';

	let filterValue = '';
	let temp = $allSchedules;
	onMount(() => {
		// let temp =
	});
	const handleFilterValue = () => {
		console.log('filterValue :>> ', filterValue);

		$allSchedules = $allSchedules.filter((item) => new RegExp('^' + filterValue.replace(/\*/g, '.*')).test(item.name));
		console.log('$allSchedules :>> ', $allSchedules);
		if ($allSchedules.length == 0) {
			$allSchedules = temp;
		}
		if (filterValue.length == 0) {
			$allSchedules = temp;
		}
	};
</script>

<div class="box filter-container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->

	<input type="text" placeholder="Search Schedule" id="filter-schedule-input" bind:value={filterValue} on:input={handleFilterValue} />
	<!-- <i class="bi bi-funnel-fill filter-schedule-icon" class:control-icon-disabled={filterValue == ''} title="New Schedule"></i> -->
</div>

<style>
	.filter-container {
		/* border: 1px solid black; */

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
	.bi {
		font-size: 1.5rem;
		text-shadow: 0px 0px 1px white;
		transition: all 0.3s ease;
	}
	.bi:hover {
		scale: 1.1;
		cursor: pointer;
	}

	.control-icon-disabled {
		color: gray !important;
		cursor: not-allowed !important;
		scale: 1 !important;
	}
	/* filter icon */
	.filter-schedule-icon {
		color: rgb(0, 136, 255);
		cursor: pointer;
	}
	/* remove icon */
	.remove-schedule-icon {
		color: red;
		cursor: pointer;
	}

	/* fileter input */
	input#filter-schedule-input {
		width: 100%;
		min-width: max-content;
		padding: 3px;
	}
</style>
