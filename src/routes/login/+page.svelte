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
				<input name="email" type="email" class="form-control" id="emailAdress" placeholder="name@example.com" />
				<label for="emailAdress">Email address</label>
			</div>

			<div class="form-floating">
				<input name="password" type="password" class="form-control" id="password" placeholder="Password" />
				<label for="password">Password</label>
			</div>
		</div>

		<button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
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
