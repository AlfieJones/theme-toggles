import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/inner-moon.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "inner-moon.svg" });
