<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a class="btn" {href}><slot /></a>
{:else}
	<button class="btn"><slot /></button>
{/if}

<style>
	.btn {
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 0.25rem;
		color: #000;
		cursor: pointer;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
	}
</style>
