import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/dark-side.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "dark-side.svg" });
