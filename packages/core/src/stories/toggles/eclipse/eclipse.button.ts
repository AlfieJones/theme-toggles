import { BaseTogglePropsType, createButton } from "../../utils";
import "../../../../dist/base/eclipse.css";

export default (args: BaseTogglePropsType) =>
  createButton({ ...args, name: "eclipse.svg" });
