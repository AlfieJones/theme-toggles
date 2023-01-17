import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/dark-inner.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "dark-inner.svg" });
