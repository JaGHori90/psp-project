<script lang="ts">
	import Button from '$components/Button.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="container">
	<form class="login-form" method="POST">
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" />
			{#if form?.errors.email}
				<p class="error">{form.errors.email}*</p>
			{/if}
		</div>
		<div>
			<label for="password">Password</label>
			<input type="tel" id="password" name="password" />
			{#if form?.errors.password}
				<p class="error">{form.errors.password}*</p>
			{/if}
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

	.error {
		color: red;
	}
</style>
