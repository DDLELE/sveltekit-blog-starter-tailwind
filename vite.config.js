import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.']
		}
	},
	preprocess: vitePreprocess()
};

export default config
