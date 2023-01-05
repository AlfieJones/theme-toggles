import clsx from "clsx";
import { getSVG } from "./misc";
import { BaseToggleProps } from "./types";

const _createButton = ({
  name,
  reversed,
  duration = 500,
  fontSize = "1rem",
  prefix = "",
}: BaseToggleProps) => {
  const btn = document.createElement("button");
  const onClick = () => {
    btn.classList.toggle("theme-toggle--toggled");
  };
  btn.type = "button";
  btn.title = "Toggle theme";
  btn.ariaLabel = "Toggle theme";
  btn.style.setProperty(`--theme-toggle__${name}-duration`, `${duration}ms`);
  btn.className = clsx("theme-toggle", reversed && "theme-toggle--reversed");
  btn.style.setProperty("font-size", fontSize);
  btn.style.setProperty("margin", "1rem");

  btn.addEventListener("click", onClick);

  getSVG(name, prefix).then((data) => {
    btn.innerHTML = data;
  });

  return btn;
};

/**
 * Base Button component
 * Fetches the SVG and adds it to the button
 */
export function createButton(args: BaseToggleProps) {
  const wrapper = document.createElement("div");
  wrapper.style.setProperty("display", "flex");

  const lgBtn = _createButton({ ...args, fontSize: "10rem", prefix: "lg" });
  const mdBtn = _createButton({ ...args, fontSize: "5rem", prefix: "md" });
  const smBtn = _createButton({ ...args, fontSize: "2rem", prefix: "sm" });
  const xsBtn = _createButton({ ...args, fontSize: "1rem", prefix: "xs" });

  wrapper.appendChild(lgBtn);
  wrapper.appendChild(mdBtn);
  wrapper.appendChild(smBtn);
  wrapper.appendChild(xsBtn);

  return wrapper;
}
