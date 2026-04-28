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
  duration: 350,
  type: "button",
  title: "Toggle theme",
  ariaLabel: "Toggle theme",
});

const attrs = useAttrs();

const toggleId = `light-switch-${++nextId}`;

const clipPaddleId = `toggles.dev-light-switch-paddle-${toggleId}`;
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
      viewBox="0 0 24 24"
      aria-hidden="true"
      :style="{ '--toggles-light-switch--duration': `${props.duration}ms` }"
    >
      <defs>
        <clipPath :id="clipPaddleId">
          <path
            :d="'M7 3h10v9H7Z'"
            :class="'transition-[d,translate] duration-(--toggles-light-switch--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path(\'M7_12h10v9H7Z\')] dark:not-supports-[d:path(\'M0_0\')]:translate-y-[9px]'"
          />
        </clipPath>
      </defs>
      <rect
        :x="5"
        :y="1"
        :width="14"
        :height="22"
        :rx="2"
        :stroke="'currentColor'"
        :fill="'none'"
        :stroke-width="1.5"
      />
      <rect
        :x="7"
        :y="3"
        :width="10"
        :height="18"
        :rx="1"
        :stroke="'currentColor'"
        :fill="'none'"
        :stroke-width="1"
      />
      <rect
        :x="8"
        :y="4"
        :width="8"
        :height="16"
        :rx="0.5"
        :fill="'currentColor'"
        :clip-path="`url(#${clipPaddleId})`"
      />
    </svg>
  </button>
</template>
