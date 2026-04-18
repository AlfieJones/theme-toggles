<script setup lang="ts">
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
} from "@theme-toggles/vue";
import "@theme-toggles/vue/styles.css";
import ToggleCard from "./ToggleCard.vue";

const TOGGLES = [
  { name: "Classic", component: Classic },
  { name: "Around", component: Around },
  { name: "DarkInner", component: DarkInner },
  { name: "DarkSide", component: DarkSide },
  { name: "Eclipse", component: Eclipse },
  { name: "Expand", component: Expand },
  { name: "HalfSun", component: HalfSun },
  { name: "Horizon", component: Horizon },
  { name: "InnerMoon", component: InnerMoon },
  { name: "Lightbulb", component: Lightbulb },
  { name: "Simple", component: Simple },
  { name: "Within", component: Within },
];
</script>

<template>
  <main>
    <h1>Theme Toggles</h1>
    <div class="grid">
      <ToggleCard
        v-for="t in TOGGLES"
        :key="t.name"
        :name="t.name"
        :component="t.component"
      />
    </div>
  </main>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
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
