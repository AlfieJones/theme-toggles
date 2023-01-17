import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/expand.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "expand.svg" });
