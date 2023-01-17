import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/dark-inner.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "dark-inner.svg" });
