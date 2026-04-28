import { classicRays, clip } from "../shared";
import type { ToggleDefinition } from "../types";

// Crescent moon centred at (12,26) — 14px below the sun position.
// In dark mode it translates -14px to sit at (12,12).
// Outer arc: r=5, centre (12,26). Inner arc: r=4.5, centre (10,26).
// Intersection points: (9.8, 21.5) and (9.8, 30.5).
const MOON_PATH = "M9.8 21.5A5 5 0 1 1 9.8 30.5A4.5 4.5 0 0 0 9.8 21.5Z";

const swap: ToggleDefinition = {
  slug: "swap",
  name: "Swap",
  baseline: "src/swap/baseline.svg",
  defaultDuration: 500,
  cssVar: "--toggles-swap--duration",
  viewBox: "0 0 24 24",
  clipPaths: [
    {
      id: "main",
      children: [
        { tag: "path", attrs: { d: "M0 0h24v19h-24Z" } },
      ],
    },
  ],
  content: [
    // Sun: outer group holds the clip, inner group animates
    {
      tag: "g",
      attrs: { clipPath: clip("main"), stroke: "currentColor", strokeLinecap: "round" },
      children: [
        {
          tag: "g",
          cls: {
            className:
              "transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0.4,0,1,1)]",
            darkClassName: "translate-y-[14px]",
          },
          children: [
            {
              tag: "circle",
              attrs: { cx: 12, cy: 12, r: 4.5, fill: "currentColor" },
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
            })),
          ],
        },
      ],
    },
    // Moon: outer group holds the clip, inner group starts below and rises
    {
      tag: "g",
      attrs: { clipPath: clip("main") },
      children: [
        {
          tag: "g",
          cls: {
            className:
              "transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1)]",
            darkClassName: "-translate-y-[14px]",
          },
          children: [
            {
              tag: "path",
              attrs: { d: MOON_PATH, fill: "currentColor" },
            },
          ],
        },
      ],
    },
    // Horizon line — drawn on top, never clipped
    {
      tag: "line",
      attrs: {
        x1: 1,
        y1: 19,
        x2: 23,
        y2: 19,
        stroke: "currentColor",
        strokeWidth: 1.5,
        strokeLinecap: "round",
      },
    },
  ],
};

export default swap;
