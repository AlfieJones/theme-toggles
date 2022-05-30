import "../../../../css/react/expand.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgExpand = forwardRef<HTMLButtonElement, ToggleProps>(
  (props: ToggleProps, ref) => {
    const {
      onToggle,
      toggled,
      toggle,
      duration = 500,
      reversed = false,
      title = "Toggle theme",
      forceMotion = false,
      idPrefix = "",
      type = "button",
      style,
      "aria-label": ariaLabel = "Toggle theme",
      className,
      children,
      ...rest
    } = props;
    const [toggledInternal, toggleInternal] = useState(false);
    const toggleFunction = toggle || toggleInternal;
    const isToggled = toggled !== undefined ? toggled : toggledInternal;
    const btnClass = `theme-toggle ${
      isToggled ? "theme-toggle--toggled" : ""
    } ${forceMotion ? "theme-toggle--force-motion" : ""} ${
      reversed ? "theme-toggle--reversed" : ""
    } ${className ? className : ""}`.trim();
    const btnStyle = {
      ...style,
      "--theme-toggle__expand--duration": `${duration}ms`,
    };

    const handleClick = () => {
      const mToggled = !isToggled;
      toggleFunction(mToggled);
      onToggle && onToggle(mToggled);
    };

    return (
      <button
        ref={ref}
        type={type}
        className={btnClass}
        style={btnStyle}
        aria-label={ariaLabel}
        title={title}
        onClick={handleClick}
        {...rest}
      >
        {children}
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1em"
            height="1em"
            fill="currentColor"
            className="theme-toggle__expand"
            viewBox="0 0 32 32"
          >
            <clipPath id={`${idPrefix}theme-toggle__expand__cutout`}>
              <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
            </clipPath>
            <g clipPath={`url(#${idPrefix}theme-toggle__expand__cutout)`}>
              <circle cx={16} cy={16} r={8.4} />
              <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
            </g>
          </svg>
        }
      </button>
    );
  }
);
export default SvgExpand;
