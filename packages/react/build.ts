import path from "node:path";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import ts from "typescript";
import { toggles } from "../toggles/src/index";
import {
  packageDirFromMeta,
  renderReactSvg,
  writeFrameworkSources,
  writeFrameworkStyles,
} from "../generator/src/index";

const packageDir = packageDirFromMeta(import.meta.url);
const distDir = path.join(packageDir, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

await writeFrameworkSources({
  packageDir: distDir,
  toggles,
  srcDir: distDir,
  templatesDir: path.join(packageDir, "templates"),
  componentTemplate: "component.liquid",
  componentExtension: "tsx",
  indexTemplate: "index.liquid",
  renderSvg: (toggle, options) =>
    renderReactSvg(toggle, { ...options, controlled: true }),
  prefixClasses: true,
});

const sources = (await readdir(distDir))
  .filter((file) => /\.tsx?$/.test(file))
  .map((file) => path.join(distDir, file));

for (const file of sources) {
  const source = await readFile(file, "utf8");
  await writeFile(
    file,
    file.endsWith(".tsx")
      ? `"use client";\n\n${source}`
      : source.replace(/from "\.\/([^".]+)"/g, 'from "./$1.js"'),
  );
}

const program = ts.createProgram(sources, {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  jsx: ts.JsxEmit.ReactJSX,
  declaration: true,
  strict: true,
  skipLibCheck: true,
  noEmitOnError: true,
});
const result = program.emit();
const diagnostics = [
  ...ts.getPreEmitDiagnostics(program),
  ...result.diagnostics,
];
if (diagnostics.length > 0) {
  throw new Error(
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => packageDir,
      getNewLine: () => "\n",
    }),
  );
}

await Promise.all(sources.map((file) => rm(file)));

await writeFrameworkStyles({
  packageDir: distDir,
  toggles,
  prefixClasses: true,
});
