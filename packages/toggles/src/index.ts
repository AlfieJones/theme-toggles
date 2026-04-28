import around from "./around/index";
import classic from "./classic/index";
import lightSwitch from "./light-switch/index";
import darkInner from "./dark-inner/index";
import darkSide from "./dark-side/index";
import eclipse from "./eclipse/index";
import expand from "./expand/index";
import folded from "./folded/index";
import halfSun from "./half-sun/index";
import horizon from "./horizon/index";
import innerMoon from "./inner-moon/index";
import lightbulb from "./lightbulb/index";
import simple from "./simple/index";
import swap from "./swap/index";
import within from "./within/index";
import type { ToggleDefinition } from "./types";

export const toggles: ToggleDefinition[] = [
  around,
  classic,
  darkInner,
  darkSide,
  eclipse,
  expand,
  folded,
  halfSun,
  horizon,
  innerMoon,
  lightbulb,
  lightSwitch,
  simple,
  swap,
  within,
];

export const toggleMap = new Map(
  toggles.map((toggle) => [toggle.slug, toggle]),
);
