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

  const toggleId = `swap-${++nextId}`;

  const clipMainId = `toggles.dev-swap-main-${toggleId}`;
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
    style={`--toggles-swap--duration: ${duration}ms`}
  >
    <defs>
      <clipPath id={clipMainId}>
        <path d={"M0 0h24v19h-24Z"} />
      </clipPath>
    </defs>
    <g
      clip-path={`url(#${clipMainId})`}
      stroke={"currentColor"}
      stroke-linecap={"round"}
    >
      <g
        class={"transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0.4,0,1,1)] dark:translate-y-[14px]"}
      >
        <circle cx={12} cy={12} r={4.5} fill={"currentColor"} />
        <path
          d={"M12 1.4v2.4"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"m20.3 3.7-2.5 2.5"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"M22.6 12h-2.4"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"M12 22.6v-2.4"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"M1.4 12h2.4"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"m20.3 20.3-2.5-2.5"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"m3.7 20.3 2.5-2.5"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
        <path
          d={"m3.7 3.7 2.5 2.5"}
          fill={"none"}
          stroke-width={2}
          stroke-linejoin={"round"}
          stroke-miterlimit={0}
          paint-order={"stroke markers fill"}
        />
      </g>
    </g>
    <g clip-path={`url(#${clipMainId})`}>
      <g
        class={"transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1)] dark:-translate-y-[14px]"}
      >
        <path
          d={"M9.8 21.5A5 5 0 1 1 9.8 30.5A4.5 4.5 0 0 0 9.8 21.5Z"}
          fill={"currentColor"}
        />
      </g>
    </g>
    <line
      x1={1}
      y1={19}
      x2={23}
      y2={19}
      stroke={"currentColor"}
      stroke-width={1.5}
      stroke-linecap={"round"}
    />
  </svg>
</button>
