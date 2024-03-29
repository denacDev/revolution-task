<script>
	import { browser } from '$app/environment';

	export let data;
	if (data.login == false && browser) {
		window.location.href = '/login';
	}
</script>
