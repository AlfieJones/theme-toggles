import {
  clipVarName,
  collectNodeClasses,
  isClipRef,
  prefixTailwindCandidate,
  serializeLiteral,
  toSvgAttr,
} from "./utils";
import type {
  AttributeValue,
  ClipPathDefinition,
  ToggleDefinition,
  ToggleNode,
} from "../../toggles/src/types";

type Framework = "react" | "svelte" | "vue";
type LiteralValue = string | number | boolean;
interface RenderClassOptions {
  prefixClasses?: boolean;
}

function escapeVueBinding(value: string): string {
  return value.replaceAll('"', "&quot;");
}

function isLiteralValue(value: AttributeValue): value is LiteralValue {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

function renderReactAttr(name: string, value: AttributeValue): string {
  if (isClipRef(value)) {
    return `${name}={\`url(#\${${clipVarName(value._clip)}})\`}`;
  }

  if (!isLiteralValue(value)) {
    throw new TypeError(`Unsupported SVG attribute value for ${name}`);
  }

  if (value === true) {
    return name;
  }

  return `${name}={${serializeLiteral(value)}}`;
}

function renderSvelteAttr(name: string, value: AttributeValue): string {
  const attrName = toSvgAttr(name);

  if (isClipRef(value)) {
    return `${attrName}={\`url(#\${${clipVarName(value._clip)}})\`}`;
  }

  if (!isLiteralValue(value)) {
    throw new TypeError(`Unsupported SVG attribute value for ${name}`);
  }

  if (value === true) {
    return attrName;
  }

  return `${attrName}={${serializeLiteral(value)}}`;
}

function renderVueAttr(name: string, value: AttributeValue): string {
  const attrName = toSvgAttr(name);

  if (isClipRef(value)) {
    return `:${attrName}="\`url(#\${${clipVarName(value._clip)}})\`"`;
  }

  if (!isLiteralValue(value)) {
    throw new TypeError(`Unsupported SVG attribute value for ${name}`);
  }

  if (value === true) {
    return attrName;
  }

  return `:${attrName}="${escapeVueBinding(serializeLiteral(value))}"`;
}

function renderAttrs(
  node: ToggleNode | ClipPathDefinition,
  framework: Framework,
  options: RenderClassOptions = {},
): string[] {
  const attrs: string[] = [];
  const classTokens = collectNodeClasses(node);
  const nodeAttrs = "attrs" in node ? node.attrs : undefined;

  for (const [name, value] of Object.entries(nodeAttrs ?? {}) as [
    string,
    AttributeValue,
  ][]) {
    attrs.push(
      framework === "react"
        ? renderReactAttr(name, value)
        : framework === "svelte"
          ? renderSvelteAttr(name, value)
          : renderVueAttr(name, value),
    );
  }

  if (classTokens.length > 0) {
    const renderedClassTokens = options.prefixClasses
      ? [...new Set(classTokens.map((token) => prefixTailwindCandidate(token)))]
      : classTokens;
    const classValue = renderedClassTokens.join(" ");
    attrs.push(
      framework === "react"
        ? `className=${serializeLiteral(classValue)}`
        : framework === "svelte"
          ? `class={${serializeLiteral(classValue)}}`
          : `:class="${escapeVueBinding(serializeLiteral(classValue))}"`,
    );
  }

  return attrs;
}

function indent(level: number): string {
  return "  ".repeat(level);
}

function renderNode(
  node: ToggleNode,
  framework: Framework,
  options: RenderClassOptions = {},
  level = 0,
): string {
  const attrs = renderAttrs(node, framework, options);
  const openTag = attrs.length
    ? `<${node.tag} ${attrs.join(" ")}>`
    : `<${node.tag}>`;

  if (!node.children?.length) {
    if (openTag.endsWith(">")) {
      return `${indent(level)}${openTag.replace(/>$/, " />")}`;
    }
  }

  const children = (node.children ?? [])
    .map((child) => renderNode(child, framework, options, level + 1))
    .join("\n");

  return `${indent(level)}${openTag}\n${children}\n${indent(level)}</${node.tag}>`;
}

function renderDefs(
  toggle: ToggleDefinition,
  framework: Framework,
  level: number,
  options: RenderClassOptions = {},
): string {
  if (!toggle.clipPaths?.length) {
    return "";
  }

  const blocks = toggle.clipPaths.map((clipPath) => {
    const attrs =
      framework === "react"
        ? [`id={${clipVarName(clipPath.id)}}`]
        : framework === "svelte"
          ? [`id={${clipVarName(clipPath.id)}}`]
          : [`:id="${clipVarName(clipPath.id)}"`];
    const classTokens = collectNodeClasses(clipPath);

    if (classTokens.length > 0) {
      const renderedClassTokens = options.prefixClasses
        ? [
            ...new Set(
              classTokens.map((token) => prefixTailwindCandidate(token)),
            ),
          ]
        : classTokens;
      const classValue = renderedClassTokens.join(" ");
      attrs.push(
        framework === "react"
          ? `className=${serializeLiteral(classValue)}`
          : framework === "svelte"
            ? `class={${serializeLiteral(classValue)}}`
            : `:class="${escapeVueBinding(serializeLiteral(classValue))}"`,
      );
    }

    const children = clipPath.children
      .map((child) => renderNode(child, framework, options, level + 3))
      .join("\n");

    return `${indent(level + 1)}<clipPath ${attrs.join(" ")}>\n${children}\n${indent(level + 1)}</clipPath>`;
  });

  return `${indent(level)}<defs>\n${blocks.join("\n")}\n${indent(level)}</defs>`;
}

export function renderReactSvg(
  toggle: ToggleDefinition,
  options: RenderClassOptions = {},
): string {
  const svgAttrs = Object.entries(toggle.svgAttrs ?? {})
    .map(([name, value]) => `${name}={${serializeLiteral(value)}}`)
    .join(" ");
  const defs = renderDefs(toggle, "react", 3, options);
  const content = toggle.content
    .map((node) => renderNode(node, "react", options, 3))
    .join("\n");
  const inner = [defs, content].filter(Boolean).join("\n");

  return [
    "<svg",
    `  width="1em"`,
    `  height="1em"`,
    `  viewBox="${toggle.viewBox}"`,
    `  aria-hidden="true"`,
    svgAttrs ? `  ${svgAttrs}` : "",
    `  style={{ "${toggle.cssVar}": \`\${duration}ms\` } as CSSProperties}`,
    ">",
    inner,
    "</svg>",
  ]
    .filter(Boolean)
    .map((line, index) => (index === 0 ? line : `      ${line}`))
    .join("\n");
}

export function renderSvelteSvg(
  toggle: ToggleDefinition,
  options: RenderClassOptions = {},
): string {
  const svgAttrs = Object.entries(toggle.svgAttrs ?? {})
    .map(([name, value]) => `${toSvgAttr(name)}={${serializeLiteral(value)}}`)
    .join(" ");
  const defs = renderDefs(toggle, "svelte", 2, options);
  const content = toggle.content
    .map((node) => renderNode(node, "svelte", options, 2))
    .join("\n");
  const inner = [defs, content].filter(Boolean).join("\n");

  return [
    "<svg",
    `  width="1em"`,
    `  height="1em"`,
    `  viewBox="${toggle.viewBox}"`,
    `  aria-hidden="true"`,
    svgAttrs ? `  ${svgAttrs}` : "",
    `  style={\`--${toggle.cssVar.slice(2)}: \${duration}ms\`}`,
    ">",
    inner,
    "</svg>",
  ]
    .filter(Boolean)
    .join("\n");
}

export function renderVueSvg(
  toggle: ToggleDefinition,
  options: RenderClassOptions = {},
): string {
  const svgAttrs = Object.entries(toggle.svgAttrs ?? {})
    .map(
      ([name, value]) =>
        `:${toSvgAttr(name)}="${escapeVueBinding(serializeLiteral(value))}"`,
    )
    .join(" ");
  const defs = renderDefs(toggle, "vue", 2, options);
  const content = toggle.content
    .map((node) => renderNode(node, "vue", options, 2))
    .join("\n");
  const inner = [defs, content].filter(Boolean).join("\n");

  return [
    "<svg",
    `  width="1em"`,
    `  height="1em"`,
    `  viewBox="${toggle.viewBox}"`,
    `  aria-hidden="true"`,
    svgAttrs ? `  ${svgAttrs}` : "",
    `  :style="{ &quot;${toggle.cssVar}&quot;: \`\${props.duration}ms\` }"`,
    ">",
    inner,
    "</svg>",
  ]
    .filter(Boolean)
    .join("\n");
}
