import {
  Dispatch,
  ComponentType,
  SetStateAction,
  ComponentProps,
  MouseEventHandler,
  ReactNode,
} from "react";

export type ReactTag = keyof JSX.IntrinsicElements | ComponentType<any>;

export type ToggleProps<TTag extends ReactTag> = BaseToggleProps<TTag> &
  ComponentProps<TTag>;

export interface BaseToggleProps<TTag extends ReactTag>
  extends CoreHTMLProps<TTag> {
  toggled?: boolean;
  as?: TTag;
  onToggle?: (toggled: boolean) => void;
  duration?: number;
  reversed?: boolean;
  forceMotion?: boolean;
  idPrefix?: string;
  svgProps?: ComponentProps<"svg">;
}

interface CoreHTMLProps<TTag extends ReactTag> {
  onClick?: MouseEventHandler<TTag>;
  className?: string;
  title?: string;
  type?: string;
  children?: ReactNode;
  "aria-label"?: string;
}
