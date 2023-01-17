import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/expand.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "expand.svg" });
