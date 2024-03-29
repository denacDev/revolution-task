<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';
	import { allOperationsForSelectedSchedule } from '$lib/stores/databaseStores';
	import { removeTask, updateTaskPosition } from '$lib/scripts/db_actions_on_schedules';
	export let currentIndex;
	export let count = 0;
	export let task = {};
	$: selectedTask = '';

	function replaceAndShift(arr, index, direction) {
		if (index < 0 || index >= arr.length) {
			return 'Index out of range';
		}
		// get present values
		let currentElement = arr[index];
		let oldElement = direction == 'up' ? arr[index - 1] : arr[index + 1];

		// switch values
		let tempCurr = currentElement;
		currentElement = oldElement;
		oldElement = tempCurr;

		// result
		let indexToUse = direction == 'up' ? index - 1 : index + 1;

		arr[index] = currentElement;
		arr[indexToUse] = oldElement;

		return arr;
	}

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

	const clearCurrentSelections = (params) => {
		let all = document.querySelectorAll('.selected-task');
		for (const elem of all) {
			elem.classList.remove('selected-task');
		}
	};
	// DECREASE POSITION
	const handleMoveTaskUp = (e, taskId) => {
		e.stopPropagation();
		clearCurrentSelections();
		// move the item in the array
		let uparr = replaceAndShift($allOperationsForSelectedSchedule, currentIndex, 'up');
		$allOperationsForSelectedSchedule = [...uparr];
	};
	// INCREASE POSITION
	const handleMoveTaskDown = (e, taskId) => {
		e.stopPropagation();
		clearCurrentSelections();
		let downarr = replaceAndShift($allOperationsForSelectedSchedule, currentIndex, 'down');
		$allOperationsForSelectedSchedule = [...downarr];
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
		on:click={(e) => {
			clearCurrentSelections();
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
				{#if currentIndex - 1 > -1}
					<i
						class="bi bi-caret-up-fill normal-icon"
						title="remove"
						on:click={(e) => {
							handleMoveTaskUp(e, task.id);
						}}></i>
				{:else}
					<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
				{/if}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				{#if currentIndex + 1 < count}
					<i
						class="bi bi-caret-down-fill normal-icon"
						title="remove"
						on:click={(e) => {
							handleMoveTaskDown(e, task.id);
						}}></i>
				{:else}
					<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
				{/if}
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
	.normal-icon {
		position: relative;
		z-index: 2;
	}
	.left-side {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
	}
	.task {
		position: relative;
		z-index: 1;
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
