<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';

	import { openModal } from 'svelte-modals';
	import ModalAddNewScheduleTask from './Modal_add_new_schedule_task.svelte';
	import TasksBrowser from './TasksBrowser.svelte';
	export let selectedSchedule = undefined;

	const handleAddNewSchedule = () => {
		if (selectedSchedule != undefined) {
			openModal(ModalAddNewScheduleTask, {
				isOpen: true,
				title: 'Add New Task ',
				selectedSchedule,
				data: {}
			});
		} else {
			addNotification('Please select a schedule first', 'danger', 'long');
		}
	};
	const handleOtherAction = () => {
		addNotification('coming soon..', 'success', 'stay');
	};
</script>

<div class="tasks-container" id="tasks">
	<div class="box tasks-controls">
		<a title="Tasks" class="a-custom-simple-button" href="#" role="button" on:click={handleAddNewSchedule}>
			<i class="bi bi-gear-fill" style="font-size: 1rem;"></i>
			<span class="link-lbl">new task</span>
		</a>
		<a title="Tasks" class="a-custom-simple-button" href="#" role="button" on:click={handleOtherAction}>
			<i class="bi bi-gear-fill" style="font-size: 1rem;"></i>
			<span class="link-lbl">other task</span>
		</a>
	</div>
	<TasksBrowser />
</div>

<style>
	.tasks-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
	}

	.tasks-controls {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--site-gap-flex);
	}
	@media (max-width: 576px) {
		.tasks-container {
			flex-direction: column;
			justify-content: center;
		}
		.tasks-controls {
			flex-direction: row;
			justify-content: flex-start;
		}
	}
	.bi {
		font-size: 1.5rem;
		transition: all 0.3s ease;
		text-shadow: var(--site-icon-text-shadow);
	}
</style>
