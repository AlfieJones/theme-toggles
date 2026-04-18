<script lang="ts">
  import type { Component as SvelteComponent } from "svelte";

  let { name, Component }: { name: string; Component: SvelteComponent } =
    $props();

  let dark = $state(false);
</script>

<div class="card" class:dark>
  <Component onclick={() => (dark = !dark)} />
  <span>{name}</span>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.25rem 1rem;
    border: 1px solid #374151;
    border-radius: 8px;
    background: #1f2937;
    color: #f3f4f6;
  }

  .card.dark {
    border-color: #111827;
    background: #030712;
  }

  .card :global(button) {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2.5rem;
    color: inherit;
    padding: 0;
    line-height: 1;
  }

  span {
    font-size: 0.75rem;
    opacity: 0.6;
  }
</style>
