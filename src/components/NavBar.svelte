<script lang="ts">
	import Button from './Button.svelte';

	export let loggedIn: boolean;
</script>

<nav class="nav">
	<a href="/" class="logo">
		<p class="logo__text">PSP Project</p>
		<img class="logo__image" src="/favicon.png" alt="Logo" />
	</a>
	<div class="menu-block">
		{#if loggedIn}
			<a href="/organizations" class="menu-block__link">Org</a>
		{/if}
	</div>
	<div class="secondary-nav">
		{#if loggedIn}
			<form action="/logout" method="POST">
				<div class="secondary-nav__logout">
					<Button>Logout</Button>
				</div>
			</form>
		{:else}
			<div class="secondary-nav__login">
				<Button href="/login">Login</Button>
			</div>
		{/if}
	</div>
</nav>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	.nav {
		align-items: center;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		position: relative;
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 45px;
	}

	.logo__text {
		font-size: 1.5rem;
		font-weight: 700;
		margin-right: 0.5rem;
	}

	.logo__image {
		width: 2.5rem;
		height: 2.5rem;
	}

	.menu-block {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 45px;
	}

	.menu-block__link {
		margin-right: 1rem;

		color: #181818;
		font-size: 16px;
		font-variation-settings: 'wght' 600;
		font-weight: 600;
		line-height: 19px;
		text-decoration: none;
		transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);
	}

	.menu-block__link:hover {
		color: #1080fc;
	}

	.secondary-nav {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin-left: auto;
	}

	.secondary-nav__login {
		margin-right: 1rem;
	}
</style>
