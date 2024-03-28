<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';

	import { closeModal } from 'svelte-modals';
	import { page } from '$app/stores';
	import { sendRequest } from '$lib/scripts/helpers.funcs.js';
	import { onMount } from 'svelte';
	export let isOpen = false;
	export let title = 'DEFAULT-Title';
	export let data = {}; // schedule {id,name}
	let newScheduleName = '';

	const handleAddSchedule = async (e) => {
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
			closeModal();
			newScheduleName = '';
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
	onMount(() => {
		const elementToFocus = document.getElementById('btn-close-modal');
		if (elementToFocus) {
			elementToFocus.focus();
		}
	});
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
					<!-- 
						ADD DATA HERE
					 -->
					<div class="box active-control">
						<div class="val">
							<input type="text" placeholder="Schedule Name" id="new-schedule-input" bind:value={newScheduleName} />
							<!-- <i class="bi bi-plus-square-fill filter-schedule-icon" class:control-icon-disabled={newScheduleName == ''} title="New Schedule"></i> -->
						</div>
					</div>
					<button
						on:click={(e) => {
							handleAddSchedule(e);
							// ;
						}}
						class=" btn btn-primary btn-sm"
						title="Remove player from the list">ADD</button>
					<!-- <button class="btn-custom-width-text" on:click={handleAddSchedule}>ADD</button> -->
				</main>
			</div>
		</div>
	</div>
{/if}

<style>
	.btn {
		margin: 10px;
	}
	#new-schedule-input {
		padding: 10px;
		width: 100%;
		max-width: 100%;
		min-width: 100%;
	}
	.box {
		border: none;
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
