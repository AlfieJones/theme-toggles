import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/around.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "around.svg" });
