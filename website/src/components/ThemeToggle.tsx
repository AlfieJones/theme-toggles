import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import clsx from "clsx";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <Classic
      className={clsx(className)}
      onClick={toggle}
    />
  );
}
