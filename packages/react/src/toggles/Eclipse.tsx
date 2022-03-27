import "../../../../css/eclipse.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgEclipse = forwardRef<HTMLButtonElement, ToggleProps>(
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
      "--theme-toggle__eclipse--duration": `${duration}ms`,
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
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1em"
            height="1em"
            className="theme-toggle__eclipse"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <clipPath id={`${idPrefix}theme-toggle__eclipse__cutout`}>
              <path d="M0 0h64v32h-64zm36 16a1 1 0 0024 1 1 1 0 00-24-1" />
            </clipPath>
            <g clipPath="url(#theme-toggle__eclipse__cutout)">
              <circle cx={16} cy={16} r={16} />
            </g>
          </svg>
        }
      </button>
    );
  }
);
export default SvgEclipse;
