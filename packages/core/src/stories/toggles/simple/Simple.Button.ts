import { createButton, BaseTogglePropsType } from "../../utils";
import "../../../../dist/base/simple.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "simple.svg" });
