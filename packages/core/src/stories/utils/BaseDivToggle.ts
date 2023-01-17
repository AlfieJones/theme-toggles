import clsx from "clsx";
import { getSVG } from "./misc";
import { BaseToggleProps } from "./types";

const _createDiv = ({
  name,
  reversed,
  duration = 500,
  size = "1rem",
  prefix = "",
}: BaseToggleProps) => {
  const div = document.createElement("div");
  const onClick = () => {
    div.classList.toggle("theme-toggle--toggled");
  };
  div.role = "button";
  div.title = "Toggle theme";
  div.ariaLabel = "Toggle theme";
  div.style.setProperty(`--theme-toggle__${name}-duration`, `${duration}ms`);
  div.className = clsx("theme-toggle", reversed && "theme-toggle--reversed");
  div.style.setProperty("width", size);
  div.style.setProperty("height", size);
  div.style.setProperty("margin", "1rem");
  div.ariaLabel = "Toggle theme";

  div.addEventListener("click", onClick);

  getSVG(name, prefix).then((data) => {
    div.innerHTML = data;
  });

  return div;
};

/**
 * Base Div component
 * Fetches the SVG and adds it to the div
 */
export const createDiv = (args: BaseToggleProps) => {
  const wrapper = document.createElement("div");
  wrapper.style.setProperty("display", "flex");
  wrapper.style.setProperty("align-items", "center");

  const xsBtn = _createDiv({ ...args, size: "1rem", prefix: "xs" });
  const smBtn = _createDiv({ ...args, size: "2rem", prefix: "sm" });
  const mdBtn = _createDiv({ ...args, size: "5rem", prefix: "md" });
  const lgBtn = _createDiv({ ...args, size: "10rem", prefix: "lg" });

  wrapper.appendChild(lgBtn);
  wrapper.appendChild(mdBtn);
  wrapper.appendChild(smBtn);
  wrapper.appendChild(xsBtn);

  return wrapper;
};
