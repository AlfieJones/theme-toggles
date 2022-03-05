import "../../../../build/dark-side-min.css";
import React, { DetailedHTMLProps, Dispatch, SetStateAction, useState, forwardRef } from "react";
export interface ToggleProps extends Omit<DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick"> {
  toggled?: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  reversed?: boolean;
  duration?: number;
  onToggle?: (toggled: boolean) => void;
}
;
const SvgDarkSide = forwardRef<HTMLButtonElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    onToggle,
    toggled,
    toggle,
    duration,
    reversed = false,
    "aria-label": ariaLabel = "Toggle Theme",
    className,
    ...rest
  } = props;
  const [toggledInternal, toggleInternal] = useState(false);
  const toggleFunction = toggle || toggleInternal;
  const isToggled = toggled !== undefined ? toggled : toggledInternal;
  const btnClass = `${reversed ? "theme-toggle--reversed" : "theme-toggle"} ${isToggled && "dark"}  ${className}`;

  const handleClick = () => {
    const mToggled = !isToggled;
    toggleFunction(mToggled);
    onToggle && onToggle(mToggled);
  };

  return <button ref={ref} className={btnClass} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {<svg xmlns="http://www.w3.org/2000/svg" className="theme-toggle__dark-side" fill="currentColor" viewBox="0 0 512 512" width="1em" height="1em"><path d="M256 0a256 256 0 1 0 0 512 256 256 0 0 0 0-512Zm0 464V48a208 208 0 0 1 0 416Z" /></svg>}
          </button>;
});
export default SvgDarkSide;