import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { toggles } from "../toggles/src/index";
import {
  packageDirFromMeta,
  renderSvelteSvg,
  writeFrameworkSources,
  writeFrameworkStyles,
} from "../generator/src/index";

const packageDir = packageDirFromMeta(import.meta.url);
const distDir = path.join(packageDir, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

const sourceDir = await mkdtemp(path.join(packageDir, ".package-build-"));
try {
  await writeFrameworkSources({
    packageDir: sourceDir,
    toggles,
    srcDir: sourceDir,
    templatesDir: path.join(packageDir, "templates"),
    componentTemplate: "component.liquid",
    componentExtension: "svelte",
    indexTemplate: "index.liquid",
    renderSvg: renderSvelteSvg,
    prefixClasses: true,
  });

  execFileSync(
    "node",
    [
      fileURLToPath(
        new URL(
          "svelte-package.js",
          import.meta.resolve("@sveltejs/package/package.json"),
        ),
      ),
      "--input",
      sourceDir,
      "--output",
      distDir,
      "--tsconfig",
      path.join(packageDir, "tsconfig.build.json"),
    ],
    { cwd: packageDir, stdio: "inherit" },
  );
} finally {
  await rm(sourceDir, { recursive: true, force: true });
}

await writeFrameworkStyles({
  packageDir: distDir,
  toggles,
  prefixClasses: true,
});
