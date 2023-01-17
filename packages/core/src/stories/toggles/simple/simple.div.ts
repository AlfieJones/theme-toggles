import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/simple.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "simple.svg" });
