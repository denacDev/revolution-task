<script>
	import { schedule_editor_subNav_item } from '$lib/stores/uiStores';
</script>

<div class="schedule-nav">
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'tasks';
		}}
		class:active-link={$schedule_editor_subNav_item == 'tasks'}
		title="Tasks"
		class="nav-link"
		href="#tasks"
		role="button">
		<i class="bi bi-gear-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Tasks</span>
	</a>
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'properties';
		}}
		class:active-link={$schedule_editor_subNav_item == 'properties'}
		title="Properties"
		class="nav-link"
		href="#properties"
		role="button">
		<i class="bi bi-file-medical-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Properties</span>
	</a>
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'parameters';
		}}
		class:active-link={$schedule_editor_subNav_item == 'parameters'}
		title="Parameters"
		class="nav-link"
		href="#parameters"
		role="button">
		<i class="bi bi-file-earmark-bar-graph-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Parameters</span>
	</a>
	<a
		on:click={() => {
			$schedule_editor_subNav_item = 'interaction';
		}}
		class:active-link={$schedule_editor_subNav_item == 'interaction'}
		title="Interaction"
		class="nav-link"
		href="#interaction"
		role="button">
		<i class="bi bi-diagram-3-fill" style="font-size:1rem;"></i>
		<span class="link-lbl">Interaction</span>
	</a>
</div>

<style>
	.schedule-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		transition: all 0.3s ease;
		margin: var(--site-space-y) 0px;
	}
	.nav-link {
		max-width: 100%;
		width: 100%;
		padding: 10px;
	}
	@media (max-width: 576px) {
		.nav-link {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.link-lbl {
			width: auto;
		}
	}
	@media (max-width: 400px) {
		.schedule-nav {
			flex-wrap: wrap;
		}
		.nav-link {
			border-left: 1px solid transparent !important;
			border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
		}
		.nav-link:last-of-type {
			border-bottom: 1px solid transparent !important;
		}
	}
	.nav-link:first-of-type {
		border-left: 1px solid transparent !important;
	}
	.nav-link:hover {
		background-color: rgba(0, 128, 0, 0.244);
	}
	.active-link {
		background-color: rgba(0, 128, 0, 0.244);
		color: red;
	}
</style>
