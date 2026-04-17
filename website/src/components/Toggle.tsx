import { useState, type ComponentType } from "react";

import {
  Around,
  Classic,
  DarkInner,
  DarkSide,
  Eclipse,
  Expand,
  HalfSun,
  Horizon,
  InnerMoon,
  Lightbulb,
  Simple,
  Within,
} from "@theme-toggles/react";
import clsx from "clsx";

export const TOGGLE_SLUGS = [
  "classic",
  "around",
  "dark-inner",
  "dark-side",
  "eclipse",
  "expand",
  "half-sun",
  "horizon",
  "inner-moon",
  "lightbulb",
  "simple",
  "within",
] as const;

const TOGGLES: Record<
  (typeof TOGGLE_SLUGS)[number],
  ComponentType<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = {
  around: Around,
  classic: Classic,
  "dark-inner": DarkInner,
  "dark-side": DarkSide,
  eclipse: Eclipse,
  expand: Expand,
  "half-sun": HalfSun,
  horizon: Horizon,
  "inner-moon": InnerMoon,
  lightbulb: Lightbulb,
  simple: Simple,
  within: Within,
};

export function Toggle({
  slug,
  className,
  manageState,
}: {
  slug: keyof typeof TOGGLES;
  className?: string;
  manageState?: boolean;
}) {
  const [toggled, setToggled] = useState(false);

  const Toggle = TOGGLES[slug];
  if (!Toggle) throw new Error(`Toggle not found: ${slug}`);

  return (
    <Toggle
      className={clsx(
        className,
        manageState && toggled && "dark",
        manageState && !toggled && "light",
      )}
      onClick={() => setToggled(!toggled)}
    />
  );
}
