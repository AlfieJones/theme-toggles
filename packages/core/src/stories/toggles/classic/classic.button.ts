import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/classic.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "classic.svg" });
