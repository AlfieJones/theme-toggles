# @theme-toggles/vue

Animated theme toggles for Vue.

## Install

```bash
npm install @theme-toggles/vue
```

## Use

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Classic } from "@theme-toggles/vue";
import "@theme-toggles/vue/styles/classic.css";

const toggled = ref(false);
</script>

<template>
  <Classic :toggled="toggled" @click="toggled = !toggled" />
</template>
```

Browse the [full collection of toggles](https://toggles.dev).
