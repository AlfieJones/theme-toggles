import { useState, useEffect } from "react";

export function BackLink({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const val = new URLSearchParams(window.location.search).get("toggled");
    if (val === "1") setToggled(true);

    const handler = (e: Event) => {
      setToggled((e as CustomEvent<{ toggled: boolean }>).detail.toggled);
    };
    window.addEventListener("tt:toggle", handler);
    return () => window.removeEventListener("tt:toggle", handler);
  }, []);

  return (
    <a href={toggled ? `/?${slug}=1` : "/"} className={className}>
      ← All toggles
    </a>
  );
}
