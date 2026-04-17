<script lang="ts">
  import clsx from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { createToggleId } from "./internal";


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


  const toggleId = createToggleId("eclipse");

  const clipMainId = `toggles.dev-eclipse-main-${toggleId}`;


</script>

<button
  type={type}
  title={title}
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
          <path d={"M0 0h64v32h-64zm36 16a1 1 0 0024 1 1 1 0 00-24-1"} class={clsx("origin-center", "toggles-dev--origin-center", "transition-[d,translate]", "toggles-dev--transition-[d,translate]", "[transition-duration:var(--toggles-eclipse--duration)]", "toggles-dev--[transition-duration:var(--toggles-eclipse--duration)]", "[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "[transition-delay:0s]", "toggles-dev--[transition-delay:0s]", "dark:[d:path('M-20_0h48v24h-48zm25_12a1_1_0_0014_0_1_1_0_00-14_0')]", "dark:toggles-dev--[d:path('M-20_0h48v24h-48zm25_12a1_1_0_0014_0_1_1_0_00-14_0')]", "dark:not-supports-[d:path('M0_0')]:-translate-x-[32px]", "dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[32px]", "dark:[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)]", "dark:toggles-dev--[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)]", "dark:[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]", "dark:toggles-dev--[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]")} />
      </clipPath>
    </defs>
    <g clip-path={`url(#${clipMainId})`}>
      <circle cx={16} cy={16} r={16} class={clsx("[transform-origin:center]", "toggles-dev--[transform-origin:center]", "[transition-property:transform]", "toggles-dev--[transition-property:transform]", "[transition-duration:var(--toggles-eclipse--duration)]", "toggles-dev--[transition-duration:var(--toggles-eclipse--duration)]", "[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "dark:[transform:scale(1.6)]", "dark:toggles-dev--[transform:scale(1.6)]")} />
    </g>
</svg>
</button>
