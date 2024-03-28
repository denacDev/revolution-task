<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';

	import { removeTask } from '$lib/scripts/db_actions_on_schedules';
	export let task = {};
	let selectedTask = undefined;
	const handleRemoveTask = async (taskId) => {
		try {
			let record = await removeTask(taskId);
			if (record == true) {
				addNotification('successfully removed the task', 'success', 'short');
			}
		} catch (error) {
			console.log('error :>> ', error);
			addNotification('Failed to remove task', 'danger', 'long');
		}
	};
</script>

{#if task != undefined}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<div
		role="button"
		class="task"
		class:selected-task={selectedTask?.id == task.id}
		id="task-{task.id}"
		on:click={() => {
			selectedTask = task;
		}}>
		<!-- INFORMATION -->
		<div class="left-side">
			<i class="bi {task?.expand?.operation?.icon}"></i>
			<span class="name">{task?.expand?.operation?.name}</span>
		</div>
		<!-- CONTROLS -->
		<div class="right-side">
			<div class="controls">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<i
					class="bi bi-x-circle-fill remove-icon"
					title="remove"
					on:click={() => {
						handleRemoveTask(task.id);
					}}></i>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<i
					class="bi bi-x-circle-fill remove-icon"
					title="remove"
					on:click={() => {
						handleRemoveTask(task.id);
					}}></i>
			</div>
		</div>
	</div>
{/if}

<style>
	.left-side {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
	}
	.task {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--site-gap-flex);
		padding: 0px 10px;
		border-radius: var(--site-border-radius);
		border: 1px solid rgba(0, 0, 0, 0.172);
		width: 100%;
		min-width: 100%;
	}
	.task:hover {
		background-color: rgba(0, 0, 0, 0.172);
		cursor: pointer;
	}
	.selected-task {
		background-color: rgba(0, 0, 0, 0.172);
		cursor: pointer;
	}
	@media (max-width: 576px) {
		.name {
			width: 100%;
		}
	}

	.name {
		/* border: 1px solid black; */
		width: 100%;
	}
</style>
