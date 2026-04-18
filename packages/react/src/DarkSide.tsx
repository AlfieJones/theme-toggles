import {
  type ButtonHTMLAttributes,
  type CSSProperties,

} from "react";

export interface DarkSideProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  duration?: number;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function DarkSide({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: DarkSideProps) {



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
        style={{ "--toggles-dark-side--duration": `${duration}ms` } as CSSProperties}
      >
            <path d={"M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"} className="origin-center transition-transform duration-(--toggles-dark-side--duration) [transition-timing-function:ease] dark:rotate-180" />
      </svg>
    </button>
  );
}
