<script lang="ts">
  let nextId = 0;
</script>

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

  const toggleId = `within-${++nextId}`;

  const clipMainId = `toggles.dev-within-main-${toggleId}`;


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
  :style="{ '--toggles-within--duration': `${props.duration}ms` }"
>
    <defs>
      <clipPath :id="clipMainId">
          <path :d="&quot;M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16&quot;" />
      </clipPath>
    </defs>
    <g :clip-path="`url(#${clipMainId})`">
      <path :d="&quot;M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z&quot;" :class="&quot;[transform-origin:center] [transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:[transform:scale(0.65)]&quot;" />
    </g>
    <path :d="&quot;M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z&quot;" :class="&quot;[transform-origin:center] [transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:[transform:scale(1.5)]&quot;" />
    <path :d="&quot;M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z&quot;" :class="&quot;[transform-origin:center] [transition:transform_var(--toggles-within--duration)_cubic-bezier(0,0,0,1.25)] dark:[transform:translate3d(3px,-3px,0)_scale(1.2)]&quot;" />
</svg>
  </button>
</template>
