import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    const update = () => {
      setIsDark(next);
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    };
    if (!document.startViewTransition) { update(); return; }
    document.documentElement.setAttribute("data-theme-transition", "");
    const transition = document.startViewTransition(update);
    transition.finished.finally(() => {
      document.documentElement.removeAttribute("data-theme-transition");
    });
  };

  return <Classic className={className} onClick={toggle} />;
}
