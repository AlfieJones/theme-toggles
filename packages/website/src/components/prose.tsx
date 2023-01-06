import clsx from "clsx";

export function Prose({ as: Component = "div", className, ...props }: any) {
  return (
    <Component
      className={clsx(className, "prose dark:prose-invert")}
      {...props}
    />
  );
}
