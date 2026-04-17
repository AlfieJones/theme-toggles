import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { Liquid } from "liquidjs";
import { compile } from "tailwindcss";
import type {
  ClipPathDefinition,
  TemplateToggle,
  ToggleDefinition,
  ToggleNode,
} from "../../toggles/src/types";
import {
  clipVarName,
  collectNodeClasses,
  prefixCompiledCss,
} from "./utils";

export { renderReactSvg, renderSvelteSvg } from "./render";

export function packageDirFromMeta(metaUrl: string): string {
  return path.dirname(fileURLToPath(metaUrl));
}

export interface WriteFrameworkPackageOptions {
  packageDir: string;
  toggles: ToggleDefinition[];
  srcDir: string;
  templatesDir: string;
  componentTemplate: string;
  componentExtension: string;
  indexTemplate: string;
  renderSvg: (toggle: ToggleDefinition) => string;
}

async function ensureDir(directory: string) {
  await mkdir(directory, { recursive: true });
}

const TAILWIND_INPUT = `
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@custom-variant dark (&:where(.dark, .dark *):not(:where(.light, .light *)));
`;

async function loadTailwindStylesheet(id: string, base?: string) {
  const resolved = id.startsWith("tailwindcss/")
    ? import.meta.resolve(id)
    : new URL(id, base ?? import.meta.url).href;

  return {
    base: resolved,
    content: await readFile(new URL(resolved), "utf8"),
  };
}

function collectToggleCandidates(toggle: ToggleDefinition): string[] {
  const candidates = new Set<string>();

  const visitNode = (node: ToggleNode | ClipPathDefinition) => {
    for (const className of collectNodeClasses(node)) {
      candidates.add(className);
    }

    if ("children" in node) {
      for (const child of node.children) {
        visitNode(child);
      }
    }
  };

  for (const clipPath of toggle.clipPaths ?? []) {
    visitNode(clipPath);
  }

  for (const node of toggle.content) {
    visitNode(node);
  }

  return [...candidates].sort();
}

function toTemplateToggle(toggle: ToggleDefinition): TemplateToggle {
  return {
    ...toggle,
    clips: (toggle.clipPaths ?? []).map((clip) => ({
      id: clip.id,
      varName: clipVarName(clip.id),
    })),
  };
}

async function renderTemplate(
  templatesDir: string,
  templateName: string,
  payload: object,
) {
  const engine = new Liquid({
    root: templatesDir,
    extname: ".liquid",
  });
  const template = await readFile(
    path.join(templatesDir, templateName),
    "utf8",
  );

  return engine.parseAndRender(template, payload);
}

export async function writeFrameworkPackage({
  packageDir,
  toggles,
  srcDir,
  templatesDir,
  componentTemplate,
  componentExtension,
  indexTemplate,
  renderSvg,
}: WriteFrameworkPackageOptions) {
  await ensureDir(srcDir);
  await ensureDir(path.join(packageDir, "styles"));

  const tailwind = await compile(TAILWIND_INPUT, {
    from: import.meta.url,
    loadStylesheet: loadTailwindStylesheet,
  });
  const allCandidates = new Set<string>();

  for (const toggle of toggles) {
    const contents = await renderTemplate(templatesDir, componentTemplate, {
      ...toTemplateToggle(toggle),
      svg: renderSvg(toggle),
    });

    await writeFile(
      path.join(srcDir, `${toggle.name}.${componentExtension}`),
      `${contents.trim()}\n`,
    );

    const candidates = collectToggleCandidates(toggle);
    for (const candidate of candidates) {
      allCandidates.add(candidate);
    }

    await writeFile(
      path.join(packageDir, "styles", `${toggle.slug}.css`),
      `${prefixCompiledCss(tailwind.build(candidates), candidates)}\n`,
    );
  }

  const indexContents = await renderTemplate(templatesDir, indexTemplate, {
    toggles,
  });
  await writeFile(path.join(srcDir, "index.ts"), `${indexContents.trim()}\n`);
  await writeFile(
    path.join(packageDir, "styles.css"),
    `${prefixCompiledCss(
      tailwind.build([...allCandidates].sort()),
      [...allCandidates],
    )}\n`,
  );
}
