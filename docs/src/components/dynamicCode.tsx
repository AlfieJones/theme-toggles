import { ReactNode, useMemo } from "react";
import { Children, isValidElement } from "react";

interface DynamicCodeProps {
  replacements?: { [key: string]: string };
  children?: React.ReactNode;
}

function replaceText(el: ReactNode, key: string, value: string) {
  if (typeof el === "string") return el.replace(key, value);

  if (isValidElement(el)) 
    return {
      ...el,
      props: {
        ...el.props,
        children: Children.map(el.props.children, (child) =>
          replaceText(child, key, value)
        ),
      },
    };
  

  return el;
}

export default function DynamicCode({
  children,
  replacements,
}: DynamicCodeProps) {
  const replacedChildren = useMemo(() => {
    if (!replacements) {
      return children;
    }

    return Children.map(children, (child) =>
      Object.keys(replacements).reduce(
        (acc, key) => replaceText(acc, key, replacements[key]),
        child
      )
    );
  }, [children, replacements]);

  return <div>{replacedChildren}</div>;
}
