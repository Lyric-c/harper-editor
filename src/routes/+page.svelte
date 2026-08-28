<script lang="ts">
	import type { Linter } from 'harper.js';
	import { Editor } from '$lib/harper-editor';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createEditorLinter } from '$lib/createEditorLinter';

	// The placeholder text shown when no `?initialText=` is provided.
	// Edit this to change what visitors see on first load.
	const demoText = `This is a self-hosted copy of Harper's editor. Everything runs in your browser — no text ever leaves this page, because the grammar engine is a WebAssembly module that lives in the page itself.

Try editing this text. The grammar checker will underline mistakes on the right-hand side, and you can click them to see suggested fixes. You can also hide a problem forever ("Ignore") if you disagree with Harper.

This paragraph contains an intentional mistake: "an test" should be "a test", and the next sentence has a subject–verb agreement error ("Harper are" instead of "Harper is").`;

	let content = $state('');
	let linter: Linter | null = $state(null);

	onMount(() => {
		if (browser) {
			// ?initialText=... overrides the demo text. URL-encode the value.
			const initial = new URLSearchParams(window.location.search).get('initialText');
			content = initial ?? demoText;
		}
		(async () => {
			try {
				linter = await createEditorLinter();
			} catch (e) {
				console.error('Linter init failed:', e);
			}
		})();
	});
</script>

<svelte:head>
	<title>Harper Editor</title>
	<meta name="description" content="A self-hosted Harper grammar editor." />
</svelte:head>

<div class="fixed inset-0 flex flex-col bg-stone-100">
	<main class="min-h-0 flex-1 p-4">
		<div class="mx-auto h-full max-w-[1400px]">
			{#if linter}
				<Editor {content} {linter} />
			{:else}
				<div class="flex h-full items-center justify-center rounded-[10px] border border-stone-200 bg-white text-stone-500">
					<div class="flex flex-col items-center gap-3">
						<svg class="h-8 w-8 animate-spin text-stone-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
						</svg>
						<p class="text-sm">Loading Harper's grammar engine…</p>
					</div>
				</div>
			{/if}
		</div>
	</main>
</div>
