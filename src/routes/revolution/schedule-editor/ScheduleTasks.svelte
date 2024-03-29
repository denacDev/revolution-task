<script>
	import TasksBrowser from './TasksBrowser.svelte';
	import TasksControls from './TasksControls.svelte';
	export let selectedSchedule;
	export let selectedTask = undefined;
</script>

<div class="tasks-container-and-controls">
	<TasksControls bind:selectedSchedule />
	<div class="tasks-container" id="tasks">
		<TasksBrowser bind:selectedTask />
	</div>
</div>

<style>
	.tasks-container,
	.tasks-container-and-controls {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
	}
	.tasks-container {
		width: 100%;
		margin: 0px;
	}

	@media (max-width: 576px) {
		.tasks-container {
			flex-direction: column-reverse;
			justify-content: center;
			width: inherit;
		}
		.tasks-container-and-controls {
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
