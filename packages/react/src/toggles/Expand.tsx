import "../../../../css/expand.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgExpand = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 500,
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
    "--theme-toggle__expand--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" fill="currentColor" className="theme-toggle__expand" viewBox="0 0 32 32"><clipPath id="theme-toggle__expand__cutout"><path d="M0-11h25a1 1 0 0017 13v30H0Z" /></clipPath><g clipPath="url(#theme-toggle__expand__cutout)"><circle cx={16} cy={16} r={8.5} /><path d="M18.34 3.15a2.34 2.34 0 1 1-4.67 0 2.34 2.34 0 0 1 4.67 0zm-4.68 25.7a2.34 2.34 0 1 1 4.68 0 2.34 2.34 0 1 1-4.68 0zm15.19-10.51a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 1 1 0 4.68zm-25.7-4.68a2.34 2.34 0 1 1 0 4.67 2.34 2.34 0 0 1 0-4.67zm5.84-7a2.34 2.34 0 1 1-4.67 0 2.34 2.34 0 0 1 4.67 0zm16.35 21.02a2.34 2.34 0 1 1 0-4.68c1.3 0 2.34 1.04 2.34 2.34s-1.04 2.34-2.34 2.34zm2.34-21.02a2.34 2.34 0 1 1-4.68 0c0-1.3 1.04-2.34 2.34-2.34s2.34 1.04 2.34 2.34zM6.66 23.01a2.34 2.34 0 1 1 0 4.68c-1.3 0-2.34-1.04-2.34-2.34s1.04-2.34 2.34-2.34z" /></g></svg>}
          </button>;
});
export default SvgExpand;