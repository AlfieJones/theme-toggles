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

const toggleId = `simple-${++nextId}`;

const clipMainId = `toggles.dev-simple-main-${toggleId}`;
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
      :style="{ '--toggles-simple--duration': `${props.duration}ms` }"
    >
      <defs>
        <clipPath :id="clipMainId">
          <path
            :d="'M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0'"
            :class="'transition-[d,translate] duration-(--toggles-simple--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path(\'M-18-1h55v37h-55zm32_12a1_1_0_0025_0_1_1_0_00-25_0\')] dark:not-supports-[d:path(\'M0_0\')]:-translate-x-[19px] dark:not-supports-[d:path(\'M0_0\')]:translate-y-[5px]'"
          />
        </clipPath>
      </defs>
      <g :clip-path="`url(#${clipMainId})`">
        <circle :cx="16" :cy="16" :r="15" />
      </g>
    </svg>
  </button>
</template>
