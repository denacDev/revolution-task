<script>
	let selectedTask = undefined;
	import { getAllTasks } from '$lib/scripts/db_actions_on_schedules';
	let listIsExpanded = false;
</script>

{#await getAllTasks()}
	<!-- getAllTasks() is pending -->
{:then tasks}
	<div class="tasks-container" class:expanded-tasks={listIsExpanded == true}>
		{#each tasks as task}
			<!-- svelte-ignore a11y-interactive-supports-focus -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				role="button"
				class="task"
				class:selected-task={selectedTask?.id == task.id}
				id="task-{task.id}"
				on:click={() => {
					selectedTask = task;
				}}>
				<i class="bi {task?.expand?.operation?.icon}"></i>
				<span class="name">{task?.expand?.operation?.name}</span>
			</div>
		{/each}
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if listIsExpanded == false}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i
			class="expand-list-icon bi bi-arrows-angle-expand"
			style="font-size: 1rem;"
			on:click={() => {
				listIsExpanded = true;
			}}></i>
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->

		<i
			class="expand-list-icon bi bi-arrows-angle-contract"
			style="font-size: 1rem;"
			on:click={() => {
				listIsExpanded = false;
			}}></i>
	{/if}
{:catch error}
	error getting all tasks:: {error}
{/await}

<style>
	.expand-list-icon {
		height: min-content;
		width: min-content;
	}
	.expanded-tasks {
		max-height: 100% !important;
	}
	.tasks-container {
		display: flex;

		flex-direction: column;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
		max-height: 150px;
		height: 100%;
		overflow-y: scroll;
		/* border: 1px solid black; */
		align-items: stretch;
		width: 100%;
	}
	.task {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
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
	.task {
		/* border: 1px solid black; */
		/* width: 100% !important; */
		/* min-width: 100% !important; */
	}
	.bi {
		/* border: 1px solid black; */
	}
	.name {
		/* border: 1px solid black; */
		width: 100%;
	}
</style>
