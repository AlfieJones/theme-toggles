import around from "./around/index";
import classic from "./classic/index";
import darkInner from "./dark-inner/index";
import darkSide from "./dark-side/index";
import eclipse from "./eclipse/index";
import expand from "./expand/index";
import halfSun from "./half-sun/index";
import horizon from "./horizon/index";
import innerMoon from "./inner-moon/index";
import lightbulb from "./lightbulb/index";
import simple from "./simple/index";
import within from "./within/index";
import type { ToggleDefinition } from "./types";

export const toggles: ToggleDefinition[] = [
  around,
  classic,
  darkInner,
  darkSide,
  eclipse,
  expand,
  halfSun,
  horizon,
  innerMoon,
  lightbulb,
  simple,
  within,
];

export const toggleMap = new Map(
  toggles.map((toggle) => [toggle.slug, toggle]),
);
