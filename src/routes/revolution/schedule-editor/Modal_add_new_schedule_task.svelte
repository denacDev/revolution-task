<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';
	import { getAllOperations, addOperationToSchedule } from '$lib/scripts/db_actions_on_schedules';
	import { closeModal } from 'svelte-modals';
	import { page } from '$app/stores';
	import { sendRequest } from '$lib/scripts/helpers.funcs.js';
	import { allOperations } from '$lib/stores/databaseStores.js';
	import { onMount } from 'svelte';
	export let isOpen = false;
	export let title = 'DEFAULT-Title';
	export let selectedSchedule = {}; // schedule {id,name}
	export let data; // it should be empty, no use in this case
	let selectedOperation = undefined;

	const handleAddNewScheduleOperation = async (e) => {
		const data = {
			belongs_to: selectedSchedule?.id,
			operation: selectedOperation?.id
		};
		let res = await addOperationToSchedule(data);
		if (res != undefined) {
			addNotification('Operation added with success', 'success', 'short');
		} else {
			addNotification('Adding operation failed', 'danger', 'long');
		}
		closeModal();
	};
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="header">
				<div class="modal-title" title="Player that will be removed">
					{title}
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i
					class="bi bi-x-circle-fill remove-icon"
					title="Close notification"
					on:click={(e) => {
						closeModal();
					}}></i>
			</div>
			<div class="body">
				<main class="modal-content">
					<div class="box operations-container">
						{#await getAllOperations()}
							loading operations
						{:then operations}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							{#each operations as operation}
								<!-- svelte-ignore a11y-interactive-supports-focus -->
								<div
									role="button"
									class="operation"
									class:selected-operation={selectedOperation?.id == operation.id}
									id="op-{operation.id}"
									on:click={() => {
										selectedOperation = operation;
									}}>
									<i class="bi {operation.icon}"></i>
									<span class="name">{operation.name}</span>
								</div>
							{/each}
						{:catch error}
							error loading operations:: {error}
						{/await}
						<!-- <i class="bi bi-plus-square-fill filter-schedule-icon" class:control-icon-disabled={newOperationName == ''} title="New Schedule"></i> -->
					</div>
					<button
						on:click={(e) => {
							handleAddNewScheduleOperation(e);
							// ;
						}}
						class=" btn btn-primary btn-sm"
						title="Remove player from the list">ADD</button>
				</main>
			</div>
		</div>
	</div>
{/if}

<style>
	.operations-container {
		display: flex;

		flex-direction: column;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
		max-height: 500px;
		height: 100%;
		overflow-y: scroll;
	}
	.operation {
		border: 1px solid black;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
		padding: 0px 10px;
		border-radius: var(--site-border-radius);
		border: 1px solid rgba(0, 0, 0, 0.172);
	}
	.operation:hover {
		background-color: rgba(0, 0, 0, 0.172);
		cursor: pointer;
	}
	.selected-operation {
		background-color: rgba(0, 0, 0, 0.172);
		cursor: pointer;
	}
	.btn {
		margin: 10px 0px;
	}
	#new-schedule-input {
		padding: 10px;
		width: 100%;
		max-width: 100%;
		min-width: 100%;
	}

	.modal-content {
		text-align: center;
		border: none !important;
		max-width: 300px;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	/* modal */
	:root {
		--moda-text-area-height: 200px;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.modal-title {
		font-size: 1rem;
		font-weight: 600;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 3;

		/* allow click-through to backdrop */
		pointer-events: none;
	}
	.contents {
		min-width: 300px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
		gap: 20px;
	}
</style>
