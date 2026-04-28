import type { ToggleDefinition } from "../types";

const halfSun: ToggleDefinition = {
  slug: "half-sun",
  name: "HalfSun",
  baseline: "src/half-sun/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-half-sun--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  content: [
    {
      tag: "path",
      attrs: {
        d: "M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z",
      },
      cls: {
        className:
          "origin-center transition-transform duration-(--toggles-half-sun--duration) [transition-timing-function:ease]",
        darkClassName: "rotate-180",
      },
    },
  ],
};

export default halfSun;
