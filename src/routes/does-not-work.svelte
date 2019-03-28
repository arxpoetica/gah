<h1>Does not work:</h1>
<p>The input should focus with `onMount`, yes?</p>

<input bind:this={usernameInput} type="text" placeholder="Why is this not focusing?">

<script>
	import { onMount } from 'svelte'
	let usernameInput
	// this isn't working...
	onMount(() => usernameInput.focus())
</script>

<style> input { width: 200px; } </style>
