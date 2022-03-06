import "../../../../build/lightbulb-min.css";
import React, { DetailedHTMLProps, Dispatch, SetStateAction, useState, forwardRef } from "react";
export interface ToggleProps extends Omit<DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick"> {
  toggled?: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  reversed?: boolean;
  duration?: number;
  onToggle?: (toggled: boolean) => void;
}
;
const SvgLightbulb = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration = 750,
    style,
    reversed = false,
    "aria-label": ariaLabel = "Toggle Theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `${reversed ? "theme-toggle--reversed" : "theme-toggle"} ${isToggled ? "dark" : ""} ${className ? className : ""}`;
  const btnStyle = { ...style,
    "--theme-toggle__lightbulb--duration": `${duration}ms !important;`
  };

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" className="theme-toggle__lightbulb" viewBox="0 0 381.3 369.5" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeWidth="9px" width="1em" height="1em"><path strokeWidth={0} d="M271 116a112 112 0 0 0-79-33c-62 0-112 51-112 113a113 113 0 0 0 27 74c9 10 25 33 31 54a5 5 0 1 0 10-1v-2c-7-22-24-47-33-58a103 103 0 0 1-25-67c0-58 45-103 102-103a99 99 0 0 1 72 30 103 103 0 0 1 4 140c-9 11-26 36-33 59v1a5 5 0 0 0 5 6 5 5 0 0 0 5-5c7-21 23-44 31-54a111 111 0 0 0 29-74 113 113 0 0 0-34-80Z" /><path d="M146 337h91m-91 15h91m-91 14h91" /><path className="theme-toggle__lightbulb__coil" fill="none" pathLength={1} d="m207 322 1-124c3-11 13-20 24-20 15-1 27 12 26 27 0 12-11 23-25 24h-86c-14-1-25-12-25-24-1-15 11-28 26-27 11 0 21 9 24 20l1 124" />{">\r\n  "}<g className="theme-toggle__lightbulb__rays"><path d="M190 66V5" pathLength={1} /><path d="m66 204-61 1" pathLength={1} /><path d="M93 110 49 66" pathLength={1} /><path d="m281 110 44-44" pathLength={1} /><path d="M316 206h60" pathLength={1} /></g></svg>}
          </button>;
});
export default SvgLightbulb;