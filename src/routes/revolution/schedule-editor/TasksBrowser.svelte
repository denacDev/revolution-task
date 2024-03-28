<script>
	import pb from '$lib/scripts/dbConnection';
	import { invertArray, customize_date } from '$lib/scripts/helpers.funcs';
	import TaskBadge from './TaskBadge.svelte';
	import Message from '$lib/addons/Message.svelte';

	import { getAllTasks } from '$lib/scripts/db_actions_on_schedules';
	import { onMount, onDestroy } from 'svelte';
	import { allOperationsForSelectedSchedule } from '$lib/stores/databaseStores';
	let listIsExpanded = false;
	let tasksAreLoaded = false;

	const createData = (e) => {
		if ($allOperationsForSelectedSchedule?.length > 0) {
			$allOperationsForSelectedSchedule = [...$allOperationsForSelectedSchedule, e.record];
		} else {
			$allOperationsForSelectedSchedule = [e.record];
		}
	};
	const updateData = (e) => {
		let filteredUpdate = $allOperationsForSelectedSchedule.filter((operation) => operation.id != e.record.id);
		$allOperationsForSelectedSchedule = [...filteredUpdate, e.record];
	};
	const deleteData = (e) => {
		$allOperationsForSelectedSchedule = $allOperationsForSelectedSchedule.filter((operation) => operation.id != e.record.id);
	};

	const subscribeAndUpdateData = () => {
		pb.authStore?.loadFromCookie(document.cookie || '');
		pb.realtime.subscribe(
			'tasks_for_schedule',
			function (e) {
				// console.log('subscribe and update data');
				// console.log('e :>> ', e);
				switch (e.action) {
					case 'create':
						createData(e);
						break;
					case 'update':
						updateData(e);
						break;
					case 'delete':
						deleteData(e);
						break;

					default:
						break;
				}
			},
			{ expand: 'belongs_to, operation' } // expand
		);
	};

	const initializeData = async () => {
		$allOperationsForSelectedSchedule = await getAllTasks();
		setTimeout(() => {
			tasksAreLoaded = true;
		}, 500);
	};
	onMount(async () => {
		await initializeData();
		subscribeAndUpdateData();
	});
	onDestroy(() => {
		pb.collection('tasks_for_schedule').unsubscribe();
	});
</script>

{#if tasksAreLoaded == false && $allOperationsForSelectedSchedule.length == 0}
	loading data..
{:else if tasksAreLoaded == true && $allOperationsForSelectedSchedule.length == 0}
	<Message type="warning" title="No tasks" message="There are no tasks for this schedule yet!" spaceY={false} action="null" />
{:else}
	<div class="tasks-container" class:expanded-tasks={listIsExpanded == true}>
		{#each invertArray($allOperationsForSelectedSchedule) as task}
			<TaskBadge {task} />
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
{/if}

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
</style>
