import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
