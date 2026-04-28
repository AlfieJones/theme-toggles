import { type ButtonHTMLAttributes, type CSSProperties, useId } from "react";

export interface LightSwitchProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  duration?: number;
  [key: `data-${string}`]: string | number | boolean | null | undefined;
}

export function LightSwitch({
  duration = 350,
  className,
  type = "button",
  title = "Toggle theme",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: LightSwitchProps) {
  const toggleId = useId();

  const clipPaddleId = `toggles.dev-light-switch-paddle-${toggleId}`;

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
        style={
          {
            "--toggles-light-switch--duration": `${duration}ms`,
          } as CSSProperties
        }
      >
        <defs>
          <clipPath id={clipPaddleId}>
            <path
              d={"M7 3h10v9H7Z"}
              className="transition-[d,translate] duration-(--toggles-light-switch--duration) [transition-timing-function:cubic-bezier(0,0,0.15,1.25)] dark:[d:path('M7_12h10v9H7Z')] dark:not-supports-[d:path('M0_0')]:translate-y-[9px]"
            />
          </clipPath>
        </defs>
        <rect
          x={5}
          y={1}
          width={14}
          height={22}
          rx={2}
          stroke={"currentColor"}
          fill={"none"}
          strokeWidth={1.5}
        />
        <rect
          x={7}
          y={3}
          width={10}
          height={18}
          rx={1}
          stroke={"currentColor"}
          fill={"none"}
          strokeWidth={1}
        />
        <rect
          x={8}
          y={4}
          width={8}
          height={16}
          rx={0.5}
          fill={"currentColor"}
          clipPath={`url(#${clipPaddleId})`}
        />
      </svg>
    </button>
  );
}
