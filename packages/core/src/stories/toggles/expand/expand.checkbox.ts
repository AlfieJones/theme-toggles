import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/expand.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "expand.svg" });
