import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/classic.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "classic.svg" });
