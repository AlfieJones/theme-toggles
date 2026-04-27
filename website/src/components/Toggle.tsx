import { useState, type ComponentType, type CSSProperties } from "react";

import {
  Around,
  Classic,
  DarkInner,
  DarkSide,
  Eclipse,
  Expand,
  Folded,
  HalfSun,
  Horizon,
  InnerMoon,
  Lightbulb,
  Simple,
  Within,
} from "@theme-toggles/react";

export const TOGGLE_SLUGS = [
  "classic",
  "around",
  "dark-inner",
  "dark-side",
  "eclipse",
  "expand",
  "folded",
  "half-sun",
  "horizon",
  "inner-moon",
  "lightbulb",
  "simple",
  "within",
] as const;

const TOGGLES: Record<(typeof TOGGLE_SLUGS)[number], ComponentType<any>> = {
  around: Around,
  classic: Classic,
  "dark-inner": DarkInner,
  "dark-side": DarkSide,
  eclipse: Eclipse,
  expand: Expand,
  folded: Folded,
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
  initialToggled,
  readUrlParam,
  onToggle,
  title,
  style,
}: {
  slug: keyof typeof TOGGLES;
  className?: string;
  style?: CSSProperties;
  manageState?: boolean;
  initialToggled?: boolean;
  readUrlParam?: string;
  onToggle?: (toggled: boolean) => void;
  title?: string;
}) {
  const [toggled, setToggled] = useState(() => {
    if (typeof window !== "undefined" && readUrlParam) {
      const val = new URLSearchParams(window.location.search).get(readUrlParam);
      if (val !== null) return val === "1";
    }
    return initialToggled ?? false;
  });

  const handleClick = () => {
    const next = !toggled;
    setToggled(next);
    onToggle?.(next);
    if (readUrlParam) {
      const params = new URLSearchParams(window.location.search);
      if (next) {
        params.set(readUrlParam, "1");
      } else {
        params.delete(readUrlParam);
      }
      const qs = params.toString();
      history.replaceState(
        null,
        "",
        `${window.location.pathname}${qs ? "?" + qs : ""}`,
      );
      window.dispatchEvent(
        new CustomEvent("tt:toggle", { detail: { toggled: next } }),
      );
    }
  };

  const ToggleComponent = TOGGLES[slug];
  if (!ToggleComponent) throw new Error(`Toggle not found: ${slug}`);

  return (
    <ToggleComponent
      title={title}
      style={style}
      className={[className, manageState && (toggled ? "dark" : "light")]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClick}
    />
  );
}
