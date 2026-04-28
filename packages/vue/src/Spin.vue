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
    duration: 400,
    type: "button",
    title: "Toggle theme",
    ariaLabel: "Toggle theme",
  });

  const attrs = useAttrs();

  const toggleId = `spin-${++nextId}`;

  const clipMainId = `toggles.dev-spin-main-${toggleId}`;


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
  :style="{ '--toggles-spin--duration': `${props.duration}ms` }"
>
    <defs>
      <clipPath :id="clipMainId">
          <path :d="&quot;M0 0h25a1 1 0 0010 10v14H0Z&quot;" :class="&quot;transition-[d,translate] duration-(--toggles-spin--duration) dark:delay-[calc(var(--toggles-spin--duration)*0.15)] dark:[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:not-supports-[d:path('M0_0')]:translate-y-0.5&quot;" />
      </clipPath>
    </defs>
    <g :stroke="&quot;currentColor&quot;" :stroke-linecap="&quot;round&quot;">
      <circle :cx="12" :cy="12" :r="5" :fill="&quot;currentColor&quot;" :clip-path="`url(#${clipMainId})`" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) dark:scale-170&quot;" />
      <path :d="&quot;M12 1.4v2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;m20.3 3.7-2.5 2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;M22.6 12h-2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;M12 22.6v-2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;M1.4 12h2.4&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;m20.3 20.3-2.5-2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;m3.7 20.3 2.5-2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
      <path :d="&quot;m3.7 3.7 2.5 2.5&quot;" :fill="&quot;none&quot;" :stroke-width="2" :stroke-linejoin="&quot;round&quot;" :stroke-miterlimit="0" :paint-order="&quot;stroke markers fill&quot;" :class="&quot;origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0&quot;" />
    </g>
</svg>
  </button>
</template>
