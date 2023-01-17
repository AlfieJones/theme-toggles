import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/classic.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "classic.svg" });
