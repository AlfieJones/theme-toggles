import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/around.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "around.svg" });
