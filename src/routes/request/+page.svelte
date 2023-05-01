<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$components/Button.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="container">
	<form class="request-form" method="POST" use:enhance>
		<div class="request-form__row">
			<div class="form-item">
				<label for="firstname">First Name</label>
				<input type="text" id="firstname" name="firstname" />
				{#if form?.errors.firstname}
					<p class="error">{form.errors.firstname}*</p>
				{/if}
			</div>
			<div>
				<label for="lastname">Last Name</label>
				<input type="text" id="lastname" name="lastname" />
				{#if form?.errors.lastname}
					<p class="error">{form.errors.lastname}*</p>
				{/if}
			</div>
		</div>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" />
			{#if form?.errors.email}
				<p class="error">{form.errors.email}*</p>
			{/if}
		</div>
		<div>
			<label for="phone">Phone</label>
			<input type="tel" id="phone" name="phone" />
			{#if form?.errors.phone}
				<p class="error">{form.errors.phone}*</p>
			{/if}
		</div>
		<div>
			<label for="message">Message</label>
			<textarea id="message" name="message" />
			{#if form?.errors.message}
				<p class="error">{form.errors.message}*</p>
			{/if}
		</div>
		<div>
			<label for="request-type">Request type</label>
			<label>
				<input type="radio" name="type" value="TEACHER" />
				Teacher
			</label>
			<label>
				<input type="radio" name="type" value="STUDENT" />
				Student
			</label>
			{#if form?.errors.type}
				<p class="error">{form.errors.type}*</p>
			{/if}
		</div>
		<Button>Send request</Button>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.request-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.request-form__row {
		display: flex;
		gap: 1rem;
	}

	.error {
		color: red;
	}
</style>
