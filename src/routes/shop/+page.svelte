<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<svelte:head>
	<title>About - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content">
	<h2>Shop</h2>

	<!-- content -->
	<div class="cards">
		<div class="row row-cols-1">
			<div class="col">
				<div class="card mb-4 rounded-3 shadow-sm">
					<div class="card-header py-3">
						<h4 class="my-0 fw-normal text-center">d2 reagent dispenser</h4>
					</div>
					<div class="card-body text-center">
						<h1 class="card-title pricing-card-title text-center">$ 14,500</h1>
						<img src="https://ukrobotics.com/shop/d2-dispenser/d2-sbs-plate-dispenser-001@0.2x_hud61dad0dd76579a7b89f538c463f9bc2_1364710_500x0_resize_box_2.png" class="card-img-top" alt="d2 reagent dispenser" />
						<ul class="list-unstyled mt-3 mb-4 product-details">
							<li>Small and lightweight</li>
							<li>Simple setup, no need for a site visit by an engineer</li>
							<li>Simply connect power and comms, open your browser and begin. No software to install.</li>
							<li>Supplied with everything you need to get going immediately</li>
						</ul>
						<button type="button" class="w-100 btn btn-lg btn-outline-primary">Request quote</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.my-0 {
		color: var(--bs-success);
	}
	/* .content {
		padding: 10px;
		max-width: 700px;
		width: 100%;
		margin: 0px auto;
	} */
	.cards {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.card-img-top {
		max-width: 320px;
	}
	.product-details {
		text-align: left;
	}
</style>
