import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/lightbulb.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "lightbulb.svg" });
