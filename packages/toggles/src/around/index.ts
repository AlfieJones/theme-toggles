import { clip, orbitDots, orbitStagger } from "../shared";
import type { ToggleDefinition } from "../types";

const around: ToggleDefinition = {
  slug: "around",
  name: "Around",
  baseline: "src/around/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-around--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  clipPaths: [
    {
      id: "main",
      cls: {
        className:
          "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease]",
        darkClassName:
          "[transform:rotate(-90deg)] [transition:transform_var(--toggles-around--duration)_ease]",
      },
      children: [
        {
          tag: "path",
          attrs: { d: "M0 0h42v30a1 1 0 00-16 13H0Z" },
          cls: {
            className:
              "transition-[d,translate] [transition-duration:calc(var(--toggles-around--duration)_*_0.6)] [transition-timing-function:ease]",
            darkClassName:
              "[d:path('M-12_-14h42v30a1_1_0_00-16_13H0Z')] not-supports-[d:path('M0_0')]:-translate-x-[12px] not-supports-[d:path('M0_0')]:-translate-y-[14px] [transition-duration:var(--toggles-around--duration)]",
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
          attrs: { cx: 16, cy: 16, r: 8.4 },
          cls: {
            className:
              "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease]",
            darkClassName:
              "[transform:scale(1.4)] [transition:transform_var(--toggles-around--duration)_ease]",
          },
        },
        {
          tag: "g",
          children: orbitDots.map(({ cx, cy }, index) => ({
            tag: "circle",
            attrs: { cx, cy, r: 2.3 },
            cls: {
              className: `[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_${orbitStagger[index]})]`,
              darkClassName:
                "[transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]",
            },
          })),
        },
      ],
    },
  ],
};

export default around;
