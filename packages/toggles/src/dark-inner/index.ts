import type { ToggleDefinition } from "../types";

const darkInner: ToggleDefinition = {
  slug: "dark-inner",
  name: "DarkInner",
  baseline: "src/dark-inner/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-dark-inner--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  content: [
    {
      tag: "path",
      attrs: { d: "M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7" },
      cls: {
        className:
          "origin-center transition-transform duration-(--toggles-dark-inner--duration) [transition-timing-function:ease]",
        darkClassName: "rotate-180",
      },
    },
    {
      tag: "path",
      attrs: {
        d: "M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z",
      },
      cls: {
        className:
          "origin-center transition-transform duration-(--toggles-dark-inner--duration) [transition-timing-function:ease]",
        darkClassName: "-rotate-180",
      },
    },
  ],
};

export default darkInner;
