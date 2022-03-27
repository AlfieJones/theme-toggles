const template = (variables, { tpl }) => {
  return tpl`
  ${`import "../../../../css/${variables.componentName
    .replace("Svg", "")
    .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
    .replace("-", "")}.min.css"`};
  import React, { useState, forwardRef } from "react";
  import { ToggleProps } from "../";
  
  const ${variables.componentName} = forwardRef<HTMLButtonElement, ToggleProps>(
    (props: ToggleProps, ref) => {
        const {
            onToggle,
            toggled,
            toggle,
            duration = 500,
            reversed = false,
            title = "Toggle theme",
            forceMotion = false,
            idPrefix = "",
            type = "button",
            style,
            "aria-label": ariaLabel = "Toggle theme",
            className,
            ...rest
        } = props;
      const [toggledInternal, toggleInternal] = useState(false);
  
      const toggleFunction = toggle || toggleInternal;
      const isToggled = toggled !== undefined ? toggled : toggledInternal;

      const btnClass = \`theme-toggle \${isToggled? "theme-toggle--toggled" : ""} \${forceMotion? "theme-toggle--force-motion" : ""} \${reversed? "theme-toggle--reversed" : ""} \${className? className : ""}\`.trim();
      const btnStyle = {...style, "${`--theme-toggle__${variables.componentName
        .replace("Svg", "")
        .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
        .replace("-", "")}--duration`}": \`\${duration}ms\`};
      const handleClick = () => {
          const mToggled = !isToggled;
  
          toggleFunction(mToggled);
          onToggle && onToggle(mToggled);
      }
  
      return (
          <button ref={ref} type={type} className={btnClass} style={btnStyle} aria-label={ariaLabel} title={title} onClick={handleClick} {...rest}>
            {${variables.jsx}}
          </button>
      );
  }
);
   
  ${variables.exports};
  `;
};
module.exports = template;
