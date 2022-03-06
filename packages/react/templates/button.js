const template = (variables, { tpl }) => {
  return tpl`
  ${`import "../../../../build/${variables.componentName.replace("Svg", "").replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace("-", "")}-min.css"`};
  import React, { DetailedHTMLProps, Dispatch, SetStateAction, useState, forwardRef } from "react"

  export interface ToggleProps extends Omit<DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick"> {
      toggled?: boolean;
      toggle?: Dispatch<SetStateAction<boolean>>;
      reversed?: boolean;
      duration?: number;
      onToggle?: (toggled: boolean) => void;
  };
  
  const ${variables.componentName} = forwardRef<HTMLButtonElement, ToggleProps>(
    (props: ToggleProps, ref) => {
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

      const btnClass = \`\${reversed?"theme-toggle--reversed":"theme-toggle"} \${isToggled? "dark" : ""} \${className? className : ""}\`;
      const btnStyle = {...style, "${`--theme-toggle__${variables.componentName.replace("Svg", "").replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace("-", "")}--duration`}": \`\${duration}ms !important;\`};
      const handleClick = () => {
          const mToggled = !isToggled;
  
          toggleFunction(mToggled)
          onToggle && onToggle(mToggled);
      }
  
      return (
          <button ref={ref} className={btnClass} style={btnStyle} aria-label={ariaLabel} onClick={handleClick} {...rest}>
            {${variables.jsx}}
          </button>
      );
  }
);
   
  ${variables.exports};
  `
  }
  module.exports = template