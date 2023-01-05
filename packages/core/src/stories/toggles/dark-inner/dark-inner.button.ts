import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/dark-inner.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "dark-inner.svg" });
