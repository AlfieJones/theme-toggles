import "../../../../css/inner-moon.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgInnerMoon = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 500,
    reversed = false,
    title = "Toggle theme",
    forceMotion = false,
    style,
    "aria-label": ariaLabel = "Toggle theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `theme-toggle ${isToggled ? "theme-toggle--toggled" : ""} ${forceMotion ? "theme-toggle--force-motion" : ""} ${reversed ? "theme-toggle--reversed" : ""} ${className ? className : ""}`.trim();
  const btnStyle = { ...style,
    "--theme-toggle__inner-moon--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" fill="currentColor" className="theme-toggle__inner-moon" viewBox="0 0 32 32"><path d="M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4a9.39 9.39 0 1 1 0-18.8 9.39 9.39 0 1 1 0 18.8z" /><circle cx={16} cy={16} r={8.1} /></svg>}
          </button>;
});
export default SvgInnerMoon;