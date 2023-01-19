import React, { Ref, MouseEventHandler } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const Simple = forwardRefWithAs(function Simple<
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
  style["--theme-toggle__around--duration"] = `${duration}ms`;
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
          fill="currentColor"
          aria-hidden="true"
          className="theme-toggle__simple"
          viewBox="0 0 32 32"
          {...props.svgProps}
        >
          <clipPath id={`${props.idPrefix || ""}a`}>
            <path d="M0-5h55v37H0zM32 7a1 1 0 0 0 25 0 1 1 0 0 0-25 0" />
          </clipPath>
          <g clipPath={`url(#${props.idPrefix || ""}a)`}>
            <circle cx={16} cy={16} r={15} />
          </g>
        </svg>
      }
    </Component>
  );
});
export default Simple;
