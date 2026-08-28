import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// The sub-path this site is served from. Examples:
//   ''                 → served at https://example.com/                  (root)
//   'editor'           → served at https://example.com/editor/           (subpath)
//   'tools/harper'     → served at https://example.com/tools/harper/     (nested subpath)
//
// Build via `BASE=/editor pnpm run build`, or edit the default below.
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
