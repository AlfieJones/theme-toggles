export interface BaseToggleProps {
  /**
   * Name of the toggle
   */
  name: `${string}.svg`;
  /**
   * fontSize of the svg
   * @defaultValue "1rem"
   */
  fontSize?: string;
  /**
   * Id prefix
   * @defaultValue ""
   */
  prefix?: string;
  /**
   * Should the toggle be reversed?
   * @defaultValue false
   */
  reversed?: boolean;
  /**
   * Duration of the animation
   * @defaultValue 500
   */
  duration?: number;
}

export type BaseTogglePropsType = Omit<BaseToggleProps, "name" | "fontSize" | "prefix">;
