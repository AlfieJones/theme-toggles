import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface AroundProps extends Omit<
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

export function Around({
  duration = 500,
  toggled,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: AroundProps) {
  const toggleId = useId();

  const clipMainId = `toggles.dev-around-main-${toggleId}`;

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
        style={
          { "--toggles-around--duration": `${duration}ms` } as CSSProperties
        }
      >
        <defs>
          <clipPath
            id={clipMainId}
            className={
              toggled === undefined
                ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:[transform:rotate(-90deg)] dark:[transition:transform_var(--toggles-around--duration)_ease]"
                : toggled
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] [transform:rotate(-90deg)] [transition:transform_var(--toggles-around--duration)_ease]"
                  : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease]"
            }
          >
            <path
              d={"M0 0h42v30a1 1 0 00-16 13H0Z"}
              className={
                toggled === undefined
                  ? "transition-[d,translate] [transition-duration:calc(var(--toggles-around--duration)_*_0.6)] [transition-timing-function:ease] dark:[d:path('M-12_-14h42v30a1_1_0_00-16_13H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-[12px] dark:not-supports-[d:path('M0_0')]:-translate-y-[14px] dark:[transition-duration:var(--toggles-around--duration)]"
                  : toggled
                    ? "transition-[d,translate] [transition-duration:calc(var(--toggles-around--duration)_*_0.6)] [transition-timing-function:ease] [d:path('M-12_-14h42v30a1_1_0_00-16_13H0Z')] not-supports-[d:path('M0_0')]:-translate-x-[12px] not-supports-[d:path('M0_0')]:-translate-y-[14px] [transition-duration:var(--toggles-around--duration)]"
                    : "transition-[d,translate] [transition-duration:calc(var(--toggles-around--duration)_*_0.6)] [transition-timing-function:ease]"
              }
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipMainId})`}>
          <circle
            cx={16}
            cy={16}
            r={8.4}
            className={
              toggled === undefined
                ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] dark:[transform:scale(1.4)] dark:[transition:transform_var(--toggles-around--duration)_ease]"
                : toggled
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease] [transform:scale(1.4)] [transition:transform_var(--toggles-around--duration)_ease]"
                  : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.6)_ease]"
            }
          />
          <g>
            <circle
              cx={16}
              cy={3.3}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.253)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.253)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.253)]"
              }
            />
            <circle
              cx={27}
              cy={9.7}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.348)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.348)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.348)]"
              }
            />
            <circle
              cx={27}
              cy={22.3}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.443)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.443)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.443)]"
              }
            />
            <circle
              cx={16}
              cy={28.7}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.538)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.538)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.538)]"
              }
            />
            <circle
              cx={5}
              cy={22.3}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.633)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.633)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.633)]"
              }
            />
            <circle
              cx={5}
              cy={9.7}
              r={2.3}
              className={
                toggled === undefined
                  ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.728)] dark:[transform:scale(0)] dark:[transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                  : toggled
                    ? "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.728)] [transform:scale(0)] [transition:transform_calc(var(--toggles-around--duration)_*_0.4)_ease]"
                    : "[transform-origin:center] [transition:transform_calc(var(--toggles-around--duration)_*_0.2)_ease_calc(var(--toggles-around--duration)_*_0.728)]"
              }
            />
          </g>
        </g>
      </svg>
    </button>
  );
}
