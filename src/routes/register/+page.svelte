<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	let mainPass;
	let rePass;
</script>

<svelte:head>
	<title>Login - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content">
	<form action="?/register_user_pass" method="post" autocomplete="off">
		<div class="fields">
			<div class="form-floating">
				<input name="email" type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
				<label for="emailInput">Email address</label>
			</div>
			<div class="form-floating">
				<input name="name" type="name" class="form-control" id="nameInput" placeholder="jack" />
				<label for="nameInput">Name</label>
			</div>
			<div class="form-floating">
				<input name="password" type="password" class="form-control" id="passwordInput" placeholder="Password" bind:value={mainPass} />
				<label for="passwordInput">Password</label>
				{#if mainPass?.length < 8}
					<span class="lbl lbl-red">* Min. 8 chars.</span>
				{/if}
			</div>
			<div class="form-floating">
				<input name="passwordConfirm" type="password" class="form-control" id="rePasswordInput" placeholder="Password" bind:value={rePass} />
				<label for="rePasswordInput">Re-Password</label>
				{#if rePass != mainPass}
					<span class="lbl lbl-red">* Same as password</span>
				{/if}
			</div>
		</div>

		<button class="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
	</form>
</div>

<style>
	.lbl-red {
		color: red !important;
	}
	.lbl {
		margin: 0 !important;
		padding: 0 !important;
	}
	.content {
		max-width: 700px;
		width: 100%;
		margin: 0px auto;
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
	.fields {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	form {
		margin: 0px auto;
		max-width: 330px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
