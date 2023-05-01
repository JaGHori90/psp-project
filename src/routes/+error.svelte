<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status}</h1>
	<p>{$page?.error?.message ?? `This shouldn't happen, please try later!`}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		gap: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
