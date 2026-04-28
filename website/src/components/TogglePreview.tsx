import { useState } from "react";

import { Toggle, type TOGGLE_SLUGS } from "./Toggle";

const SIZES = [
  { label: "24px", value: 24 },
  { label: "32px", value: 32 },
  { label: "64px", value: 64 },
  { label: "128px", value: 128 },
] as const;

type ToggleSize = (typeof SIZES)[number]["label"];

export function TogglePreview({
  slug,
}: {
  slug: (typeof TOGGLE_SLUGS)[number];
}) {
  const [size, setSize] = useState<ToggleSize>("128px");
  const selectedSize = SIZES.find((item) => item.label === size) ?? SIZES[1];

  return (
    <div className="relative z-10 flex h-full w-full flex-col">
      <div className="flex flex-1 items-center justify-center p-16">
        <Toggle
          slug={slug}
          manageState
          readUrlParam="toggled"
          className="cursor-pointer leading-none [&_*]:cursor-pointer"
          style={{ fontSize: `${selectedSize.value}px` }}
        />
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 border border-neutral-300 bg-neutral-100 p-1 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
        {SIZES.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setSize(item.label)}
            className={[
              "px-3 py-1.5 transition-colors cursor-pointer",
              size === item.label
                ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950"
                : "hover:bg-neutral-200 dark:hover:bg-neutral-700",
            ].join(" ")}
            aria-pressed={size === item.label}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
