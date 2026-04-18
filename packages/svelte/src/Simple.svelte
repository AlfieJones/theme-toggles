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


  const toggleId = `simple-${++nextId}`;

  const clipMainId = `toggles.dev-simple-main-${toggleId}`;


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
  style={`--toggles-simple--duration: ${duration}ms`}
>
    <defs>
      <clipPath id={clipMainId}>
          <path d={"M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"} class={"transition-[d,translate] duration-(--toggles-simple--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path('M-18-1h55v37h-55zm32_12a1_1_0_0025_0_1_1_0_00-25_0')] dark:not-supports-[d:path('M0_0')]:-translate-x-[19px] dark:not-supports-[d:path('M0_0')]:translate-y-[5px]"} />
      </clipPath>
    </defs>
    <g clip-path={`url(#${clipMainId})`}>
      <circle cx={16} cy={16} r={15} />
    </g>
</svg>
</button>
