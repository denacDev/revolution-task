<script>
	// import { goto } from '$app/navigation';
	import { schedule_editor_subNav_item } from '$lib/stores/uiStores';
	import Message from '$lib/addons/Message.svelte';

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
	let selectedTask = undefined;
	export let data;
</script>

<div class="explorer-container">
	<div class="controls-and-filter-container">
		<ExplorerControls bind:activeControl />
		<ExplorerFilter />
	</div>

	<div>
		<ExplorerBrowser schedules={data} bind:selectedSchedule />
	</div>
	<div>
		<div class=" schedule-title">
			<span class="lbl">Selected Schedule:</span>
			{#if selectedSchedule == undefined}
				<span class="text-warning">Select a schedule</span>
			{:else}
				<div class="text-success">{selectedSchedule.name}</div>
			{/if}
		</div>
		{#if selectedSchedule != undefined}
			<div class="box schedule-navigation-box">
				<ScheduleNavigation />
				{#if $schedule_editor_subNav_item == 'tasks'}
					<div class="">
						<ScheduleTasks {selectedSchedule} bind:selectedTask />
					</div>
					{#if selectedTask != undefined}
						<div class="box selected-task-container">
							<fieldset>
								<legend>Name</legend>
								<div class="box fieldset-content">
									<div class="label">Selected:</div>
									<div class="val">{selectedTask.expand.operation.name}</div>
								</div>
							</fieldset>
							<fieldset>
								<legend>Formula</legend>
								{#if selectedTask.expand.operation.formula != null}
									<div class="box">
										<div class="fieldset-content">
											<div class="label">Action:</div>
											<div class="val">{selectedTask.expand.operation.formula.action}</div>
										</div>
										<div class="fieldset-content">
											<div class="label">Repeat:</div>
											<div class="val">{selectedTask.expand.operation.formula.times}</div>
										</div>
									</div>
								{:else}
									<div class="box"><Message type="warning" title="No formula" message="There no formula for this task" spaceY={false} action="null" /></div>
								{/if}
							</fieldset>
						</div>
					{/if}
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
	.fieldset-content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: row;
		gap: var(--site-gap-flex);
	}
	:global(.selected-task-container) {
		margin: var(--site-gap-flex) auto;
	}
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

	:global(.control-icon-disabled) {
		color: gray !important;
		cursor: not-allowed !important;
		scale: 1 !important;
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
