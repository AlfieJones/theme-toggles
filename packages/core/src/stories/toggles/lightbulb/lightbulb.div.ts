import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/lightbulb.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "lightbulb.svg" });
