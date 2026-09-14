import { type ButtonHTMLAttributes, type CSSProperties } from "react";

export interface DarkInnerProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
  /** Whether the toggle should render in its dark-theme state. */
  toggled?: boolean;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function DarkInner({
  duration = 500,
  toggled,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  "aria-pressed": ariaPressed,
  ...props
}: DarkInnerProps) {
  return (
    <button
      {...props}
      type={type}
      title={title}
      aria-label={ariaLabel}
      aria-pressed={toggled ?? ariaPressed}
      className={[
        className,
        toggled === true ? "dark" : toggled === false ? "light" : undefined,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        aria-hidden="true"
        fill={"currentColor"}
        style={
          { "--toggles-dark-inner--duration": `${duration}ms` } as CSSProperties
        }
      >
        <path
          d={"M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7"}
          className="origin-center motion-safe:transition-transform motion-safe:duration-(--toggles-dark-inner--duration) motion-safe:[transition-timing-function:ease] dark:rotate-180"
        />
        <path
          d={
            "M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"
          }
          className="origin-center motion-safe:transition-transform motion-safe:duration-(--toggles-dark-inner--duration) motion-safe:[transition-timing-function:ease] dark:-rotate-180"
        />
      </svg>
    </button>
  );
}
