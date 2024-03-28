<script>
	//
	import { openModal } from 'svelte-modals';
	import ModalAddNewSchedule from './Modal_add_new_schedule.svelte';

	export let activeControl = false;

	const handleAddNewSchedule = () => {
		openModal(ModalAddNewSchedule, {
			isOpen: true,
			title: 'Add new Schedule ',
			data: {}
		});
	};
</script>

<div class=" controls-container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<i
		class="bi bi-plus-circle-fill add-schedule"
		class:add-schedule-active={activeControl == true}
		title="New Schedule"
		on:click={() => {
			activeControl == true;
			handleAddNewSchedule();
		}}></i>
</div>

<style>
	.controls-container {
		padding: 5px 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		max-width: min-content;
		width: 100%;
	}

	.bi {
		font-size: 2.5rem;
		text-shadow: 0px 0px 1px white;
		transition: all 0.3s ease;
	}
	.bi:hover {
		scale: 1.1;
		cursor: pointer;
	}

	.add-schedule {
		color: green;
	}
	:global(.add-schedule-active) {
		text-shadow: 0px 0px 3px rgba(0, 128, 0, 0.622) !important;
		scale: 1.2;
	}
</style>
