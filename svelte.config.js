import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// The sub-path the site is served from. Read from the BASE environment
// variable, set by the deploy workflow (or manually when building).
//
// SvelteKit requires `kit.paths.base` to be the empty string OR a path
// that starts with "/" and does NOT end with one. The deploy workflow
// guarantees this by prepending "/" when normalising its `subpath` input.
const BASE = process.env.BASE ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: BASE,
			relative: false
		}
	}
};

export default config;
