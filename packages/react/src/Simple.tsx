import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface SimpleProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
}

export function Simple({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: SimpleProps) {
  const toggleId = useId();

  const clipMainId = `toggles.dev-simple-main-${toggleId}`;

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
          { "--toggles-simple--duration": `${duration}ms` } as CSSProperties
        }
      >
        <defs>
          <clipPath id={clipMainId}>
            <path
              d={"M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"}
              className="transition-[d,translate] duration-(--toggles-simple--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path('M-18-1h55v37h-55zm32_12a1_1_0_0025_0_1_1_0_00-25_0')] dark:not-supports-[d:path('M0_0')]:-translate-x-[19px] dark:not-supports-[d:path('M0_0')]:translate-y-[5px]"
            />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipMainId})`}>
          <circle cx={16} cy={16} r={15} />
        </g>
      </svg>
    </button>
  );
}
