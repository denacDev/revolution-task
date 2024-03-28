<script>
	import { schedule_editor_subNav_item } from '$lib/stores/uiStores';
</script>

<div class="schedule-nav">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'schedule';
		}}
		class:active-link={$schedule_editor_subNav_item == 'schedule'}
		title="Schedule"
		class="nav-link"
		href="javascript:void()"
		role="button"><i class="bi bi-gear-fill" style="font-size:1rem;"></i> <span class="link-lbl">Schedule</span></a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'properties';
		}}
		class:active-link={$schedule_editor_subNav_item == 'properties'}
		title="Properties"
		class="nav-link"
		href="javascript:void()"
		role="button"><i class="bi bi-gear-fill" style="font-size:1rem;"></i> <span class="link-lbl">Properties</span></a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'parameters';
		}}
		class:active-link={$schedule_editor_subNav_item == 'parameters'}
		title="Parameters"
		class="nav-link"
		href="javascript:void()"
		role="button"><i class="bi bi-gear-fill" style="font-size:1rem;"></i> <span class="link-lbl">Parameters</span></a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'interaction';
		}}
		class:active-link={$schedule_editor_subNav_item == 'interaction'}
		title="Interaction"
		class="nav-link"
		href="javascript:void()"
		role="button"><i class="bi bi-gear-fill" style="font-size:1rem;"></i> <span class="link-lbl">Interaction</span></a>
</div>

<style>
	.schedule-nav {
		/* border: 1px solid black; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		transition: all 0.3s ease;
		margin: var(--site-space-y) 0px;
	}
	.nav-link {
		max-width: 100%;
		padding: 10px;
	}
	.nav-link:hover {
		background-color: rgba(0, 128, 0, 0.244);
	}
	.active-link {
		background-color: rgba(0, 128, 0, 0.244);
		color: red;
	}
</style>
