import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/horizon.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "horizon.svg" });
