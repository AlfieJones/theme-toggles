import "../../../../css/lightbulb.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgLightbulb = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 500,
    reversed = false,
    title = "Toggle theme",
    forceMotion = false,
    idPrefix = "",
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
    "--theme-toggle__lightbulb--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="1em" height="1em" className="theme-toggle__lightbulb" strokeWidth={0.7} stroke="currentColor" fill="currentColor" strokeLinecap="round" viewBox="0 0 32 32"><path strokeWidth={0} d="M9.4 9.9c1.8-1.8 4.1-2.7 6.6-2.7 5.1 0 9.3 4.2 9.3 9.3 0 2.3-.8 4.4-2.3 6.1-.7.8-2 2.8-2.5 4.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5v-.1c.5-1.8 2-3.9 2.7-4.8 1.4-1.5 2.1-3.5 2.1-5.6 0-4.7-3.7-8.5-8.4-8.5-2.3 0-4.4.9-5.9 2.5-1.6 1.6-2.5 3.7-2.5 6 0 2.1.7 4 2.1 5.6.8.9 2.2 2.9 2.7 4.9 0 .2-.1.5-.4.5h-.1c-.2 0-.4-.1-.4-.4-.5-1.7-1.8-3.7-2.5-4.5-1.5-1.7-2.3-3.9-2.3-6.1 0-2.3 1-4.7 2.7-6.5z" /><path d="M19.8 28.3h-7.6" /><path d="M19.8 29.5h-7.6" /><path d="M19.8 30.7h-7.6" /><path pathLength={1} className="theme-toggle__lightbulb__coil" fill="none" d="M14.6 27.1c0-3.4 0-6.8-.1-10.2-.2-1-1.1-1.7-2-1.7-1.2-.1-2.3 1-2.2 2.3.1 1 .9 1.9 2.1 2h7.2c1.1-.1 2-1 2.1-2 .1-1.2-1-2.3-2.2-2.3-.9 0-1.7.7-2 1.7 0 3.4 0 6.8-.1 10.2" /><g className="theme-toggle__lightbulb__rays"><path pathLength={1} d="M16 6.4V1.3" /><path pathLength={1} d="M26.3 15.8h5.1" /><path pathLength={1} d="m22.6 9 3.7-3.6" /><path pathLength={1} d="M9.4 9 5.7 5.4" /><path pathLength={1} d="M5.7 15.8H.6" /></g></svg>}
          </button>;
});
export default SvgLightbulb;