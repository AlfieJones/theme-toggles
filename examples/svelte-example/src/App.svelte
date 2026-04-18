<script lang="ts">
  import {
    Around,
    Classic,
    DarkInner,
    DarkSide,
    Eclipse,
    Expand,
    HalfSun,
    Horizon,
    InnerMoon,
    Lightbulb,
    Simple,
    Within,
  } from "@theme-toggles/svelte";
  import "@theme-toggles/svelte/styles.css";
  import ToggleCard from "./ToggleCard.svelte";

  const TOGGLES = [
    { name: "Classic", Component: Classic },
    { name: "Around", Component: Around },
    { name: "DarkInner", Component: DarkInner },
    { name: "DarkSide", Component: DarkSide },
    { name: "Eclipse", Component: Eclipse },
    { name: "Expand", Component: Expand },
    { name: "HalfSun", Component: HalfSun },
    { name: "Horizon", Component: Horizon },
    { name: "InnerMoon", Component: InnerMoon },
    { name: "Lightbulb", Component: Lightbulb },
    { name: "Simple", Component: Simple },
    { name: "Within", Component: Within },
  ];
</script>

<main>
  <h1>Theme Toggles</h1>
  <div class="grid">
    {#each TOGGLES as toggle}
      <ToggleCard {...toggle} />
    {/each}
  </div>
</main>

<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: #fff;
    color: #111;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  }
</style>
