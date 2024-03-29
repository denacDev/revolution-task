<script>
	import ModalRemoveSchedule from './Modal_remove_schedule.svelte';
	import { openModal } from 'svelte-modals';
	import { invertArray, customize_date } from '$lib/scripts/helpers.funcs';
	export let schedules = [];
	export let selectedSchedule = undefined;

	//

	const removeSchedule = (schedule) => {
		openModal(ModalRemoveSchedule, {
			isOpen: true,
			title: 'Remove ' + schedule?.name,
			data: schedule
		});
	};
	const handleSelectItem = (e, schedule) => {
		let target = document.getElementById(e);
		if (target.classList.contains('disabled') == false) {
			// remove any other selected items
			let allActiveItems = document.querySelectorAll('.list-group-item.active');
			if (allActiveItems.length > 0) {
				for (const iterator of allActiveItems) {
					iterator.classList.remove('active');
				}
				selectedSchedule = undefined;
			}

			target.classList.toggle('active');
			selectedSchedule = schedule;
		}
	};
</script>

<div class="browser-container">
	<h5>Schedules</h5>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if schedules?.length > 0}
		<ul class="box-inset list-group">
			<!-- invertArray -->
			{#each invertArray(schedules) as schedule}
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					id="list-group-item-{schedule.id}"
					class="list-group-item"
					on:click={(e) => {
						handleSelectItem(`list-group-item-${schedule.id}`, schedule);
					}}>
					<div class="top">
						<div class="top-left">
							<i>{schedule.name}</i>
						</div>
						<div class="top-right">
							<!-- svelte-ignore missing-declaration -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<i
								class="bi bi-x-circle-fill remove-icon"
								title="Clear"
								on:click={(e) => {
									removeSchedule(schedule);
								}}></i>
						</div>
					</div>
					<div class="bottom">
						<div>Created: {customize_date(schedule.created, true)}</div>
						<div>Last updated: {customize_date(schedule.updated, true)}</div>
					</div>
					<div></div>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="no-schedules">No schedules found, please create one</div>
	{/if}
</div>

<style>
	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0px;
	}

	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0px;
	}
	.bottom div {
		font-size: xx-small !important;
		color: var(--bs-secondary-color);
	}

	.list-group {
		max-height: 150px;
		overflow-y: scroll;
	}
	.list-group-item {
		color: var(--bs-teal);
		padding: 0.2rem var(--bs-list-group-item-padding-x);
	}
	.list-group-item:hover {
		color: var(--bs-teal);
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
</style>
