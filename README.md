# Gah!

## Instructions:

	npm install
	npm run dev

Goto: http://localhost:3000

Click on `/does-not-work`.

It appears to work, yes?

Now refresh.

SSR is not calling the preload function. DOM does which is why it works on the link, but not on refresh.

Compare w/ `/does-work`. The only substantive difference there is the presence of a PostCSS variable:

```html
<style type="text/scss">
	img {
		width: 25vw;
		padding: 5vw;
		background-color: $red;
	}
</style>
```

I've looked at the output of the `postcss.process` function in the `rollup.preprocess.js` file (where the PostCSS preprocessing happens). I can confirm that it's coming through processed correctly. I don't know what to conclude. My hunch is that somewhere else Svelte / Sapper is doing something with `<style>` tags, and that's mangling the runtime, but I just have no clue where to look.

I'm happy to get back on this if you can point me in the right direction.

Thanks.
