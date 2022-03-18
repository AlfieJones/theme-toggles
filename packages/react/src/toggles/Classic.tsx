import "../../../../css/classic.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgClassic = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__classic--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" strokeLinecap="round" className="theme-toggle__classic" viewBox="0 0 32 32"><mask id="theme-toggle__classic__cutout" color="#000"><path fill="#fff" d="M0 0h32v32H0z" /><circle cx={34} cy={2} r={8} /></mask><circle cx={16} cy={16} r={9.34} mask="url(#theme-toggle__classic__cutout)" /><g stroke="currentColor" className="theme-toggle__classic__sun-rays" mask="url(#theme-toggle__classic__cutout)"><path d="M16 5.5v-4" /><path d="M16 30.5v-4" /><path d="M1.5 16h4" /><path d="M26.5 16h4" /><path d="m23.4 8.6 2.8-2.8" /><path d="m5.7 26.3 2.9-2.9" /><path d="m5.8 5.8 2.8 2.8" /><path d="m23.4 23.4 2.9 2.9" /></g></svg>}
          </button>;
});
export default SvgClassic;