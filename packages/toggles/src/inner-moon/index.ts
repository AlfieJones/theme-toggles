import type { ToggleDefinition } from "../types";

const innerMoon: ToggleDefinition = {
  slug: "inner-moon",
  name: "InnerMoon",
  baseline: "src/inner-moon/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-inner-moon--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  content: [
    {
      tag: "path",
      attrs: {
        d: "M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4a9.39 9.39 0 1 1 0-18.8 9.39 9.39 0 1 1 0 18.8z",
      },
      cls: {
        className:
          "origin-center transition-transform duration-(--toggles-inner-moon--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)]",
        darkClassName: "rotate-180",
      },
    },
    {
      tag: "circle",
      attrs: { cx: 16, cy: 16, r: 8.1 },
      cls: {
        className:
          "origin-center transition-transform [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [transition-duration:calc(var(--toggles-inner-moon--duration)/1.5)]",
        darkClassName: "translate-x-[15%]",
      },
    },
  ],
};

export default innerMoon;
