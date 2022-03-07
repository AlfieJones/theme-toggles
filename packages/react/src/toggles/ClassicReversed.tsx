import "../../../../build/classic-reversed.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgClassicReversed = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 750,
    style,
    "aria-label": ariaLabel = "Toggle Theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `theme-toggle ${isToggled ? "theme-toggle--toggled" : ""} ${className ? className : ""}`.trim();
  const btnStyle = { ...style,
    "--theme-toggle__classic-reversed--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" fill="currentColor" className="theme-toggle__classic-reversed" viewBox="0 0 32 32" width="1em" height="1em"><mask id="theme-toggle__classic__cutout" color="#000"><rect width={32} height={32} fill="#fff" /><circle cx={30} cy={2} r={8} /></mask><mask id="theme-toggle__classic__inner" color="#000"><rect width={32} height={32} fill="#fff" /><circle cx={16} cy={16} r={9.34} /></mask><circle mask="url(#theme-toggle__classic__cutout)" fill="currentColor" cx={16} cy={16} r={9.34} /><g className="theme-toggle__classic__sun-rays" mask="url(#theme-toggle__classic__inner)"><line stroke="currentColor" x1={16} y1={5.5} x2={16} y2={1.5} /><line stroke="currentColor" x1={16} y1={30.5} x2={16} y2={26.5} /><line stroke="currentColor" x1={1.5} y1={16} x2={5.5} y2={16} /><line stroke="currentColor" x1={26.5} y1={16} x2={30.5} y2={16} /><line stroke="currentColor" x1={23.4} y1={8.6} x2={26.2} y2={5.8} /><line stroke="currentColor" x1={5.7} y1={26.3} x2={8.6} y2={23.4} /><line stroke="currentColor" x1={5.8} y1={5.8} x2={8.6} y2={8.6} /><line stroke="currentColor" x1={23.4} y1={23.4} x2={26.3} y2={26.3} /></g></svg>}
          </button>;
});
export default SvgClassicReversed;