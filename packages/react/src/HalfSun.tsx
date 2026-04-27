import {
  type ButtonHTMLAttributes,
  type CSSProperties,

} from "react";

export interface HalfSunProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  duration?: number;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function HalfSun({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: HalfSunProps) {



  return (
    <button
      type={type}
      title={title}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
<svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        aria-hidden="true"
        fill={"currentColor"}
        style={{ "--toggles-half-sun--duration": `${duration}ms` } as CSSProperties}
      >
            <path d={"M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z"} className="origin-center transition-transform duration-(--toggles-half-sun--duration) [transition-timing-function:ease] dark:rotate-180" />
      </svg>
    </button>
  );
}
