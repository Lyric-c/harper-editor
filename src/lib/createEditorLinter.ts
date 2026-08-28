import type { Linter } from 'harper.js';

export async function createEditorLinter(): Promise<Linter> {
	const mod = await import('harper.js');
	const slim = await import('harper.js/slimBinary');
	// We use LocalLinter (main-thread) instead of WorkerLinter because the worker
	// is harder to verify in restricted environments (e.g. headless browsers, some
	// iframe sandboxes). Both implement the same `Linter` interface, so the
	// harper-editor component is unaffected. The cost is one ~15 MB WASM
	// compile on first load; subsequent loads are cached by the browser.
	const linter = new mod.LocalLinter({ binary: slim.slimBinary });
	await linter.setup();
	return linter;
}
