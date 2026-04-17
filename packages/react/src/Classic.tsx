import clsx from "clsx";
import {
  type ButtonHTMLAttributes,
  type CSSProperties,
} from "react";
import { useToggleId } from "./internal";


export interface ClassicProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  duration?: number;
}

export function Classic({
  duration = 400,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: ClassicProps) {

  const toggleId = useToggleId();


  const clipMainId = `toggles.dev-classic-main-${toggleId}`;


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
        style={{ "--toggles-dot-dev--duration": `${duration}ms` } as CSSProperties}
      >
            <defs>
        <clipPath id={clipMainId}>
            <path d={"M0 0h25a1 1 0 0010 10v14H0Z"} className={clsx("transition-[d,translate]", "toggles-dev--transition-[d,translate]", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "dark:delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:[d:path('M0_2h13a1_1_0_0010_10v14H0Z')]", "dark:toggles-dev--[d:path('M0_2h13a1_1_0_0010_10v14H0Z')]", "dark:not-supports-[d:path('M0_0')]:-translate-x-3.25", "dark:toggles-dev--not-supports-[d:path('M0_0')]:-translate-x-3.25", "dark:not-supports-[d:path('M0_0')]:translate-y-0.5", "dark:toggles-dev--not-supports-[d:path('M0_0')]:translate-y-0.5")} />
        </clipPath>
      </defs>
      <g stroke={"currentColor"} strokeLinecap={"round"}>
        <circle cx={12} cy={12} r={5} fill={"currentColor"} clipPath={`url(#${clipMainId})`} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "dark:scale-170", "dark:toggles-dev--scale-170")} />
        <path d={"M12 1.4v2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"m20.3 3.7-2.5 2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"M22.6 12h-2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"M12 22.6v-2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"M1.4 12h2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"m20.3 20.3-2.5-2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"m3.7 20.3 2.5-2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
        <path d={"m3.7 3.7 2.5 2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} className={clsx("origin-center", "toggles-dev--origin-center", "transition", "toggles-dev--transition", "duration-(--toggles-dot-dev--duration)", "toggles-dev--duration-(--toggles-dot-dev--duration)", "delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "toggles-dev--delay-[calc(var(--toggles-dot-dev--duration)*0.15)]", "dark:delay-0", "dark:toggles-dev--delay-0", "dark:scale-50", "dark:toggles-dev--scale-50", "dark:rotate-45", "dark:toggles-dev--rotate-45", "dark:opacity-0", "dark:toggles-dev--opacity-0")} />
      </g>
      </svg>
    </button>
  );
}
