import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/kit/vite';
import { optimizeImages } from './optimize-images-vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		optimizeImages({inputFolder: "./static/images", outputFolder: "./static/images"}),
		sveltekit(), 
		],
	server: {
		fs: {
			allow: ['.']
		}
	},
	preprocess: vitePreprocess()
};

export default config
