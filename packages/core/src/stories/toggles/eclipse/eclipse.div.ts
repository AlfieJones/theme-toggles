import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/eclipse.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "eclipse.svg" });
