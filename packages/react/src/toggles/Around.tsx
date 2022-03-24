import "../../../../css/around.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgAround = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__around--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" fill="currentColor" className="theme-toggle__around" viewBox="0 0 32 32"><clipPath id="theme-toggle__around__cutout"><path d="M0 0h42v30a1 1 0 00-16 13H0Z" /></clipPath><g clipPath="url(#theme-toggle__around__cutout)"><circle cx={16} cy={16} r={8.4} /><g><circle cx={16} cy={3.3} r={2.3} /><circle cx={27} cy={9.7} r={2.3} /><circle cx={27} cy={22.3} r={2.3} /><circle cx={16} cy={28.7} r={2.3} /><circle cx={5} cy={22.3} r={2.3} /><circle cx={5} cy={9.7} r={2.3} /></g></g></svg>}
          </button>;
});
export default SvgAround;