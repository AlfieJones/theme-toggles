import "../../../../css/half-sun.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgHalfSun = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__half-sun--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="theme-toggle__half-sun" height="1em" width="1em" viewBox="0 0 32 32" fill="currentColor"><path d="M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z" /></svg>}
          </button>;
});
export default SvgHalfSun;