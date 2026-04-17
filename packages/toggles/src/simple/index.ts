import { clip } from "../shared";
import type { ToggleDefinition } from "../types";

const simple: ToggleDefinition = {
  slug: "simple",
  name: "Simple",
  baseline: "src/simple/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-simple--duration",
  viewBox: "0 0 32 32",
  svgAttrs: { fill: "currentColor" },
  clipPaths: [
    {
      id: "main",
      children: [
        {
          tag: "path",
          attrs: { d: "M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" },
          cls: {
            className:
              "transition-[d,translate] duration-(--toggles-simple--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)]",
            darkClassName:
              "[d:path('M-18-1h55v37h-55zm32_12a1_1_0_0025_0_1_1_0_00-25_0')] not-supports-[d:path('M0_0')]:-translate-x-[19px] not-supports-[d:path('M0_0')]:translate-y-[5px]",
          },
        },
      ],
    },
  ],
  content: [
    {
      tag: "g",
      attrs: { clipPath: clip("main") },
      children: [{ tag: "circle", attrs: { cx: 16, cy: 16, r: 15 } }],
    },
  ],
};

export default simple;
