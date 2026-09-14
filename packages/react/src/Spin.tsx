import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface SpinProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
  /**
   * Controls the toggle state when provided. When omitted, the component
   * follows Tailwind's surrounding `.dark` class.
   */
  toggled?: boolean;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function Spin({
  duration = 400,
  toggled,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: SpinProps) {
  const toggleId = useId();

  const clipMainId = `toggles.dev-spin-main-${toggleId}`;

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
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ "--toggles-spin--duration": `${duration}ms` } as CSSProperties}
      >
        <defs>
          <clipPath id={clipMainId}>
            <path
              d={"M0 0h25a1 1 0 0010 10v14H0Z"}
              className={
                toggled === undefined
                  ? "transition-[d,translate] duration-(--toggles-spin--duration) dark:delay-[calc(var(--toggles-spin--duration)*0.15)] dark:[d:path('M0_2h13a1_1_0_0010_10v14H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-3.25 dark:not-supports-[d:path('M0_0')]:translate-y-0.5"
                  : toggled
                    ? "transition-[d,translate] duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] [d:path('M0_2h13a1_1_0_0010_10v14H0Z')] not-supports-[d:path('M0_0')]:-translate-x-3.25 not-supports-[d:path('M0_0')]:translate-y-0.5"
                    : "transition-[d,translate] duration-(--toggles-spin--duration)"
              }
            />
          </clipPath>
        </defs>
        <g stroke={"currentColor"} strokeLinecap={"round"}>
          <circle
            cx={12}
            cy={12}
            r={5}
            fill={"currentColor"}
            clipPath={`url(#${clipMainId})`}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) dark:scale-170"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) scale-170"
                  : "origin-center transition-transform duration-(--toggles-spin--duration)"
            }
          />
          <path
            d={"M12 1.4v2.4"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"m20.3 3.7-2.5 2.5"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"M22.6 12h-2.4"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"M12 22.6v-2.4"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"M1.4 12h2.4"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"m20.3 20.3-2.5-2.5"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"m3.7 20.3 2.5-2.5"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
          <path
            d={"m3.7 3.7 2.5 2.5"}
            fill={"none"}
            strokeWidth={2}
            strokeLinejoin={"round"}
            strokeMiterlimit={0}
            paintOrder={"stroke markers fill"}
            className={
              toggled === undefined
                ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 dark:rotate-45 dark:scale-0"
                : toggled
                  ? "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0 rotate-45 scale-0"
                  : "origin-center transition-transform duration-(--toggles-spin--duration) delay-[calc(var(--toggles-spin--duration)*0.15)] dark:delay-0"
            }
          />
        </g>
      </svg>
    </button>
  );
}
