<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<svelte:head>
	<title>Features - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content">
	<h2>Product features</h2>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Error Recovery:</span>
		<span class="val">World leading hardware error reporting and recovery</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Virtual Storage:</span>
		<span class="val">Join, split and partition incubators and plate hotels to best suit your usage.</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Unit Testing:</span>
		<span class="val">Over 5,000 unit tests, nightly builds and professional testing ensures our software is always reliable..</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Scalable:</span>
		<span class="val">Revolution supports systems of all sizes and complexities. From simple bench-top systems to large scale automation..</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Edit on the fly:</span>
		<span class="val">Make changes to protocols and schedules on the fly.</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">3D simulator:</span>
		<span class="val">In built 3D simulator to aid schedule development.</span>
	</p>
	<p class="bg-body-tertiary border rounded-3">
		<span class="lbl">Simple licensing:</span>
		<span class="val">Revolution is licenced based on the devices of your system so you don't pay for anything you do not need.</span>
	</p>
</div>

<style>
	.bg-body-tertiary {
		display: flex !important;
		flex-direction: column !important;
	}
	.lbl {
		color: var(--bs-success);
	}
	.val {
		color: var(--bs-black);
		font-size: smaller;
	}
</style>
