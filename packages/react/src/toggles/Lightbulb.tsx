import "../../../../css/lightbulb.min.css";
import React, { useState, forwardRef } from "react";
import { ToggleProps } from "../";
const SvgLightbulb = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
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
    "--theme-toggle__lightbulb--duration": `${duration}ms`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.3 364.2" width="1em" height="1em" className="theme-toggle__lightbulb" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeWidth={9}><path strokeWidth={0} d="M111.2 108.84a111.64 111.64 0 0 1 79.42-32.92h.38c61.79.18 112.08 50.82 112.08 112.89a112.71 112.71 0 0 1-27.86 74.25c-8.63 9.87-24.62 33.28-30.67 53.7a5.09 5.09 0 1 1-10.11-1.2l.24-1.33c6.63-22.35 23.69-47.4 32.91-57.92a102.64 102.64 0 0 0 25.3-67.54c0-57.38-44.78-102.49-102-102.68h-.27A99.17 99.17 0 0 0 119 116.03a102.88 102.88 0 0 0-4.78 140.26c9.21 10.52 26.28 35.56 33.11 58.88v.37a5.24 5.24 0 0 1-4.4 5.87h-.65a4.86 4.86 0 0 1-4.94-4.32c-6.17-20.8-22.16-44.21-30.8-54.08a110.85 110.85 0 0 1-28.37-74.23 112.58 112.58 0 0 1 33.03-79.94Z" /><path d="m236 330.8-90.7-.2" /><path d="m236 345.3-90.7-.3" /><path d="m236 359.7-90.7-.3" /><path pathLength={1} className="theme-toggle__lightbulb__coil" fill="none" d="m173.2 316.4-.9-123.5a26.5 26.5 0 0 0-23.8-20.8 26.2 26.2 0 0 0-26.3 27.2c.8 12.4 11.4 23 25 24.1l43.4.6 43.4-.5a26.8 26.8 0 0 0 25-24.2 26 26 0 0 0-26.3-27.2c-11 .5-21 8.9-23.8 20.8l-.9 123.5" /><g className="theme-toggle__lightbulb__rays"><path pathLength={1} d="m190.8 66.4-.3-61.9" /><path pathLength={1} d="m314.9 179.8 61.9.3" /><path pathLength={1} d="m271 97.7 43.9-43.6" /><path pathLength={1} d="M110.3 97.7 66.4 54.1" /><path pathLength={1} d="m66.4 179.9-61.9.3" /></g></svg>}
          </button>;
});
export default SvgLightbulb;