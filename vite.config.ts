import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), wasm()],
	server: {
		fs: { allow: ['..'] }
	},
	// Avoid bundling the 15MB WASM file into the JS chunk; let Vite emit it as an asset.
	assetsInclude: ['**/*.wasm'],
	optimizeDeps: {
		exclude: ['harper.js']
	}
});
