import {
  Dispatch,
  JSXElementConstructor,
  SetStateAction,
  ComponentProps,
} from "react";

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type ToggleProps<TTag extends ReactTag> = BaseToggleProps<TTag> &
  ComponentProps<TTag>;

export interface BaseToggleProps<TTag extends ReactTag> {
  toggled?: boolean;
  as?: TTag;
  toggle?: Dispatch<SetStateAction<boolean>>;
  duration?: number;
  reversed?: boolean;
  forceMotion?: boolean;
  idPrefix?: string;
}
