<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<svelte:head>
	<title>Login - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content">
	<form>
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
				<input name="password" type="password" class="form-control" id="passwordInput" placeholder="Password" />
				<label for="passwordInput">Password</label>
			</div>
			<div class="form-floating">
				<input name="repassword" type="password" class="form-control" id="rePasswordInput" placeholder="Password" />
				<label for="rePasswordInput">Re-Password</label>
			</div>
		</div>

		<button class="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
	</form>
</div>

<style>
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
