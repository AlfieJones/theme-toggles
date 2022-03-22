import "../../../../css/simple.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgSimple = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 500,
    reversed = false,
    title = "Toggle theme",
    style,
    "aria-label": ariaLabel = "Toggle theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `theme-toggle ${isToggled ? "theme-toggle--toggled" : ""} ${reversed ? "theme-toggle--reversed" : ""} ${className ? className : ""}`.trim();
  const btnStyle = { ...style,
    "--theme-toggle__simple--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" className="theme-toggle__simple" fill="currentColor" viewBox="0 0 32 32"><clipPath id="theme-toggle__simple__cutout"><path d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" /></clipPath><g clipPath="url(#theme-toggle__simple__cutout)"><circle cx={16} cy={16} r={15} /></g></svg>}
          </button>;
});
export default SvgSimple;