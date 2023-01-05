import { BaseTogglePropsType, createCheckbox } from "../../utils";
import "../../../../dist/checkbox/eclipse.css";

export default (args: BaseTogglePropsType) =>
  createCheckbox({ ...args, name: "eclipse.svg" });
