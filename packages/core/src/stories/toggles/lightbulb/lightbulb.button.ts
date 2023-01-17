import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/lightbulb.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "lightbulb.svg" });
