import { HTMLProps } from "react";

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "onClick"> {
    open?: boolean;
    duration?: number;
    onToggle?: (toggled: boolean) => void;
}