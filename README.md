# Harper Editor (self-hosted)

A standalone, single-page copy of [writewithharper.com/editor](https://writewithharper.com/editor) that you can build and host yourself. Everything runs in the browser — no text ever leaves the page, because the grammar engine is a WebAssembly module bundled with the app.

It uses the exact same Svelte component that ships with the upstream [`harper-editor`](https://github.com/Automattic/harper/tree/main/packages/harper-editor) package, so it behaves identically to the official editor.

## What's inside

- **SvelteKit 2 + Svelte 5** (adapter-static → pure static output)
- **`harper.js@2.7.0`** from npm — the WASM-backed linter
- **`harper-editor`** (vendored) — the Quill-based editor component
- **`lint-framework`** (vendored) — the in-page squiggles + side panel used by `harper-editor`
- **Tailwind CSS 4** (for layout)
- **Quill snow theme** (for the rich-text editor surface)

Output is a plain `build/` directory you can drop behind any static web server (nginx, Caddy, Apache, S3+CloudFront, …).

## Requirements

- Node.js ≥ 20
- pnpm ≥ 9 (npm/yarn also work — adjust commands below)

No Rust toolchain needed. The WASM binary is pulled from the `harper.js` npm package.

## Build

```bash
pnpm install
pnpm run build
```

The static site is emitted to `build/`. To preview it locally:

```bash
pnpm run preview
# or
python3 -m http.server 4321 --directory build
```

Open <http://localhost:4321/> in a browser. First load compiles the ~15 MB WASM binary in the main thread (≈ 1 s on a modern laptop); subsequent loads are instant thanks to the content-hashed asset URLs.

## Quick deploy with nginx

Minimal server block (replace the root and `server_name`):

```nginx
server {
    listen 80;
    server_name editor.example.com;
    root /var/www/harper-editor/build;
    index index.html;

    # Brotli pre-compressed assets are emitted by `pnpm run build`.
    # Run this once after every build:
    #     find build -type f \( -name '*.js' -o -name '*.css' -o -name '*.wasm' -o -name '*.html' -o -name '*.svg' \) -exec brotli -q 11 -k {} \;
    #     find build -type f \( -name '*.js' -o -name '*.css' -o -name '*.wasm' -o -name '*.html' -o -name '*.svg' \) -exec gzip -9 -k {} \;

    # Serve pre-compressed files when the client supports them.
    gzip on;
    gzip_static on;
    brotli on;
    brotli_static on;
    gzip_types application/wasm application/javascript text/css application/json image/svg+xml;
    brotli_types application/wasm application/javascript text/css application/json image/svg+xml;

    # Immutable cache for content-hashed assets (SvelteKit names them with hashes).
    location /_app/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    # Everything else: SPA fallback to index.html.
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

The WASM file is **14.9 MB raw / 6.7 MB brotli / 7.6 MB gzip**. With immutable caching, only the first visitor pays the cost.

## Customisation

### Change the demo text

Edit `src/routes/+page.svelte` and look for the `const demoText = \`…\`` block at the top of the `<script>` tag. Rebuild with `pnpm run build`.

### Pre-fill the editor from a URL

Append `?initialText=...` (URL-encoded) to the page URL. For example:

```
https://editor.example.com/?initialText=Hello%20world.%20%20I%20has%20a%20spelling%20errors.
```

If `initialText` is absent, the value of `demoText` is used.

### Hide the demo text on first load

In `src/routes/+page.svelte`, change the `onMount` block from:

```ts
content = initial ?? demoText;
```

to:

```ts
content = initial ?? '';
```

### Serve the editor at a sub-path (e.g. `/tools/editor/`)

SvelteKit has first-class base-path support:

1. Edit `svelte.config.js` and add `paths.base`:
   ```js
   kit: {
       paths: { base: '/tools/editor', relative: false },
       // …rest unchanged
   }
   ```
2. Rebuild: `pnpm run build`. The output will reference `/tools/editor/_app/…` and `index.html` is the entry point.
3. Mount `build/` under `/tools/editor/` on your web server. The included `nginx.conf` example uses `try_files` with `/index.html` as the fallback — adjust the fallback to `/tools/editor/index.html` when serving from a sub-path.

To host at a **completely different route name** (e.g. `/write/`):

- The simplest approach is to rename `src/routes/+page.svelte` and `+page.ts` into a directory matching the desired path. For `/write/`, create `src/routes/write/+page.svelte` and `+page.ts`, then move the contents of the old root pages into it. Delete the old `src/routes/+page.*` and rebuild.
- If you also want the *URL* of the editor to be `/write/` (i.e. no redirect from `/`), combine the above with the `paths.base` setting, or just symlink/copy `build/write/index.html` to `build/index.html` after building.

### Switch to a Worker-based linter (off-main-thread)

`src/lib/createEditorLinter.ts` currently uses `LocalLinter` so that the editor works in every environment (including headless and iframe-sandboxed). To use `WorkerLinter` instead — which keeps the WASM compile off the main thread — replace the constructor:

```ts
import type { Linter } from 'harper.js';

export async function createEditorLinter(): Promise<Linter> {
    const mod = await import('harper.js');
    const slim = await import('harper.js/slimBinary');
    return new mod.WorkerLinter({ binary: slim.slimBinary });
}
```

`WorkerLinter` is the upstream default and works in normal browser tabs; it may fail to initialise in restrictive environments (e.g. some headless browsers, some sandboxed iframes).

### Customise rules / dialect

The linter uses Harper's default config (American English, all rules on). To customise, edit `src/lib/createEditorLinter.ts` after `await linter.setup()`:

```ts
await linter.setLintConfig({
    RepeatedWords: false,        // turn off a rule
    // …other rule overrides
});
await linter.setDialect(/* Dialect.British */ 1);
```

See the [`harper.js` docs](https://writewithharper.com/docs/harperjs/introduction) for the full list of rules and dialect constants.

### Use the full (non-slim) WASM binary

If you want typst support, switch from `slimBinary` to `binary`:

```ts
import { binary } from 'harper.js/binary';
// …
new mod.LocalLinter({ binary });  // ~30 MB raw
```

## Project layout

```
src/
├── app.css                       # Tailwind + Quill snow CSS
├── app.html                      # SvelteKit HTML shell
├── lib/
│   ├── components/               # Isolate, DelayedRender, Spinner
│   ├── createEditorLinter.ts     # Builds a LocalLinter from harper.js/slimBinary
│   ├── harper-editor/            # Vendored from packages/harper-editor in upstream monorepo
│   └── lint-framework/           # Vendored from packages/lint-framework
└── routes/
    ├── +layout.svelte            # Imports app.css (so Tailwind preflight ships)
    ├── +page.svelte              # The editor page (the only route)
    └── +page.ts                  # prerender = true, ssr = false
```

## Vendored code & how to update from upstream

This project copies two packages straight from the upstream monorepo at <https://github.com/Automattic/harper>:

- `src/lib/harper-editor/` ← `packages/harper-editor/src/lib/` (minus a few bits we don't use)
- `src/lib/lint-framework/` ← `packages/lint-framework/src/` (all of it)

`harper.js` and the WASM binary are **not** vendored — they come from the `harper.js` npm package.

### Why vendored and not installed via npm?

`harper-editor` and `lint-framework` are internal workspace packages in the Harper monorepo and are **not published to npm**. The only way to use them is either to copy the source into your own project (what we do here), or to depend on the whole monorepo (very heavy and not standalone).

### Files we copy

**From `packages/harper-editor/src/lib/`:**

```
Editor.svelte          LazyEditor.svelte   LintCard.svelte
LintSidebar.svelte      StatusBar.svelte    bundle.ts
editorDisplay.ts        index.ts            styles.css
types.ts
```

We do **not** copy anything else from `packages/harper-editor/`, in particular not the `scripts/`, `package.json`, `tsconfig.json`, or the per-file `*.test.ts` if any were present.

**From `packages/lint-framework/src/`:** the whole tree (`index.ts`, `assets/`, `lint/`), no exclusions.

### Path rewrites applied after copying

Upstream uses bare workspace specifiers inside these files. After copying, we rewrite them to relative paths so the bundles resolve in our standalone project:

| Upstream import                       | Rewritten to                                  |
| ------------------------------------- | --------------------------------------------- |
| `from 'harper.js'`                    | left as-is (resolves to npm package)          |
| `from 'lint-framework'`               | `from '../lint-framework/index.js'`           |
| `from 'components'`                   | `from '../components/index.js'`               |
| `from './Box'` (no extension)         | left as-is (Vite resolves these)              |

`package.json` references the **`@fortawesome/*`**, **`colorjs.io`**, **`virtual-dom`**, and **`flowbite-svelte`** dependencies that the upstream packages use; we declare all of these in our own `package.json`.

### Step-by-step: refresh from a newer Harper release

1. **Clone the upstream monorepo** somewhere outside this project (so its `node_modules` doesn't conflict):

   ```bash
   git clone --depth 1 https://github.com/Automattic/harper.git /tmp/harper
   cd /tmp/harper && git log -1 --format='%H %s'    # note the commit hash for the changelog
   ```

2. **Copy `harper-editor`**: only the files listed above, into a scratch directory first so you can review the diff:

   ```bash
   mkdir -p /tmp/harper-new/harper-editor
   for f in Editor.svelte LazyEditor.svelte LintCard.svelte LintSidebar.svelte \
            StatusBar.svelte bundle.ts editorDisplay.ts index.ts styles.css types.ts; do
       cp /tmp/harper/packages/harper-editor/src/lib/$f \
          /tmp/harper-new/harper-editor/
   done
   ```

3. **Copy `lint-framework`**: whole `src/` tree, flattened into the destination.

   ```bash
   mkdir -p /tmp/harper-new/lint-framework
   cp -r /tmp/harper/packages/lint-framework/src/. /tmp/harper-new/lint-framework/
   ```

   The `/.` trick copies the *contents* of `src/` rather than creating an extra `src/` subdirectory.

4. **Diff against your current vendor copy** so you can review the changes before overwriting:

   ```bash
   diff -ruN src/lib/harper-editor src/lib/lint-framework \
        /tmp/harper-new/harper-editor /tmp/harper-new/lint-framework
   ```

5. **Overwrite the vendor directories** in this project:

   ```bash
   rsync -a --delete /tmp/harper-new/harper-editor/ src/lib/harper-editor/
   rsync -a --delete /tmp/harper-new/lint-framework/  src/lib/lint-framework/
   ```

6. **Re-apply the import-path rewrites** (see table above). The `harper-editor` files need two substitutions. The simplest way is to run them on the freshly-synced tree:

   ```bash
   cd src/lib/harper-editor
   for f in *.svelte *.ts; do
       sed -i \
         -e "s|from 'lint-framework'|from '../lint-framework/index.js'|g" \
         -e "s|from 'components'|from '../components/index.js'|g" \
         "$f"
   done
   cd ../../..
   ```

   (Apply the loop **after** step 5, on the in-tree copy, not on the `/tmp/harper-new/...` scratch directory.)

   Verify with `git diff src/lib/harper-editor/ | head` — you should see only the two `s/.../...` substitutions in any file that previously had bare specifiers; the rest of the file should match upstream exactly.

7. **Check for new external dependencies**: diff the new `package.json` of `harper-editor` against what we already declare. Common additions across releases are new `@fortawesome/*` icons, new Flowbite components, or new `virtual-dom` helpers. If the diff adds a runtime dep, add it to our `package.json` and run `pnpm install`.

8. **Build and smoke-test**:

   ```bash
   pnpm install          # picks up any new deps
   pnpm run build
   python3 -m http.server 4321 --directory build
   # Open http://localhost:4321/ in a real browser, type, and confirm:
   #   - WASM loads and the spinner goes away
   #   - the editor accepts text input
   #   - the right-hand "Problems" panel populates when you type "an test"
   ```

9. **Commit** the vendor refresh on its own, with the upstream commit hash in the message so you can `git log -S` later:

   ```bash
   git add src/lib/harper-editor src/lib/lint-framework package.json
   git commit -m "vendor: refresh harper-editor + lint-framework from <commit-hash>"
   ```

### When to refresh

You don't have to track every Harper commit. Pull from upstream when any of these is true:

- The editor's UI / side panel has visibly changed upstream (check <https://writewithharper.com/editor> and compare)
- A new rule, dialect, or WASM-side feature is announced in the Harper changelog or Discord
- `harper.js` on npm has bumped to a new minor/major and you want its features (rule changes, API additions)
- You hit a bug in the in-page squiggles or the side panel that has been fixed upstream

`harper.js` is the only piece you can update independently — just bump the version in `package.json` and `pnpm install`. Vendored code (this section) only needs refreshing when you specifically want the editor UX changes.

### When the rewrite step breaks

The most common breakage after a refresh is a file added to `harper-editor` that imports from `lint-framework` or `components` and you missed it in step 6. Symptoms:

- Build error: `Rollup failed to resolve import "lint-framework" from "src/lib/harper-editor/<NewFile>.svelte"`
  → add the rewrite to your `sed`/`edit` step and rebuild.

- Build error: `Rollup failed to resolve import "quill"` (or any other peer)
  → add the missing dep to `package.json` and `pnpm install`.

- Runtime: page shows "Loading Harper's grammar engine…" forever
  → check the browser devtools network tab; usually a 404 on the WASM asset, or a worker that fails to start. Open the console and look for the first red line.

## License

Apache-2.0 (inherited from Harper).
