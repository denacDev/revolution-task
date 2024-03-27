<script>
	import ModalRemoveSchedule from './Modal_remove_schedule.svelte';
	import { openModal } from 'svelte-modals';
	export let schedules = [];
	export let selectedSchedule = undefined;

	//
	console.log('schedules :>> ', schedules);

	const removeSchedule = (schedule) => {
		openModal(ModalRemoveSchedule, {
			isOpen: true,
			title: 'Remove ' + schedule?.name,
			data: schedule
		});
	};
	const handleSelectItem = (e, schedule) => {
		if (e.target.classList.contains('disabled') == false) {
			// remove any other selected items
			let allActiveItems = document.querySelectorAll('.list-group-item.active');
			if (allActiveItems.length > 0) {
				for (const iterator of allActiveItems) {
					iterator.classList.remove('active');
				}
				selectedSchedule = undefined;
			}

			e.target.classList.toggle('active');
			selectedSchedule = schedule;
		}
	};
</script>

<div class="browser-container">
	<h5>Schedules</h5>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if schedules?.length > 0}
		<ul class="list-group">
			{#each schedules as schedule}
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
					on:click={(e) => {
						handleSelectItem(e, schedule);
					}}>
					{schedule.name}

					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<i
						class="bi bi-x-circle-fill remove-icon"
						title="Clear"
						on:click={(e) => {
							removeSchedule(schedule);
						}}></i>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="no-schedules">No schedules found, please create one</div>
	{/if}
</div>

<style>
	:global(li.active) {
		background-color: rgba(0, 128, 0, 0.1) !important;
		color: green !important;
		border: 1px solid rgba(0, 128, 0, 0.153) !important;
	}
	.list-group {
		padding: 10px;
		max-height: 150px;
		overflow-y: scroll;
		box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.342);
		background-color: rgba(0, 0, 0, 0.049);
	}
	.list-group-item {
		color: green;
	}
	.list-group-item:hover {
		color: green;
		background-color: rgba(0, 128, 0, 0.1);
	}
	:global(li.disabled) {
		pointer-events: none;
		cursor: not-allowed;
		opacity: 0.6;
		color: gray !important;
	}
	.browser-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		height: 100%;
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
	/* remove icon */
	.remove-schedule-icon {
		color: gray;
		cursor: pointer;
	}
	.remove-schedule-icon:hover {
		color: red;
		cursor: pointer;
	}
</style>
