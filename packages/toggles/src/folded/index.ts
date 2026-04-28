import { classicRays, clip } from "../shared";
import type { ToggleDefinition } from "../types";

const folded: ToggleDefinition = {
  slug: "spin",
  name: "Spin",
  baseline: "src/folded/baseline.svg",
  defaultDuration: 400,
  cssVar: "--toggles-spin--duration",
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
              "transition-[d,translate] duration-(--toggles-spin--duration)",
            darkClassName:
              "delay-[calc(var(--toggles-spin--duration)*0.15)] [d:path('M0_2h13a1_1_0_0010_10v14H0Z')] not-supports-[d:path('M0_0')]:-translate-x-3.25 not-supports-[d:path('M0_0')]:translate-y-0.5",
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
              "origin-center transition-transform duration-(--toggles-spin--duration)",
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
              "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0",
            darkClassName: "rotate-45 scale-0",
          },
        })),
      ],
    },
  ],
};

export default folded;
