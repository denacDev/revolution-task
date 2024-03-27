<script>
	// import { goto } from '$app/navigation';
	import notifications, { addNotification } from '$lib/scripts/notifications';
	import { sendRequest, serializeNonPOJOs } from '$lib/scripts/helpers.funcs.js';

	import ExplorerBrowser from './ExplorerBrowser.svelte';
	import ExplorerControls from './ExplorerControls.svelte';
	import ExplorerFilter from './ExplorerFilter.svelte';
	let activeControl = '';
	let newScheduleName = '';
	export let data;
	const handleAddSchedule = async () => {
		let scheduleInputElement = document.getElementById('new-schedule-input');
		if (newScheduleName.length > 3) {
			// remove error border if it has one
			if (scheduleInputElement.classList.contains('border-danger')) {
				scheduleInputElement.classList.remove('border-danger');
			}

			let frmData = new FormData();
			frmData.append('name', newScheduleName);
			let returnedData = await sendRequest('?/add_new_schedule', 'POST', {}, frmData);
			let res = jsonToObj(returnedData);
			addNotification(res.msg, res.type, res.time);
		} else {
			scheduleInputElement.focus();
			scheduleInputElement.classList.add('border-danger');
			addNotification('The schedule name should have min. 3 chars.', 'warning', 'short');
		}
	};

	const jsonToObj = (woo) => {
		if (woo.type == 'success') {
			let parsedData = JSON.parse(woo.data);
			let res = {
				msg: 'Schedule added successfuly' || 'error getting the msg',
				type: woo.type || 'danger',
				time: 'short' || 'long',
				name: parsedData[5] || '',
				id: parsedData[4] || ''
			};

			if (parsedData[1] == undefined) {
				console.log('parsedData :>> ', parsedData);
			}
			return res;
		} else {
			console.log('error :>> PARSING THE JSON DATA HAS FAILED', woo);
		}
	};
</script>

<div class="explorer-container">
	<div class="controls-and-filter-container">
		<ExplorerControls bind:activeControl />
		<ExplorerFilter />
	</div>
	{#if activeControl == 'new-schedule'}
		<div class="active-control">
			<h5 class="lbl">Create new schedule</h5>
			<div class="val">
				<input type="text" placeholder="Schedule Name" id="new-schedule-input" bind:value={newScheduleName} />
				<!-- <i class="bi bi-plus-square-fill filter-schedule-icon" class:control-icon-disabled={newScheduleName == ''} title="New Schedule"></i> -->
				<button class="btn-custom-text" on:click={handleAddSchedule}>ADD</button>
			</div>
		</div>
	{:else if activeControl == 'remove-schedule'}
		<div class="active-control">remove-schedule</div>
	{:else if activeControl == 'question-schedule'}
		<div class="active-control">question-schedule</div>
	{/if}
	<ExplorerBrowser schedules={data.schedules.items} />
</div>

<style>
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
	.btn-custom-text {
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2.5px 5px;
		border-radius: 4px;
	}
	.btn-custom-text:hover {
		background-color: rgba(0, 128, 0, 1);
		cursor: pointer;
		color: white;
		border: 1px solid black;
		transition: all 0.3s ease;
		box-shadow: 0px 0px 1px white;
	}
	:global(.control-icon-disabled) {
		color: gray !important;
		cursor: not-allowed !important;
		scale: 1 !important;
	}

	.active-control {
		border: 1px solid rgba(0, 0, 0, 0.172);
		border-radius: var(--site-border-radius);
	}
	.active-control .lbl {
		padding: 3px 10px;
	}
	.active-control .val {
		padding: 5px 10px;
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
		max-width: max-content;
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
	.bi {
		font-size: 1.5rem;
		text-shadow: 0px 0px 1px white;
		transition: all 0.3s ease;
	}
	.bi:hover {
		scale: 1.1;
		cursor: pointer;
	}
</style>
