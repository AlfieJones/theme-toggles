import { useEffect, useState } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function ReducedMotionNotice() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery);
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (!prefersReducedMotion) return null;

  return (
    <div
      role="status"
      className="border-b border-neutral-300 bg-neutral-100 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
    >
      <div className="container mx-auto border-x border-neutral-300 px-6 py-3 dark:border-neutral-700">
        Animations are disabled because your device prefers reduced motion.
      </div>
    </div>
  );
}
