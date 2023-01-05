import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/dark-side.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "dark-side.svg" });
