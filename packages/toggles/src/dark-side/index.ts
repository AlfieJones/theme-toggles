import type { ToggleDefinition } from "../types";

const darkSide: ToggleDefinition = {
  slug: "dark-side",
  name: "DarkSide",
  baseline: "src/dark-side/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-dark-side--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  content: [
    {
      tag: "path",
      attrs: {
        d: "M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z",
      },
      cls: {
        className:
          "origin-center transition-transform duration-(--toggles-dark-side--duration) [transition-timing-function:ease]",
        darkClassName: "rotate-180",
      },
    },
  ],
};

export default darkSide;
