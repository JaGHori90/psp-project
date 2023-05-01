<script lang="ts">
	import Button from '$components/Button.svelte';
</script>

<div class="container">
	<form class="login-form" method="POST">
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="tel" id="password" name="password" />
		</div>
		<Button>Login</Button>
	</form>
	<a class="hint" href="/request">No account yet? Send your request</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hint {
		margin-top: 1rem;
		font-size: 0.8rem;
		color: #999;
	}
</style>
