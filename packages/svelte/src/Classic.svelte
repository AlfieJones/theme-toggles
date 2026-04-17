<script context="module" lang="ts">
  let nextId = 0;
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends Omit<HTMLButtonAttributes, "children"> {
    duration?: number;
    ariaLabel?: string;
    class?: string;
  }

  export let duration = 400;
  export let type: HTMLButtonAttributes["type"] = "button";
  export let title = "Toggle theme";
  export let ariaLabel = "Toggle theme";
  let className = "";
  export { className as class };

  const toggleId = `classic-${++nextId}`;

  const clipMainId = `toggles.dev-classic-main-${toggleId}`;
</script>

<button
  {type}
  {title}
  aria-label={ariaLabel}
  class={className}
  on:click
  {...$$restProps}
>
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={`--toggles-dot-dev--duration: ${duration}ms`}
  >
    <defs>
      <clipPath id={clipMainId}>
        <path
          d={"M0 0h25a1 1 0 0010 10v14H0Z"}
          class={"transition-[d,translate] duration-(--toggles-dot-dev--duration) dark:delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:not-supports-[d:path('M0_0')]:translate-y-0.5"}
        />
      </clipPath>
    </defs>
    <g stroke={"currentColor"} stroke-linecap={"round"}>
      <circle
        cx={12}
        cy={12}
        r={5}
        fill={"currentColor"}
        clip-path={`url(#${clipMainId})`}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) dark:scale-170"}
      />
      <path
        d={"M12 1.4v2.4"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"m20.3 3.7-2.5 2.5"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"M22.6 12h-2.4"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"M12 22.6v-2.4"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"M1.4 12h2.4"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"m20.3 20.3-2.5-2.5"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"m3.7 20.3 2.5-2.5"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
      <path
        d={"m3.7 3.7 2.5 2.5"}
        fill={"none"}
        stroke-width={2}
        stroke-linejoin={"round"}
        stroke-miterlimit={0}
        paint-order={"stroke markers fill"}
        class={"origin-center transition duration-(--toggles-dot-dev--duration) delay-[calc(var(--toggles-dot-dev--duration)*0.15)] dark:delay-0 dark:scale-50 dark:rotate-45 dark:opacity-0"}
      />
    </g>
  </svg>
</button>
