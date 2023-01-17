import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/around.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "around.svg" });
