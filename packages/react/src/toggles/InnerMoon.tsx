import "../../../../build/inner-moon.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgInnerMoon = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
  const btnClass = `theme-toggle ${isToggled ? "theme-toggle--toggled" : ""} ${reversed ? "theme--toggle--reversed" : ""} ${className ? className : ""}`.trim();
  const btnStyle = { ...style,
    "--theme-toggle__inner-moon--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" fill="currentColor" className="theme-toggle__inner-moon" viewBox="0 0 472.39 472.39" width="1em" height="1em"><g className="theme-toggle__inner-moon__toggle-outer"><path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" /></g><g className="theme-toggle__inner-moon__toggle-inner"><circle cx={236.2} cy={236.2} r={103.78} /></g></svg>}
          </button>;
});
export default SvgInnerMoon;