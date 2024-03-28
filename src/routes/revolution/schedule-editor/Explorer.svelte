<script>
	// import { goto } from '$app/navigation';
	import notifications, { addNotification } from '$lib/scripts/notifications';
	import { sendRequest, serializeNonPOJOs } from '$lib/scripts/helpers.funcs.js';
	import { schedule_editor_subNav_item } from '$lib/stores/uiStores';

	import ExplorerBrowser from './ExplorerBrowser.svelte';
	import ExplorerControls from './ExplorerControls.svelte';
	import ExplorerFilter from './ExplorerFilter.svelte';
	import ScheduleNavigation from './ScheduleNavigation.svelte';
	import ScheduleTasks from './ScheduleTasks.svelte';
	import ScheduleProperties from './ScheduleProperties.svelte';
	import ScheduleParameters from './ScheduleParameters.svelte';
	import ScheduleInteraction from './ScheduleInteraction.svelte';
	let activeControl = false;
	let selectedSchedule = undefined;
	export let data;
</script>

<div class="explorer-container">
	<div class="controls-and-filter-container">
		<ExplorerControls bind:activeControl />
		<ExplorerFilter />
	</div>

	<div class="">
		<ExplorerBrowser schedules={data} bind:selectedSchedule />
	</div>
	<div class="">
		<div class=" schedule-title">
			<span class="lbl">Selected Schedule:</span>
			{#if selectedSchedule == undefined}
				<span class="text-warning">Select a schedule</span>
			{:else}
				<div class="text-success">{selectedSchedule.name}</div>
			{/if}
		</div>
		{#if selectedSchedule != undefined}
			<div class="box">
				<ScheduleNavigation />
				{#if $schedule_editor_subNav_item == 'tasks'}
					<div class="box-inset"><ScheduleTasks {selectedSchedule} /></div>
				{:else if $schedule_editor_subNav_item == 'properties'}
					<div class="box-inset"><ScheduleProperties /></div>
				{:else if $schedule_editor_subNav_item == 'parameters'}
					<div class="box-inset"><ScheduleParameters /></div>
				{:else if $schedule_editor_subNav_item == 'interaction'}
					<div class="box-inset"><ScheduleInteraction /></div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.text-warning, .text-success) {
		font-size: 1.25rem;
	}

	.schedule-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
		margin: var(--site-space-y) 0px;
	}
	:global(.border-danger) {
		outline: 1px solid red;
		border-radius: 3px;
		border: 1px solid transparent;
	}
	/* custom btn with text */
	input#new-schedule-input {
		width: 100%;
		min-width: max-content;
		padding: 3px;
	}

	:global(.control-icon-disabled) {
		color: gray !important;
		cursor: not-allowed !important;
		scale: 1 !important;
	}

	.active-control .val {
		/* border: 1px solid rgba(0, 0, 0, 0.172); */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 10px;
		max-width: 100%;
		width: 100%;
	}
	.explorer-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		width: 100%;
		max-width: 650px;
		min-width: 300px;
		margin: 0px auto;
		/* max-width: 130px; */
		gap: 10px;
	}
	.controls-and-filter-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		gap: 10px;
	}
</style>
