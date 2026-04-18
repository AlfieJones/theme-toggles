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

  export let duration = 500;
  export let type: HTMLButtonAttributes["type"] = "button";
  export let title = "Toggle theme";
  export let ariaLabel = "Toggle theme";
  let className = "";
  export { className as class };

  const toggleId = `around-${++nextId}`;

  const clipMainId = `toggles.dev-around-main-${toggleId}`;
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
    viewBox="0 0 32 32"
    aria-hidden="true"
    fill={"currentColor"}
    style={`--toggles-around--duration: ${duration}ms`}
  >
    <defs>
      <clipPath
        id={clipMainId}
        class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:[transform:rotate(-90deg)] dark:[transition:transform_var(--toggles-around--duration)_ease]"}
      >
        <path
          d={"M0 0h42v30a1 1 0 00-16 13H0Z"}
          class={"transition-[d,translate] [transition-duration:calc(var(--toggles-around--duration)_*_0.6)] [transition-timing-function:ease] dark:[d:path('M-12_-14h42v30a1_1_0_00-16_13H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-[12px] dark:not-supports-[d:path('M0_0')]:-translate-y-[14px] dark:[transition-duration:var(--toggles-around--duration)]"}
        />
      </clipPath>
    </defs>
    <g clip-path={`url(#${clipMainId})`}>
      <circle
        cx={16}
        cy={16}
        r={8.4}
        class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:[transform:scale(1.4)] dark:[transition:transform_var(--toggles-around--duration)_ease]"}
      />
      <g>
        <circle
          cx={16}
          cy={3.3}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.253)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
        <circle
          cx={27}
          cy={9.7}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.348)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
        <circle
          cx={27}
          cy={22.3}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.443)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
        <circle
          cx={16}
          cy={28.7}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.538)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
        <circle
          cx={5}
          cy={22.3}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.633)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
        <circle
          cx={5}
          cy={9.7}
          r={2.3}
          class={"[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.728)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"}
        />
      </g>
    </g>
  </svg>
</button>
