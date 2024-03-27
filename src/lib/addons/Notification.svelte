<script>
	import { addNotification, removeNotification } from '$lib/scripts/notifications';

	export let id;
	export let message;
	export let type;
	export let time;

	let icon = 'info';
	switch (type) {
		case 'info':
			icon = 'bi-info-circle-fill';
			break;
		case 'success':
			icon = 'bi-check-circle-fill';
			break;
		case 'warning':
			icon = 'bi-exclamation-circle-fill';
			break;
		case 'danger':
			icon = 'bi-sign-stop-fill';
			break;

		default:
			alert('check type of message');
			break;
	}
</script>

<div class="notification-container notification-type-{type}" id="notification-{id}">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->

	<div class="notification-value notification-value-{type}">
		<div class="left-side">
			<i class="bi {icon} {type}"></i>
			<div class="message">{message}</div>
		</div>
		<div class="right-side">
			{#if time == 'stay'}
				<i
					class="bi bi-x-circle-fill remove-icon"
					title="Close notification"
					on:click={(e) => {
						removeNotification(id);
					}}></i>
				<!-- <button
					id="close-{id}"
					class="btn-icon-small btn-icon-danger-active"
					on:click={() => {
						removeNotification(id);
					}}>X</button> -->
			{:else}
				&nbsp;
			{/if}
		</div>
	</div>
</div>

<style>
	.notification-container {
		/* border: 1px solid black; */

		border-bottom-left-radius: var(--site-border-radius);
		border-bottom-right-radius: var(--site-border-radius);
		transition: all 0.3s ease-in-out;
		transform: translateY(-15px);
		box-shadow: var(--site-box-shadow);
		position: sticky;
		top: 0px;
		display: block;
		background-color: white;
		/* width: calc(100% - 12%); */
		margin: 10px auto;
		padding: 20px;
		max-width: 600px;
		min-width: max-content;
		pointer-events: all;
	}
	.notification-type-info {
		background-color: var(--site-color-primary);
	}
	.notification-type-success {
		background-color: var(--site-color-success);
	}
	.notification-type-warning {
		background-color: var(--site-color-warning);
	}
	.notification-type-danger {
		background-color: var(--site-color-danger);
	}
	:global(.notification-container-hidden) {
		transform: translateY(-111px) !important;
	}
	.notification-value {
		position: relative;
		display: flex;
		align-items: normal;
		justify-content: space-between;
		gap: 20px;
	}
	.notification-value > .left-side {
		width: 90%;
		display: flex;
		justify-content: flex-start;
		gap: var(--site-gap-flex);
		align-items: center;
	}
	.notification-value > .right-side {
		min-width: 10%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		height: 100%;
		align-self: flex-end;
	}

	.notification-value > .message {
		font-size: 1.2rem !important;
		font-weight: 500;
		letter-spacing: 1px;
	}
	.notification-value-info {
		color: white;
	}
	.notification-value-success {
		color: white;
	}
	.notification-value-warning {
		color: white;
	}
	.notification-value-danger {
		color: white;
	}
</style>
