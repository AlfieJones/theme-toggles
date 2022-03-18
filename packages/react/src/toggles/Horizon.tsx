import "../../../../css/horizon.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgHorizon = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 750,
    reversed = false,
    style,
    "aria-label": ariaLabel = "Toggle Theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `theme-toggle ${isToggled ? "theme-toggle--toggled" : ""} ${reversed ? "theme-toggle--reversed" : ""} ${className ? className : ""}`.trim();
  const btnStyle = { ...style,
    "--theme-toggle__horizon--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" className="theme-toggle__horizon" fill="currentColor" width="1em" height="1em" viewBox="0 0 576 512"><mask id="theme-toggle__horizon__mask"><path fill="#fff" d="M0 0h576v455H0z" /></mask><path d="M551 473H24c-13 0-24 9-24 19 0 11 11 19 24 19h527c13 0 24-8 24-19 1-10-10-19-24-19z" /><g mask="url(#theme-toggle__horizon__mask)"><path className="theme-toggle__horizon__sun" d="M288 129c-56 0-101 45-101 101s44 102 101 102 100-46 100-101-44-102-100-102zm217 181-54-79 54-79c6-8 1-19-8-20l-94-17-17-94c-2-9-12-14-20-8l-78 55-79-55c-8-5-19-1-21 9l-16 94-94 16c-9 2-14 13-8 20l54 79-54 78c-6 8-1 19 8 21l94 17 17 93c2 10 12 14 20 9l79-54 78 54c8 5 19 1 20-8l17-94 94-17c9-2 14-13 8-20zm-217 43c-71 0-127-55-127-122 0-68 57-122 127-122s126 55 126 122c0 68-56 122-126 122z" /></g></svg>}
          </button>;
});
export default SvgHorizon;