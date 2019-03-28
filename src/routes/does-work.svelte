<h1>DOES work:</h1>
<p>This works w/ `setTimeout` clearing the stack. Why?</p>

<input bind:this={usernameInput} type="text" placeholder="Focusing...">

<script>
	import { onMount } from 'svelte'
	let usernameInput
	// this is working...
	onMount(() => setTimeout(() => usernameInput.focus(), 0))
</script>

<style> input { width: 200px; } </style>
