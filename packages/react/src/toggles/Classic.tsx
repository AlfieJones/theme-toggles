import React, { useState, Ref } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const classic = forwardRefWithAs(function classic<
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
          strokeLinecap="round"
          aria-hidden="true"
          className="theme-toggle__classic"
          viewBox="0 0 32 32"
          {...props}
        >
          <clipPath id="a">
            <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
          </clipPath>
          <g clipPath="url(#a)">
            <circle cx={16} cy={16} r={9.34} />
            <path
              stroke="currentColor"
              strokeWidth={1.5}
              d="M16 5.5v-4m0 29v-4M1.5 16h4m21 0h4m-7.1-7.4 2.8-2.8M5.7 26.3l2.9-2.9M5.8 5.8l2.8 2.8m14.8 14.8 2.9 2"
            />
          </g>
        </svg>
      }
    </Component>
  );
});
export default classic;
