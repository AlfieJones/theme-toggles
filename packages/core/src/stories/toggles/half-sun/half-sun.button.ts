import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/half-sun.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "half-sun.svg" });
