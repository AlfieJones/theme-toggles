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
  :style="{ &quot;--toggles-dark-side--duration&quot;: `${props.duration}ms` }"
>
    <path :d="&quot;M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-dark-side--duration) [transition-timing-function:ease] dark:rotate-180&quot;" />
</svg>
  </button>
</template>
