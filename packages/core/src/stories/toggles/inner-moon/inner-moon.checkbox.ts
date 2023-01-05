import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/inner-moon.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "inner-moon.svg" });
