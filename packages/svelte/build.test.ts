import { expect, test } from "bun:test";
import { execFileSync } from "node:child_process";
import { mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { compile } from "svelte/compiler";
import { render } from "svelte/server";

const packageDir = path.dirname(fileURLToPath(import.meta.url));

test("published Svelte components compile for browser and server with declarations", async () => {
  execFileSync(process.execPath, ["run", "build.ts"], { cwd: packageDir });
  const distDir = path.join(packageDir, "dist");
  const files = await readdir(distDir);
  expect(files.filter((file) => /(?<!\.d)\.ts$/.test(file))).toEqual([]);
  expect(files).toContain("index.js");
  expect(files).toContain("index.d.ts");
  expect(files).toContain("styles.css");
  expect(await readFile(path.join(distDir, "styles.css"), "utf8")).toContain(
    "@media (prefers-reduced-motion: no-preference)",
  );
  const components = files.filter((file) => file.endsWith(".svelte"));
  expect(components).toHaveLength(14);
  const tempDir = await mkdtemp(path.join(packageDir, ".render-test-"));
  try {
    for (const file of components) {
      expect(files).toContain(`${file}.d.ts`);
      const source = await readFile(path.join(distDir, file), "utf8");
      compile(source, { filename: file, generate: "client" });
      const { js } = compile(source, { filename: file, generate: "server" });
      const compiledPath = path.join(tempDir, `${file}.js`);
      await writeFile(compiledPath, js.code);
      const { default: Toggle } = await import(
        pathToFileURL(compiledPath).href
      );
      const { body } = render(Toggle, {
        props: { duration: 750, "data-test": "toggle" },
      });
      expect(body).toContain("<button");
      expect(body).toContain("<svg");
      expect(body).toContain("750ms");
      expect(body).toContain('data-test="toggle"');
    }
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}, 30_000);
