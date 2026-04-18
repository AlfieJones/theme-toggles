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
  :stroke-width="&quot;2&quot;" :stroke="&quot;currentColor&quot;" :fill="&quot;currentColor&quot;" :stroke-linecap="&quot;round&quot;"
  :style="{ &quot;--toggles-lightbulb--duration&quot;: `${props.duration}ms` }"
>
    <path :stroke-width="1" :d="&quot;M9.4 9.9c1.8-1.8 4.1-2.7 6.6-2.7 5.1 0 9.3 4.2 9.3 9.3 0 2.3-.8 4.4-2.3 6.1-.7.8-2 2.8-2.5 4.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5v-.1c.5-1.8 2-3.9 2.7-4.8 1.4-1.5 2.1-3.5 2.1-5.6 0-4.7-3.7-8.5-8.4-8.5-2.3 0-4.4.9-5.9 2.5-1.6 1.6-2.5 3.7-2.5 6 0 2.1.7 4 2.1 5.6.8.9 2.2 2.9 2.7 4.9 0 .2-.1.5-.4.5h-.1c-.2 0-.4-.1-.4-.4-.5-1.7-1.8-3.7-2.5-4.5-1.5-1.7-2.3-3.9-2.3-6.1 0-2.3 1-4.7 2.7-6.5z&quot;" />
    <path :d="&quot;M19.8 27.5h-7.6&quot;" />
    <path :d="&quot;M19.8 29.2h-7.6&quot;" />
    <path :d="&quot;M19.8 30.9h-7.6&quot;" />
    <path :pathLength="1" :fill="&quot;none&quot;" :d="&quot;M14.6 27.1c0-3.4 0-6.8-.1-10.2-.2-1-1.1-1.7-2-1.7-1.2-.1-2.3 1-2.2 2.3.1 1 .9 1.9 2.1 2h7.2c1.1-.1 2-1 2.1-2 .1-1.2-1-2.3-2.2-2.3-.9 0-1.7.7-2 1.7 0 3.4 0 6.8-.1 10.2&quot;" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
    <path :d="&quot;M16 5V1.3&quot;" :pathLength="1" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
    <path :d="&quot;M27.5 15.8h3.9&quot;" :pathLength="1" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
    <path :d="&quot;M23.6 7.9 26.3 5.4&quot;" :pathLength="1" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
    <path :d="&quot;M8.4 7.9 5.7 5.4&quot;" :pathLength="1" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
    <path :d="&quot;M4.5 15.8H.6&quot;" :pathLength="1" :class="&quot;[stroke-dasharray:1.1] transition-[stroke-dashoffset,opacity] duration-(--toggles-lightbulb--duration) [stroke-dashoffset:0] opacity-100 dark:[stroke-dashoffset:1] dark:opacity-0&quot;" />
</svg>
  </button>
</template>
