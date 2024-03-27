<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import Message from '$lib/addons/Message.svelte';

	export let form;
	export let data;
</script>

<svelte:head>
	<title>Login - {PUBLIC_APP_NAME}</title>
</svelte:head>

<div class="content">
	{#if data?.user != undefined}
		<div class="fields-groups">
			<h1>Welcome Back! {data?.user?.name}</h1>
			<a href="/logout" class=" btn btn-outline-primary">logout</a>
		</div>
	{:else if form?.notVerified == true}
		<Message type="danger" title="Login error" message="You must verify your email before you login, check your email" spaceY={false} action="login" />
	{:else}
		<form action="?/login_user_pass" method="post">
			<div class="fields">
				<div class="form-floating">
					<input name="email" type="email" class="form-control" id="emailAdress" placeholder="name@example.com" value="kinezu89@gmail.com" />
					<label for="emailAdress">Email address</label>
				</div>

				<div class="form-floating">
					<input name="password" type="password" class="form-control" id="password" placeholder="Password" value="register" />
					<label for="password">Password</label>
				</div>
			</div>

			<button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
		</form>
	{/if}
</div>

<style>
	.fields-groups {
		max-width: max-content;
		margin: 0px auto;

		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: center;
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
