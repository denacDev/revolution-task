<script>
	import notifications, { addNotification } from '$lib/scripts/notifications';

	import { closeModal } from 'svelte-modals';
	import { page } from '$app/stores';
	import { sendRequest } from '$lib/scripts/helpers.funcs.js';
	import { onMount } from 'svelte';
	export let isOpen = false;
	export let title = 'DEFAULT-Title';
	export let data = {}; // schedule {id,name}

	console.log('data :>> ', data);
	const removeSchedule = async (params) => {
		let frmData = new FormData();
		frmData.append('id', data?.id);
		let returnedData = await sendRequest('?/remove_selected_schedule', 'POST', {}, frmData);

		let res = jsonToObj(returnedData);
		addNotification(res.msg, res.type, res.time);
	};

	const jsonToObj = (woo) => {
		if (woo.type == 'success') {
			let parsedData = JSON.parse(woo.data);
			let res = {
				msg: 'Schedule removed successfuly' || 'error getting the msg',
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
					<h1 class="text-warning">Are you sure you want to remove this schedule ?</h1>
				</main>
				<button
					on:click={() => {
						removeSchedule();
						closeModal();
					}}
					class=" btn btn-outline-danger"
					title="Remove player from the list">REMOVE</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-content {
		text-align: center;

		border: none !important;
		max-width: 300px;
		width: 100%;
	}
	.text-warning {
		font-size: 20px !important;
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
