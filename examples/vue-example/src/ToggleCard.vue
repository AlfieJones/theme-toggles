<script setup lang="ts">
import { ref } from "vue";
import type { Component } from "vue";

defineProps<{ name: string; component: Component }>();

const dark = ref(false);
</script>

<template>
  <div class="card" :class="{ dark }">
    <component :is="component" @click="dark = !dark" />
    <span>{{ name }}</span>
  </div>
</template>

<style scoped>
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

.card :deep(button) {
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
