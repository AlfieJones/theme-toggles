import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/dark-side.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "dark-side.svg" });
