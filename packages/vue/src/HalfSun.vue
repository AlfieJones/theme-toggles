<script setup lang="ts">
import { useAttrs } from "vue";

interface Props {
  duration?: number;
  type?: "button" | "submit" | "reset";
  title?: string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 500,
  type: "button",
  title: "Toggle theme",
  ariaLabel: "Toggle theme",
});

const attrs = useAttrs();
</script>

<template>
  <button
    v-bind="attrs"
    :type="props.type"
    :title="props.title"
    :aria-label="props.ariaLabel"
  >
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      aria-hidden="true"
      :fill="'currentColor'"
      :style="{ '--toggles-half-sun--duration': `${props.duration}ms` }"
    >
      <path
        :d="'M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z'"
        :class="'origin-center transition-transform duration-(--toggles-half-sun--duration) [transition-timing-function:ease] dark:rotate-180'"
      />
    </svg>
  </button>
</template>
