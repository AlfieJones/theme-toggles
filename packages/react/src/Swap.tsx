import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  useId,

} from "react";

export interface SwapProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  duration?: number;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function Swap({
  duration = 500,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: SwapProps) {

  const toggleId = useId();


  const clipMainId = `toggles.dev-swap-main-${toggleId}`;


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
        style={{ "--toggles-swap--duration": `${duration}ms` } as CSSProperties}
      >
            <defs>
        <clipPath id={clipMainId}>
            <path d={"M0 0h24v19h-24Z"} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipMainId})`} stroke={"currentColor"} strokeLinecap={"round"}>
        <g className="transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0.4,0,1,1)] dark:translate-y-[14px]">
          <circle cx={12} cy={12} r={4.5} fill={"currentColor"} />
          <path d={"M12 1.4v2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"m20.3 3.7-2.5 2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"M22.6 12h-2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"M12 22.6v-2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"M1.4 12h2.4"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"m20.3 20.3-2.5-2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"m3.7 20.3 2.5-2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
          <path d={"m3.7 3.7 2.5 2.5"} fill={"none"} strokeWidth={2} strokeLinejoin={"round"} strokeMiterlimit={0} paintOrder={"stroke markers fill"} />
        </g>
      </g>
      <g clipPath={`url(#${clipMainId})`}>
        <g className="transition-transform duration-(--toggles-swap--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1)] dark:-translate-y-[14px]">
          <path d={"M9.8 21.5A5 5 0 1 1 9.8 30.5A4.5 4.5 0 0 0 9.8 21.5Z"} fill={"currentColor"} />
        </g>
      </g>
      <line x1={1} y1={19} x2={23} y2={19} stroke={"currentColor"} strokeWidth={1.5} strokeLinecap={"round"} />
      </svg>
    </button>
  );
}
