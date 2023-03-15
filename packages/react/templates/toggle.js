const template = ({ componentName, jsx, exports }, { tpl }) => {
  return tpl`
    import React, { Ref, MouseEventHandler } from "react";
    import { forwardRefWithAs } from "../utils";
    import { ToggleProps, ReactTag } from "../types";
    
    const ${componentName} = forwardRefWithAs(function ${componentName}<TTag extends ReactTag = "button">(props: ToggleProps<TTag>, ref: Ref<Element>) {
          const {
              onToggle,
              toggled,
              duration = 500,
              reversed = false,
              title = "Toggle theme",
              forceMotion = false,
              onClick,
              style = {},
              idPrefix = "",
              as: Component = "button",
              "aria-label": ariaLabel = "Toggle theme",
              className,
              children,
              svgProps,
              ...rest
          } = props;  
              
          const classes = [
            "theme-toggle",
            toggled !== undefined && toggled ? "theme-toggle--toggled" : undefined,
            toggled !== undefined && !toggled ? "theme-toggle--untoggled" : undefined,
            forceMotion ? "theme-toggle--force-motion" : undefined,
            reversed ? "theme-toggle--reversed" : undefined,
            className,
          ].join(" ");

        style["${`--theme-toggle__${componentName
          .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
          .replace("-", "")}--duration`}"] = \`\${duration}ms\`;

        if (Component === "button" && !rest.type) (rest as any).type = "button";

        const handleClick: MouseEventHandler<TTag> = (e) => {
          onToggle && onToggle(!toggled);
          onClick && onClick(e);
        };
    
        return (
            <Component ref={ref} className={classes} aria-label={ariaLabel} title={title} onClick={handleClick} style={style} {...rest}>
              {children}
              {${jsx}}
            </Component>
        );
    }
  );
     
    ${exports};
    `;
};
export default template;
