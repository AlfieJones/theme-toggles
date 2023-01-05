import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/horizon.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "horizon.svg" });
