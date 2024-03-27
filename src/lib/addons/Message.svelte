<script>
	export let type = 'info';
	export let title = 'message title';
	export let message = 'message body';
	export let action = null;
	export let spaceY = true;

	let icon = 'info';
	switch (type) {
		case 'info':
			icon = 'info-circle-fill';
			break;
		case 'success':
			icon = 'check-circle-fill';
			break;
		case 'warning':
			icon = 'exclamation-circle-fill';
			break;
		case 'danger':
			icon = 'bi-sign-stop-fill';
			break;

		default:
			alert('check type of message');
			break;
	}
</script>

{#if spaceY}
	<div class="spacer-y"></div>
{/if}

<div class="card card-on-top bg-body-tertiary border rounded-3 shadow-sm">
	<div class="card-top">
		<i class="bi {icon} {type}"></i>
		<div class="card-top-left-text {type}">{title}</div>
	</div>
	<div class="card-bottom">
		<div class="message">
			{message}
		</div>
		{#if action != null}
			<div class="actions">
				{#if action == 'login'}
					<a href="/login" class=" btn btn-outline-primary">login</a>
				{:else if action == 'new-list'}
					<a href="/lists/new" class=" btn btn-outline-primary">new list</a>
				{:else if action == 'new-group'}
					<a href="/groups/new" class=" btn btn-outline-primary">new group</a>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.bi {
		font-size: 1.5rem;
		margin: 0px 10px;
	}
	.info {
		color: #000;
	}
	.success {
		color: green;
	}
	.warning {
		color: orange;
	}
	.danger {
		color: red;
	}

	.card {
		gap: var(--site-gap-flex);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0px auto;
		max-width: 80%;
	}
	.card-top {
		/* border: 1px solid black; */
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		gap: var(--site-gap-flex);
		border-bottom: 1px solid rgba(0, 0, 0, 0.059);
		padding-bottom: 10px;
	}

	.card-top-left-text {
		font-size: var(--text-font-size);
		font-weight: 900;
		transition: 0.3s;
	}
	.card-bottom {
		/* border: 1px solid black; */

		width: 100%;
		padding: 10px 0px;
		position: relative;
		transition: 0.3s;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		gap: var(--site-gap-flex);
		text-transform: uppercase;
	}
	.message {
		font-size: var(--text-value-font-size);
		font-weight: 600;
		letter-spacing: 0.3px;
		color: #000;
		transition: 0.3s;
		padding: 10px;
	}
	:global(.actions) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		gap: var(--site-gap-flex);
	}
</style>
