import { BaseTogglePropsType, createDiv } from "../../utils";
import "../../../../dist/base/horizon.css";

export default (args: BaseTogglePropsType) =>
  createDiv({ ...args, name: "horizon.svg" });
