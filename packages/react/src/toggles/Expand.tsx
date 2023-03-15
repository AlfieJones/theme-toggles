import React, { Ref, MouseEventHandler } from "react";
import { forwardRefWithAs } from "../utils";
import { ToggleProps, ReactTag } from "../types";
const Expand = forwardRefWithAs(function Expand<
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
  style["--theme-toggle__expand--duration"] = `${duration}ms`;
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
          className="theme-toggle__expand"
          viewBox="0 0 24 24"
          {...props.svgProps}
        >
          <clipPath id={`${props.idPrefix || ""}a`}>
            <path d="M0-11h19A1 1 0 0 0 36 2v22H0Z" />
          </clipPath>
          <g clipPath={`url(#${props.idPrefix || ""}a)`}>
            <circle cx={12} cy={12} r={6.4} />
            <path d="M13.7 2.7c0 1-.7 1.8-1.7 1.8s-1.8-.8-1.8-1.8S11 1 12 1s1.7.7 1.7 1.7zm-3.5 19.5c0-1 .8-1.7 1.8-1.7s1.6.6 1.6 1.6-.7 1.8-1.7 1.8-1.8-.8-1.8-1.8zm11.5-8c-1 0-1.7-.7-1.7-1.7s.7-1.8 1.7-1.8 1.8.8 1.8 1.8-.9 1.6-1.9 1.6zM2.2 10.7c1 0 1.8.8 1.8 1.8s-.8 1.7-1.8 1.7-1.7-.7-1.7-1.7.7-1.8 1.7-1.8zm4.4-5.3c0 1-.8 1.7-1.7 1.7-1 0-1.8-.7-1.8-1.7s.8-1.8 1.8-1.8 1.7.8 1.7 1.8zm12.5 16c-1 0-1.8-.8-1.8-1.8s.8-1.7 1.8-1.7 1.7.7 1.7 1.7-.8 1.8-1.7 1.8zm1.8-16c0 1-.8 1.7-1.8 1.7s-1.8-.8-1.8-1.7c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8zm-16 12.4c1 0 1.7.8 1.7 1.8s-.7 1.7-1.7 1.7-1.8-.8-1.8-1.7c0-1 .8-1.8 1.8-1.8z" />
          </g>
        </svg>
      }
    </Component>
  );
});
export default Expand;
