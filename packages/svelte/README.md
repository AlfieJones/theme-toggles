# @theme-toggles/svelte

Animated theme toggles for Svelte.

## Install

```bash
npm install @theme-toggles/svelte
```

## Use

```svelte
<script>
  import { Classic } from "@theme-toggles/svelte";
  import "@theme-toggles/svelte/styles/classic.css";

  let toggled = false;
</script>

<Classic {toggled} on:click={() => (toggled = !toggled)} />
```

Browse the [full collection of toggles](https://toggles.dev).
