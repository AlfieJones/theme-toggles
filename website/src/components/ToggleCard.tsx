import { useState } from "react";
import { Toggle } from "./Toggle";
import type { TOGGLE_SLUGS } from "./Toggle";
import { CardSpotlight } from "./card-spotlight";

const COLORS: Record<
  (typeof TOGGLE_SLUGS)[number],
  { untoggled: number[][]; toggled: number[][] }
> = {
  classic: {
    untoggled: [
      [254, 205, 211],
      [253, 164, 175],
    ],
    toggled: [
      [253, 164, 175],
      [251, 113, 133],
    ],
  },
  around: {
    untoggled: [
      [221, 214, 254],
      [196, 181, 253],
    ],
    toggled: [
      [196, 181, 253],
      [167, 139, 250],
    ],
  },
  "dark-inner": {
    untoggled: [
      [191, 219, 254],
      [147, 197, 253],
    ],
    toggled: [
      [147, 197, 253],
      [96, 165, 250],
    ],
  },
  "dark-side": {
    untoggled: [
      [165, 243, 252],
      [103, 232, 249],
    ],
    toggled: [
      [103, 232, 249],
      [34, 211, 238],
    ],
  },
  eclipse: {
    untoggled: [
      [254, 215, 170],
      [253, 186, 116],
    ],
    toggled: [
      [253, 186, 116],
      [251, 146, 60],
    ],
  },
  expand: {
    untoggled: [
      [167, 243, 208],
      [110, 231, 183],
    ],
    toggled: [
      [110, 231, 183],
      [52, 211, 153],
    ],
  },
  spin: {
    untoggled: [
      [224, 242, 254],
      [186, 230, 253],
    ],
    toggled: [
      [186, 230, 253],
      [125, 211, 252],
    ],
  },
  "light-switch": {
    untoggled: [
      [226, 232, 240],
      [203, 213, 225],
    ],
    toggled: [
      [203, 213, 225],
      [148, 163, 184],
    ],
  },
  "half-sun": {
    untoggled: [
      [253, 230, 138],
      [252, 211, 77],
    ],
    toggled: [
      [252, 211, 77],
      [251, 191, 36],
    ],
  },
  horizon: {
    untoggled: [
      [186, 230, 253],
      [125, 211, 252],
    ],
    toggled: [
      [125, 211, 252],
      [56, 189, 248],
    ],
  },
  "inner-moon": {
    untoggled: [
      [199, 210, 254],
      [165, 180, 252],
    ],
    toggled: [
      [165, 180, 252],
      [129, 140, 248],
    ],
  },
  lightbulb: {
    untoggled: [
      [254, 240, 138],
      [253, 224, 71],
    ],
    toggled: [
      [253, 224, 71],
      [250, 204, 21],
    ],
  },
  simple: {
    untoggled: [
      [153, 246, 228],
      [94, 234, 212],
    ],
    toggled: [
      [94, 234, 212],
      [45, 212, 191],
    ],
  },
  within: {
    untoggled: [
      [251, 207, 232],
      [249, 168, 212],
    ],
    toggled: [
      [249, 168, 212],
      [244, 114, 182],
    ],
  },
};

export function ToggleCard({
  slug,
  initialToggled = false,
}: {
  slug: (typeof TOGGLE_SLUGS)[number];
  initialToggled?: boolean;
}) {
  const [toggled, setToggled] = useState(initialToggled);

  const handleToggle = (next: boolean) => {
    setToggled(next);
    const params = new URLSearchParams(window.location.search);
    if (next) {
      params.set(slug, "1");
    } else {
      params.delete(slug);
    }
    const qs = params.toString();
    history.replaceState(
      null,
      "",
      `${window.location.pathname}${qs ? "?" + qs : ""}`,
    );
  };

  return (
    <CardSpotlight
      colors={COLORS[slug][toggled ? "toggled" : "untoggled"]}
      className="flex flex-col flex-1 w-full overflow-hidden"
    >
      <div className="relative z-20 flex-1 flex items-center justify-center p-14">
        <Toggle
          title=""
          slug={slug}
          manageState
          initialToggled={initialToggled}
          onToggle={handleToggle}
          className="text-8xl cursor-pointer"
        />
      </div>
      <a
        href={`/toggles/${slug}${toggled ? "?toggled=1" : ""}`}
        className="relative z-20 text-sm border-t border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 w-full text-center py-3 cursor-pointer transition-colors capitalize"
      >
        {slug.replace(/-/g, " ")} →
      </a>
    </CardSpotlight>
  );
}
