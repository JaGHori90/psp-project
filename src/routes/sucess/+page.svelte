<script lang="ts">
	import Button from '../../components/Button.svelte';
</script>

<div class="confirmation">
	<h1 class="title">Request confirmation</h1>
	<p class="description">Thank you for your request. You should receive an email soon.</p>
	<div class="cta"><Button href="/">Go back to home</Button></div>
</div>

<style>
	.confirmation {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		gap: 1rem;
	}

	.title {
		font-size: 2rem;
	}

	.description {
		font-size: 1.5rem;
	}
</style>
