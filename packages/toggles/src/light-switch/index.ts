import { clip } from "../shared";
import type { ToggleDefinition } from "../types";

const lightSwitch: ToggleDefinition = {
  slug: "light-switch",
  name: "LightSwitch",
  baseline: "src/light-switch/baseline.svg",
  defaultDuration: 350,
  cssVar: "--toggles-light-switch--duration",
  viewBox: "0 0 24 24",
  clipPaths: [
    {
      id: "paddle",
      children: [
        {
          tag: "path",
          attrs: { d: "M7 3h10v9H7Z" },
          cls: {
            className:
              "transition-[d,translate] duration-(--toggles-light-switch--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)]",
            darkClassName:
              "[d:path('M7_12h10v9H7Z')] not-supports-[d:path('M0_0')]:translate-y-[9px]",
          },
        },
      ],
    },
  ],
  content: [
    {
      tag: "rect",
      attrs: {
        x: 5,
        y: 1,
        width: 14,
        height: 22,
        rx: 2,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: 1.5,
      },
    },
    {
      tag: "rect",
      attrs: {
        x: 7,
        y: 3,
        width: 10,
        height: 18,
        rx: 1,
        stroke: "currentColor",
        fill: "none",
        strokeWidth: 1,
      },
    },
    {
      tag: "rect",
      attrs: {
        x: 8,
        y: 4,
        width: 8,
        height: 16,
        rx: 0.5,
        fill: "currentColor",
        clipPath: clip("paddle"),
      },
    },
  ],
};

export default lightSwitch;
