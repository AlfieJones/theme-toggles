import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/inner-moon.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "inner-moon.svg" });
