import clsx from "clsx";
import {
  type ButtonHTMLAttributes,
  type CSSProperties,
} from "react";
import { useToggleId } from "./internal";


export interface EclipseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  duration?: number;
}

export function Eclipse({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: EclipseProps) {

  const toggleId = useToggleId();


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
        style={{ "--toggles-eclipse--duration": `${duration}ms` } as CSSProperties}
      >
            <defs>
        <clipPath id={clipMainId}>
            <path d={"M0 0h64v32h-64zm36 16a1 1 0 0024 1 1 1 0 00-24-1"} className={clsx("origin-center", "toggles-dev--origin-center", "transition-[d,translate]", "toggles-dev--transition-[d,translate]", "[transition-duration:var(--toggles-eclipse--duration)]", "toggles-dev--[transition-duration:var(--toggles-eclipse--duration)]", "[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "[transition-delay:0s]", "toggles-dev--[transition-delay:0s]", "dark:[d:path('M-20_0h48v24h-48zm25_12a1_1_0_0014_0_1_1_0_00-14_0')]", "dark:toggles-dev--[d:path('M-20_0h48v24h-48zm25_12a1_1_0_0014_0_1_1_0_00-14_0')]", "dark:not-supports-[d:path('M0_0')]:-translate-x-[32px]", "dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-[32px]", "dark:[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)]", "dark:toggles-dev--[transition-duration:calc(var(--toggles-eclipse--duration)_*_0.8)]", "dark:[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]", "dark:toggles-dev--[transition-delay:calc(var(--toggles-eclipse--duration)_*_0.2)]")} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipMainId})`}>
        <circle cx={16} cy={16} r={16} className={clsx("[transform-origin:center]", "toggles-dev--[transform-origin:center]", "[transition-property:transform]", "toggles-dev--[transition-property:transform]", "[transition-duration:var(--toggles-eclipse--duration)]", "toggles-dev--[transition-duration:var(--toggles-eclipse--duration)]", "[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "toggles-dev--[transition-timing-function:cubic-bezier(0,0,0.05,1.15)]", "dark:[transform:scale(1.6)]", "dark:toggles-dev--[transform:scale(1.6)]")} />
      </g>
      </svg>
    </button>
  );
}
