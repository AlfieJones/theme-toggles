import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/half-sun.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "half-sun.svg" });
