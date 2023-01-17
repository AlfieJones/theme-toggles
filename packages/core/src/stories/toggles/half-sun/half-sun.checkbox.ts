import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/half-sun.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "half-sun.svg" });
