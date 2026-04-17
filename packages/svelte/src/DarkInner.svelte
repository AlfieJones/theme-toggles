<script lang="ts">
  import clsx from "clsx";
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
  style={`--toggles-dark-inner--duration: ${duration}ms`}
>
    <path d={"M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7"} class={clsx("origin-center", "toggles-dev--origin-center", "transition-transform", "toggles-dev--transition-transform", "duration-(--toggles-dark-inner--duration)", "toggles-dev--duration-(--toggles-dark-inner--duration)", "[transition-timing-function:ease]", "toggles-dev--[transition-timing-function:ease]", "dark:rotate-180", "dark:toggles-dev--rotate-180")} />
    <path d={"M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"} class={clsx("origin-center", "toggles-dev--origin-center", "transition-transform", "toggles-dev--transition-transform", "duration-(--toggles-dark-inner--duration)", "toggles-dev--duration-(--toggles-dark-inner--duration)", "[transition-timing-function:ease]", "toggles-dev--[transition-timing-function:ease]", "dark:-rotate-180", "dark:toggles-dev---rotate-180")} />
</svg>
</button>
