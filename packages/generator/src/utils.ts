import type { ClipRef, ToggleNode } from "../../toggles/src/types";

const NPM_TAILWIND_PREFIX = "toggles-dev--";

export function isClipRef(value: unknown): value is ClipRef {
  return typeof value === "object" && value !== null && "_clip" in value;
}

export function clipVarName(id: string): string {
  return `clip${id.charAt(0).toUpperCase()}${id.slice(1)}Id`;
}

export function toSvgAttr(name: string): string {
  const map: Record<string, string> = {
    clipPath: "clip-path",
    strokeWidth: "stroke-width",
    strokeLinecap: "stroke-linecap",
    strokeLinejoin: "stroke-linejoin",
    strokeMiterlimit: "stroke-miterlimit",
    paintOrder: "paint-order",
    fillRule: "fill-rule",
    clipRule: "clip-rule",
    pathLength: "pathLength",
  };

  return map[name] ?? name;
}

export function splitClasses(value: string): string[] {
  return value.split(/\s+/).filter(Boolean);
}

export function toDarkClasses(value: string): string[] {
  return splitClasses(value).map((token) => `dark:${token}`);
}

export function collectNodeClasses(node: Pick<ToggleNode, "cls">): string[] {
  const classes: string[] = [];

  if (node.cls?.className) {
    classes.push(...splitClasses(node.cls.className));
  }

  if (node.cls?.darkClassName) {
    classes.push(...toDarkClasses(node.cls.darkClassName));
  }

  return [...new Set(classes)];
}

function findUtilityStart(value: string): number {
  let bracketDepth = 0;
  let parenDepth = 0;
  let quote: string | null = null;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const prev = index > 0 ? value[index - 1] : "";

    if (quote) {
      if (char === quote && prev !== "\\") {
        quote = null;
      }
      continue;
    }

    if ((char === '"' || char === "'") && prev !== "\\") {
      quote = char;
      continue;
    }

    if (char === "[") {
      bracketDepth += 1;
      continue;
    }

    if (char === "]") {
      bracketDepth = Math.max(0, bracketDepth - 1);
      continue;
    }

    if (char === "(") {
      parenDepth += 1;
      continue;
    }

    if (char === ")") {
      parenDepth = Math.max(0, parenDepth - 1);
      continue;
    }

    if (char === ":" && bracketDepth === 0 && parenDepth === 0) {
      return index + 1;
    }
  }

  return 0;
}

export function prefixTailwindCandidate(value: string): string {
  const utilityStart = findUtilityStart(value);
  return `${value.slice(0, utilityStart)}${NPM_TAILWIND_PREFIX}${value.slice(utilityStart)}`;
}

export function escapeCssClassSelector(value: string): string {
  let escaped = "";

  for (const char of value) {
    if (/^[a-zA-Z0-9_-]$/.test(char)) {
      escaped += char;
      continue;
    }

    escaped += `\\${char}`;
  }

  return escaped;
}

export function prefixCompiledCss(
  css: string,
  candidates: string[],
): string {
  let prefixedCss = css;

  for (const candidate of [...new Set(candidates)].sort(
    (left, right) => right.length - left.length,
  )) {
    const escapedOriginal = escapeCssClassSelector(candidate);
    const escapedPrefixed = escapeCssClassSelector(
      prefixTailwindCandidate(candidate),
    );

    prefixedCss = prefixedCss.replaceAll(
      `.${escapedOriginal}`,
      `.${escapedPrefixed}`,
    );
  }

  return prefixedCss;
}

export function serializeLiteral(value: string | number | boolean): string {
  if (typeof value === "number") {
    return String(value);
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return JSON.stringify(value);
}
