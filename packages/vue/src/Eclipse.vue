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

  const toggleId = `eclipse-${++nextId}`;

  const clipMainId = `toggles.dev-eclipse-main-${toggleId}`;


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
  :style="{ '--toggles-eclipse--duration': `${props.duration}ms` }"
>
    <defs>
      <clipPath :id="clipMainId">
          <path :d="&quot;M0 0h64v32h-64zm38 16a1 1 0 0020 0 1 1 0 00-20 0&quot;" :class="&quot;origin-center transition-[d,translate] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)] [transition-delay:0s] dark:[d:path('M-16_-16h64v64h-64zm22_32a1_1_0_0020_0_1_1_0_00-20_0')] dark:not-supports-[d:path('M0_0')]:-translate-x-[32px] dark:[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)] dark:[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]&quot;" />
      </clipPath>
    </defs>
    <g :clip-path="`url(#${clipMainId})`">
      <circle :cx="16" :cy="16" :r="16" :class="&quot;[transform-origin:center] [transition-property:transform] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)]&quot;" />
    </g>
</svg>
  </button>
</template>
