import "../../../../build/expand.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgExpand = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__expand--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="theme-toggle__expand" viewBox="0 0 416 416" width="1em" height="1em"><mask id="theme-toggle__expand__cutout" color="#000"><rect width={416} height={416} fill="#fff" /><circle cx={535} cy={150} r={125} /></mask><g mask="url(#theme-toggle__expand__cutout)"><circle cx={208} cy={208} r={115} /><path d="M240 32a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm-64 352a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm208-144a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM32 176a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm80-96a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm224 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm32-288a32 32 0 1 1-32-32 32 32 0 0 1 32 32ZM80 304a32 32 0 1 1-32 32 32 32 0 0 1 32-32Z" /></g></svg>}
          </button>;
});
export default SvgExpand;