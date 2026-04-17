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


  const toggleId = createToggleId("horizon");

  const clipMainId = `toggles.dev-horizon-main-${toggleId}`;


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
  style={`--toggles-horizon--duration: ${duration}ms`}
>
    <defs>
      <clipPath id={clipMainId}>
          <path d={"M0 0h32v29h-32z"} />
      </clipPath>
    </defs>
    <path d={"M30.7 29.9H1.3c-.7 0-1.3.5-1.3 1.1 0 .6.6 1 1.3 1h29.3c.7 0 1.3-.5 1.3-1.1.1-.5-.5-1-1.2-1z"} />
    <g clip-path={`url(#${clipMainId})`}>
      <path d={"M16 8.8c-3.4 0-6.1 2.8-6.1 6.1s2.7 6.3 6.1 6.3 6.1-2.8 6.1-6.1-2.7-6.3-6.1-6.3zm13.3 11L26 15l3.3-4.8c.3-.5.1-1.1-.5-1.2l-5.7-1-1-5.7c-.1-.6-.8-.8-1.2-.5L16 5.1l-4.8-3.3c-.5-.4-1.2-.1-1.3.4L8.9 8 3.2 9c-.6.1-.8.8-.5 1.2L6 15l-3.3 4.8c-.3.5-.1 1.1.5 1.2l5.7 1 1 5.7c.1.6.8.8 1.2.5L16 25l4.8 3.3c.5.3 1.1.1 1.2-.5l1-5.7 5.7-1c.7-.1.9-.8.6-1.3zM16 22.5A7.6 7.6 0 0 1 8.3 15c0-4.2 3.5-7.5 7.7-7.5s7.7 3.4 7.7 7.5c0 4.2-3.4 7.5-7.7 7.5z"} class={clsx("transition-transform", "toggles-dev--transition-transform", "duration-(--toggles-horizon--duration)", "toggles-dev--duration-(--toggles-horizon--duration)", "[transition-timing-function:cubic-bezier(0,0,0.15,1)]", "toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.15,1)]", "dark:translate-y-[50%]", "dark:toggles-dev--translate-y-[50%]")} />
    </g>
</svg>
</button>
