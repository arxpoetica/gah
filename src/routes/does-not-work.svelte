<h1>This is a random woof:</h1>
<p>The SSR preload on this page DOES NOT work on refresh!!!!</p>
<p>The only difference between this page and the `does-work.svelte` page is the presence of the `$red` variable in the PostCSS styles.</p>
{#if url}
	<div class="img">
		<img src="{url}" alt="Random woof!">
	</div>
{:else}
	<h4>Loading a woof . . .</h4>
{/if}

<script context="module">
	export async function preload() {
		const res = await this.fetch('https://random.dog/woof.json')
		const { url } = await res.json()
		return { url }
	}
</script>
<script>
	export let url
</script>

<style type="text/scss">
	img {
		width: 25vw;
		padding: 5vw;
		background-color: $red;
	}
</style>
