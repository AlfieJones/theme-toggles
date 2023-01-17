export interface BaseToggleProps {
  /**
   * Name of the toggle
   */
  name: `${string}.svg`;
  /**
   * size of the svg, 1rem equates to a height and width of 1rem
   * @defaultValue "1rem"
   */
  size?: string;
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

export type BaseTogglePropsType = Omit<
  BaseToggleProps,
  "name" | "fontSize" | "prefix"
>;
