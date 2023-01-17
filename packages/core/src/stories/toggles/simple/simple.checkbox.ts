import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/simple.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "simple.svg" });
