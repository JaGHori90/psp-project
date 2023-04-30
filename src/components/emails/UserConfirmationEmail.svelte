<script lang="ts">
	import { Html, Text } from 'svelte-email';
	import type { RequestForm } from '../../routes/request/+page.server';

	export let userConfirmationProps: RequestForm;
</script>

<Html lang="en">
	<!-- Docs, more info: https://svelte-email.vercel.app/docs/overview/svelte-email -->
	<Text>
		Hello, {`${userConfirmationProps.firstname} ${userConfirmationProps.lastname}`}!
	</Text>
	<Text>Thank you for your request. You should receive an email soon.</Text>
</Html>

<style>
</style>
