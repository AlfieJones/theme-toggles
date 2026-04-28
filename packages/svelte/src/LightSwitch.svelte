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

  export let duration = 350;
  export let type: HTMLButtonAttributes["type"] = "button";
  export let title = "Toggle theme";
  export let ariaLabel = "Toggle theme";
  let className = "";
  export { className as class };


  const toggleId = `light-switch-${++nextId}`;

  const clipPaddleId = `toggles.dev-light-switch-paddle-${toggleId}`;


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
  viewBox="0 0 24 24"
  aria-hidden="true"
  style={`--toggles-light-switch--duration: ${duration}ms`}
>
    <defs>
      <clipPath id={clipPaddleId}>
          <path d={"M7 3h10v9H7Z"} class={"transition-[d,translate] duration-(--toggles-light-switch--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path('M7_12h10v9H7Z')] dark:not-supports-[d:path('M0_0')]:translate-y-[9px]"} />
      </clipPath>
    </defs>
    <rect x={5} y={1} width={14} height={22} rx={2} stroke={"currentColor"} fill={"none"} stroke-width={1.5} />
    <rect x={7} y={3} width={10} height={18} rx={1} stroke={"currentColor"} fill={"none"} stroke-width={1} />
    <rect x={8} y={4} width={8} height={16} rx={0.5} fill={"currentColor"} clip-path={`url(#${clipPaddleId})`} />
</svg>
</button>
