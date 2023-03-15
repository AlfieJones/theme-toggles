import React, { Ref, MouseEventHandler } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const Classic = forwardRefWithAs(function Classic<
  TTag extends ReactTag = "button"
>(props: ToggleProps<TTag>, ref: Ref<Element>) {
  const {
    onToggle,
    toggled,
    duration = 500,
    reversed = false,
    title = "Toggle theme",
    forceMotion = false,
    onClick,
    style = {},
    idPrefix = "",
    as: Component = "button",
    "aria-label": ariaLabel = "Toggle theme",
    className,
    children,
    svgProps,
    ...rest
  } = props;
  const classes = [
    "theme-toggle",
    toggled !== undefined && toggled ? "theme-toggle--toggled" : undefined,
    toggled !== undefined && !toggled ? "theme-toggle--untoggled" : undefined,
    forceMotion ? "theme-toggle--force-motion" : undefined,
    reversed ? "theme-toggle--reversed" : undefined,
    className,
  ].join(" ");
  style["--theme-toggle__classic--duration"] = `${duration}ms`;
  if (Component === "button" && !rest.type) (rest as any).type = "button";
  const handleClick: MouseEventHandler<TTag> = (e) => {
    onToggle && onToggle(!toggled);
    onClick && onClick(e);
  };
  return (
    <Component
      ref={ref}
      className={classes}
      aria-label={ariaLabel}
      title={title}
      onClick={handleClick}
      style={style}
      {...rest}
    >
      {children}
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          className="theme-toggle__classic"
          viewBox="0 0 24 24"
          {...props.svgProps}
        >
          <clipPath id={`${props.idPrefix || ""}a`}>
            <path d="M0 0h25a1 1 0 0 0 10 10v14H0Z" />
          </clipPath>
          <g
            stroke="currentColor"
            strokeLinecap="round"
            clipPath={`url(#${props.idPrefix || ""}a)`}
          >
            <circle cx={12} cy={12} r={5} />
            <path
              fill="none"
              strokeLinejoin="round"
              strokeMiterlimit={0}
              strokeWidth={2}
              d="M12 1.4v2.4m8.3-.1-2.5 2.5m4.8 5.8h-2.4M12 22.6v-2.4M1.4 12h2.4m16.5 8.3-2.5-2.5M3.7 20.3l2.5-2.5M3.7 3.7l2.5 2.5"
              paintOrder="stroke markers fill"
            />
          </g>
        </svg>
      }
    </Component>
  );
});
export default Classic;
