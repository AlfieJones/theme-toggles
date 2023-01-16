import React, { useState, Ref } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const darkSide = forwardRefWithAs(function darkSide<
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
          className="theme-toggle__dark-side"
          viewBox="0 0 32 32"
          {...props}
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
        </svg>
      }
    </Component>
  );
});
export default darkSide;
