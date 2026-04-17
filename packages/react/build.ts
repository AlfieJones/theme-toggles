import path from "node:path";
import { mkdir, rm } from "node:fs/promises";
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
  renderSvg: renderReactSvg,
  prefixClasses: true,
});

await writeFrameworkStyles({
  packageDir: distDir,
  toggles,
  prefixClasses: true,
});
