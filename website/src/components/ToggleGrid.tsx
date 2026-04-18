import { useState } from "react";
import { ToggleCard } from "./ToggleCard";
import type { TOGGLE_SLUGS } from "./Toggle";

export function ToggleGrid({
  slugs,
  initialParams,
}: {
  slugs: (typeof TOGGLE_SLUGS)[number][];
  initialParams: Record<string, string>;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {slugs.map((slug, idx) => (
        <div
          key={slug}
          style={{ viewTransitionName: `toggle-card-${slug}` }}
          className="relative border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="bolt top-2 left-2" />
          <span className="bolt top-2 right-2" />
          <span className="bolt bottom-2 left-2" />
          <span className="bolt bottom-2 right-2" />
          <ToggleCard
            slug={slug}
            initialToggled={initialParams[slug] === "1"}
          />
        </div>
      ))}
    </div>
  );
}
