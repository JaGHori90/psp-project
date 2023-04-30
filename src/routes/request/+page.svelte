<script lang="ts">
	import Button from '../../components/Button.svelte';
</script>

<div class="container">
	<form class="request-form" method="POST">
		<div class="request-form__row">
			<div class="form-item">
				<label for="firstname">First Name</label>
				<input type="text" id="firstname" name="firstname" />
			</div>
			<div>
				<label for="lastname">Last Name</label>
				<input type="text" id="lastname" name="lastname" />
			</div>
		</div>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" />
		</div>
		<div>
			<label for="phone">Phone</label>
			<input type="tel" id="phone" name="phone" />
		</div>
		<div>
			<label for="message">Message</label>
			<textarea id="message" name="message" />
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
</style>
