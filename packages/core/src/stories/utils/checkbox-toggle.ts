import clsx from "clsx";
import { getSVG } from "./misc";
import { BaseToggleProps } from "./types";

const _createCheckbox = ({
  name,
  reversed,
  duration = 500,
  fontSize = "1rem",
  prefix = "",
}: BaseToggleProps) => {
  const label = document.createElement("label");
  const onClick = () => {
    // label.classList.toggle("theme-toggle--toggled");
  };
  label.role = "button";
  label.title = "Toggle theme";
  label.ariaLabel = "Toggle theme";
  label.style.setProperty(`--theme-toggle__${name}-duration`, `${duration}ms`);
  label.className = clsx("theme-toggle", reversed && "theme-toggle--reversed");
  label.style.setProperty("font-size", fontSize);
  label.style.setProperty("margin", "1rem");
  label.ariaLabel = "Toggle theme";

  label.addEventListener("click", onClick);

  const input = document.createElement("input");
  input.type = "checkbox";

  const span = document.createElement("span");
  span.className = "theme-toggle-sr";
  span.innerText = "Toggle theme";

  getSVG(name, prefix).then((data) => {
    label.innerHTML = data;

    label.insertBefore(input, label.firstChild);
    label.insertBefore(span, label.firstChild);
  });

  return label;
};

/**
 * Base Checkbox component
 * Fetches the SVG and adds it to the checkbox
 */
export const createCheckbox = (args: BaseToggleProps) => {
  const wrapper = document.createElement("div");
  wrapper.style.setProperty("display", "flex");
  wrapper.style.setProperty("align-items", "center");

  const lgBtn = _createCheckbox({ ...args, fontSize: "10rem", prefix: "lg" });
  const mdBtn = _createCheckbox({ ...args, fontSize: "5rem", prefix: "md" });
  const smBtn = _createCheckbox({ ...args, fontSize: "2rem", prefix: "sm" });
  const xsBtn = _createCheckbox({ ...args, fontSize: "1rem", prefix: "xs" });

  wrapper.appendChild(lgBtn);
  wrapper.appendChild(mdBtn);
  wrapper.appendChild(smBtn);
  wrapper.appendChild(xsBtn);

  return wrapper;
};
