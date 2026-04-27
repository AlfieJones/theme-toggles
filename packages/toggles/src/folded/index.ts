import { classicRays, clip } from "../shared";
import type { ToggleDefinition } from "../types";

const folded: ToggleDefinition = {
  slug: "folded",
  name: "Folded",
  baseline: "src/folded/baseline.svg",
  defaultDuration: 400,
  cssVar: "--toggles-folded--duration",
  viewBox: "0 0 24 24",
  clipPaths: [
    {
      id: "main",
      children: [
        {
          tag: "path",
          attrs: { d: "M0 0h25a1 1 0 0010 10v14H0Z" },
          cls: {
            className:
              "transition-[d,translate] duration-(--toggles-folded--duration)",
            darkClassName:
              "delay-[calc(var(--toggles-folded--duration)*0.15)] [d:path('M0_2h13a1_1_0_0010_10v14H0Z')] not-supports-[d:path('M0_0')]:-translate-x-3.25 not-supports-[d:path('M0_0')]:translate-y-0.5",
          },
        },
      ],
    },
  ],
  content: [
    {
      tag: "g",
      attrs: { stroke: "currentColor", strokeLinecap: "round" },
      children: [
        {
          tag: "circle",
          attrs: {
            cx: 12,
            cy: 12,
            r: 5,
            fill: "currentColor",
            clipPath: clip("main"),
          },
          cls: {
            className:
              "origin-center transition-transform duration-(--toggles-folded--duration)",
            darkClassName: "scale-170",
          },
        },
        ...classicRays.map((d) => ({
          tag: "path",
          attrs: {
            d,
            fill: "none",
            strokeWidth: 2,
            strokeLinejoin: "round",
            strokeMiterlimit: 0,
            paintOrder: "stroke markers fill",
          },
          cls: {
            className:
              "[transform-box:fill-box] [transform-origin:center] [transition:transform_var(--toggles-folded--duration),opacity_var(--toggles-folded--duration)] delay-[calc(var(--toggles-folded--duration)*0.15)] dark:delay-0",
            darkClassName: "[transform:scale(0.15)_rotate(45deg)] opacity-0",
          },
        })),
      ],
    },
  ],
};

export default folded;
