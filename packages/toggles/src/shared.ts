import type { ClipRef } from "./types";
export const clip = (id: string): ClipRef => ({ _clip: id });

export const orbitDots = [
  { cx: 16, cy: 3.3 },
  { cx: 27, cy: 9.7 },
  { cx: 27, cy: 22.3 },
  { cx: 16, cy: 28.7 },
  { cx: 5, cy: 22.3 },
  { cx: 5, cy: 9.7 },
];

export const orbitStagger = [0.253, 0.348, 0.443, 0.538, 0.633, 0.728];

export const classicRays = [
  "M12 1.4v2.4",
  "m20.3 3.7-2.5 2.5",
  "M22.6 12h-2.4",
  "M12 22.6v-2.4",
  "M1.4 12h2.4",
  "m20.3 20.3-2.5-2.5",
  "m3.7 20.3 2.5-2.5",
  "m3.7 3.7 2.5 2.5",
];

export const lightbulbRays = [
  "M16 6.4V1.3",
  "M26.3 15.8h5.1",
  "m22.6 9 3.7-3.6",
  "M9.4 9 5.7 5.4",
  "M5.7 15.8H.6",
];
