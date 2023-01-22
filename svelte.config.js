import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvexGlobalComponents } from './mdsvexGlobalComponents.js'
import { extensions, mdsvex } from './mdsvex.config.js'

const globalComponents = mdsvexGlobalComponents({
	dir: `$lib/components`,
	list: ['Callout.svelte'],
	extensions
  })

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', ...extensions],

	preprocess: [
		preprocess(),
		globalComponents,
		mdsvex
	],

	kit: {
		adapter: adapter(),
    	prerender: {
			entries: [
				'*',
				'/api/posts/page/*',
				'/post/category/*/page/',
				'/post/category/*/page/*',
				'/post/category/page/',
				'/post/category/page/*',
				'/post/page/',
				'/post/page/*',
			]
    }
	},
	onDev: ({ hostname, port }) => {
		console.log(`Dev server is running on http://${hostname}:${port}`);
	},
};

export default config;
