<script>
	import NavBar from '$components/NavBar.svelte';
</script>

<header>
	<div class="nav-container">
		<NavBar loggedIn={false} />
	</div>
</header>

<slot />

<style>
	@import '../styles/global.css';

	.nav-container {
		margin-block-start: 12px;
		padding-inline: 12px;
	}
</style>
