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

  const toggleId = `swap-${++nextId}`;

  const clipMainId = `toggles.dev-swap-main-${toggleId}`;


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
  :style="{ '--toggles-swap--duration': `${props.duration}ms` }"
>
    <defs>
      <clipPath :id="clipMainId">
          <path :d="&quot;M0 0h24v19h-24Z&quot;" />
      </clipPath>
    </defs>
    <g :clip-path="`url(#${clipMainId})`" :stroke="&quot;currentColor&quot;" :stroke-linecap="&quot;round&quot;">
      <g :class="&quot;transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0.4,0,1,1)] dark:translate-y-[14px]&quot;">
        <circle :cx="12" :cy="12" :r="4.5" :fill="&quot;currentColor&quot;" />
        <path :d="&quot;M12 1.4v2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;m20.3 3.7-2.5 2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;M22.6 12h-2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;M12 22.6v-2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;M1.4 12h2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;m20.3 20.3-2.5-2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;m3.7 20.3 2.5-2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
        <path :d="&quot;m3.7 3.7 2.5 2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" />
      </g>
    </g>
    <g :clip-path="`url(#${clipMainId})`">
      <g :class="&quot;transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1)] dark:-translate-y-[14px]&quot;">
        <path :d="&quot;M9.8 21.5A5 5 0 1 1 9.8 30.5A4.5 4.5 0 0 0 9.8 21.5Z&quot;" :fill="&quot;currentColor&quot;" />
      </g>
    </g>
    <line :x1="1" :y1="19" :x2="23" :y2="19" :stroke="&quot;currentColor&quot;" :stroke-width="1.5" :stroke-linecap="&quot;round&quot;" />
</svg>
  </button>
</template>
