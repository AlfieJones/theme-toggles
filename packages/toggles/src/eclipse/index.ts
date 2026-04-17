import { clip } from "../shared";
import type { ToggleDefinition } from "../types";

const eclipse: ToggleDefinition = {
  slug: "eclipse",
  name: "Eclipse",
  baseline: "src/eclipse/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-eclipse--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  clipPaths: [
    {
      id: "main",
      children: [
        {
          tag: "path",
          attrs: { d: "M0 0h64v32h-64zm36 16a1 1 0 0024 1 1 1 0 00-24-1" },
          cls: {
            className:
              "origin-center transition-[d,translate] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)] [transition-delay:0s]",
            darkClassName:
              "[d:path('M-20_0h48v24h-48zm25_12a1_1_0_0014_0_1_1_0_00-14_0')] not-supports-[d:path('M0_0')]:-translate-x-[32px] [transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)] [transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]",
          },
        },
      ],
    },
  ],
  content: [
    {
      tag: "g",
      attrs: { clipPath: clip("main") },
      children: [
        {
          tag: "circle",
          attrs: { cx: 16, cy: 16, r: 16 },
          cls: {
            className:
              "[transform-origin:center] [transition-property:transform] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)]",
            darkClassName: "[transform:scale(1.6)]",
          },
        },
      ],
    },
  ],
};

export default eclipse;
