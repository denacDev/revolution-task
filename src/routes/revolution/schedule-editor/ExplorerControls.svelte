<script>
	//
	export let activeControl = undefined;
</script>

<div class="controls-container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<i
		class="bi bi-plus-circle-fill add-schedule"
		class:add-schedule-active={activeControl == 'new-schedule'}
		title="New Schedule"
		on:click={() => {
			if (activeControl == undefined) {
				activeControl = 'new-schedule';
			} else {
				activeControl = undefined;
			}
		}}></i>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<i
		class="bi bi-question-circle-fill question-schedule"
		title="Question Schedule"
		on:click={() => {
			activeControl = 'question-schedule';
		}}></i>
</div>

<style>
	.controls-container {
		border: 1px solid rgba(0, 0, 0, 0.172);
		border-radius: var(--site-border-radius);
		padding: 5px 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		max-width: 100%;
		width: 100%;
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

	.add-schedule {
		color: green;
	}
	:global(.add-schedule-active) {
		text-shadow: 0px 0px 3px rgba(0, 128, 0, 0.622) !important;
		scale: 1.2;
	}

	.question-schedule {
		color: rgba(0, 0, 255, 0.371);
	}
</style>
