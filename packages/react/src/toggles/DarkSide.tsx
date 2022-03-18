import "../../../../css/dark-side.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgDarkSide = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__dark-side--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="theme-toggle__dark-side" fill="currentColor" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512 256 256 0 0 0 0-512Zm0 464V48a208 208 0 0 1 0 416Z" /></svg>}
          </button>;
});
export default SvgDarkSide;