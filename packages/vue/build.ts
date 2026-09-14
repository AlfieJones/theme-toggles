import { format } from "prettier";
import { fileURLToPath } from "node:url";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import { execFileSync } from "node:child_process";
import path from "node:path";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { toggles } from "../toggles/src/index";
import {
  packageDirFromMeta,
  renderVueSvg,
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
    componentExtension: "vue",
    indexTemplate: "index.liquid",
    renderSvg: renderVueSvg,
    prefixClasses: true,
  });

  // Normalize HTML-encoded binding expressions before vue-tsc reads the templates.
  for (const file of await readdir(sourceDir)) {
    if (!file.endsWith(".vue")) continue;
    const filename = path.join(sourceDir, file);
    await writeFile(
      filename,
      await format(await readFile(filename, "utf8"), { parser: "vue" }),
    );
  }

  await writeFile(
    path.join(sourceDir, "tsconfig.json"),
    JSON.stringify({
      extends: path.join(packageDir, "tsconfig.json"),
      compilerOptions: {
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        noEmitOnError: true,
        outDir: distDir,
        rootDir: sourceDir,
      },
      include: ["./**/*"],
      exclude: [],
    }),
  );
  await build({
    configFile: false,
    root: packageDir,
    plugins: [vue()],
    build: {
      outDir: distDir,
      lib: {
        entry: path.join(sourceDir, "index.ts"),
        formats: ["es"],
        fileName: () => "index.js",
      },
      rollupOptions: { external: ["vue"] },
    },
  });
  execFileSync(
    "node",
    [
      fileURLToPath(import.meta.resolve("vue-tsc/bin/vue-tsc.js")),
      "--project",
      path.join(sourceDir, "tsconfig.json"),
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
