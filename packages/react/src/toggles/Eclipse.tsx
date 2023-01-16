import React, { useState, Ref } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const eclipse = forwardRefWithAs(function eclipse<
  TTag extends ReactTag = "button"
>(props: ToggleProps<TTag>, ref: Ref<Element>) {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 500,
    reversed = false,
    title = "Toggle theme",
    forceMotion = false,
    idPrefix = "",
    as: Component,
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
  rest.style["--theme-toggle__around--duration"] = `${duration}ms`;
  if (Component === "button" && !rest.type) (rest as any).type = "button";
  const handleClick = () => {
    toggle(!toggled);
    onToggle && onToggle(!toggled);
  };
  return (
    <Component
      ref={ref}
      className={classes}
      aria-label={ariaLabel}
      title={title}
      onClick={handleClick}
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
          className="theme-toggle__eclipse"
          viewBox="0 0 32 32"
          {...props}
        >
          <clipPath id="a">
            <path d="M0 0h64v32H0zm36 16a1 1 0 0 0 24 1 1 1 0 0 0-24-1" />
          </clipPath>
          <g clipPath="url(#a)">
            <circle cx={16} cy={16} r={16} />
          </g>
        </svg>
      }
    </Component>
  );
});
export default eclipse;
