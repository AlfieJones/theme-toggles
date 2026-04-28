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

  const toggleId = `eclipse-${++nextId}`;

  const clipMainId = `toggles.dev-eclipse-main-${toggleId}`;
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
    style={`--toggles-eclipse--duration: ${duration}ms`}
  >
    <defs>
      <clipPath id={clipMainId}>
        <path
          d={"M0 0h64v32h-64zm38 16a1 1 0 0020 0 1 1 0 00-20 0"}
          class={"origin-center transition-[d,translate] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)] [transition-delay:0s] dark:[d:path('M-16_-16h64v64h-64zm22_32a1_1_0_0020_0_1_1_0_00-20_0')] dark:not-supports-[d:path('M0_0')]:-translate-x-[32px] dark:[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)] dark:[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]"}
        />
      </clipPath>
    </defs>
    <g clip-path={`url(#${clipMainId})`}>
      <circle
        cx={16}
        cy={16}
        r={16}
        class={"[transform-origin:center] [transition-property:transform] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)]"}
      />
    </g>
  </svg>
</button>
