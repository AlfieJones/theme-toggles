import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface EclipseProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function Eclipse({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: EclipseProps) {
  const toggleId = useId();

  const clipMainId = `toggles.dev-eclipse-main-${toggleId}`;

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
          { "--toggles-eclipse--duration": `${duration}ms` } as CSSProperties
        }
      >
        <defs>
          <clipPath id={clipMainId}>
            <path
              d={"M0 0h64v32h-64zm38 16a1 1 0 0020 0 1 1 0 00-20 0"}
              className="origin-center transition-[d,translate] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)] [transition-delay:0s] dark:[d:path('M-16_-16h64v64h-64zm22_32a1_1_0_0020_0_1_1_0_00-20_0')] dark:not-supports-[d:path('M0_0')]:-translate-x-[32px] dark:[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)] dark:[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]"
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipMainId})`}>
          <circle
            cx={16}
            cy={16}
            r={16}
            className="[transform-origin:center] [transition-property:transform] [transition-duration:var(--toggles-eclipse--duration)] [transition-timing-function:cubic-bezier(0,0,0.05,1.15)]"
          />
        </g>
      </svg>
    </button>
  );
}
