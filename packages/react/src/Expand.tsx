import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface ExpandProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
}

export function Expand({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: ExpandProps) {
  const toggleId = useId();

  const clipMainId = `toggles.dev-expand-main-${toggleId}`;

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
          { "--toggles-expand--duration": `${duration}ms` } as CSSProperties
        }
      >
        <defs>
          <clipPath id={clipMainId}>
            <path
              d={"M0-11h25a1 1 0 0017 13v30H0Z"}
              className="transition-[d,translate] [transition-duration:calc(var(--toggles-expand--duration)_*_0.6)] [transition-timing-function:cubic-bezier(0,0,0.5,1)] [transition-delay:0s] dark:[d:path('M0_0h14A1_1_0_0027_12v12H0Z')] dark:not-supports-[d:path('M0_0')]:-translate-x-[5px] dark:not-supports-[d:path('M0_0')]:translate-y-[11px] dark:[transition-timing-function:cubic-bezier(0,0,0,1.25)] dark:[transition-delay:calc(var(--toggles-expand--duration)_*_0.4)]"
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipMainId})`}>
          <circle
            cx={16}
            cy={16}
            r={8.4}
            className="[transform-origin:center] [transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)_calc(var(--toggles-expand--duration)_*_0.35)] dark:[transform:scale(1.6)] dark:[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)]"
          />
          <path
            d={
              "M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"
            }
            className="[transform-origin:center] [transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)_calc(var(--toggles-expand--duration)_*_0.35)] dark:[transform:scale(0.75)] dark:[transition:transform_calc(var(--toggles-expand--duration)_*_0.65)_cubic-bezier(0,0,0,1.25)]"
          />
        </g>
      </svg>
    </button>
  );
}
