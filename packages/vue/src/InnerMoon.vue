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
  :fill="&quot;currentColor&quot;"
  :style="{ &quot;--toggles-inner-moon--duration&quot;: `${props.duration}ms` }"
>
    <path :d="&quot;M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4a9.39 9.39 0 1 1 0-18.8 9.39 9.39 0 1 1 0 18.8z&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-inner-moon--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:rotate-180&quot;" />
    <circle :cx="16" :cy="16" :r="7.6" :class="&quot;origin-center transition-transform [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [transition-duration:calc(var(--toggles-inner-moon--duration)/1.5)] dark:translate-x-[15%]&quot;" />
</svg>
  </button>
</template>
