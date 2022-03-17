import { DetailedHTMLProps, Dispatch, SetStateAction } from "react";

export * from "./toggles";

export interface ToggleProps extends Omit<DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onClick"> {
    toggled?: boolean;
    toggle?: Dispatch<SetStateAction<boolean>>;
    duration?: number;
    reversed?: boolean;
    onToggle?: (toggled: boolean) => void;
  };