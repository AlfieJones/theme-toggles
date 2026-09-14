import { expect, test } from "bun:test";
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageDir = path.dirname(fileURLToPath(import.meta.url));

test("published Vue entry renders in Node without a Vue or TypeScript loader", () => {
  execFileSync(process.execPath, ["run", "build.ts"], { cwd: packageDir });
  const output = execFileSync(
    "node",
    [
      "--input-type=module",
      "-e",
      `
    import { createSSRApp, h } from "vue";
    import { renderToString } from "vue/server-renderer";
    import * as toggles from "@theme-toggles/vue";
    for (const Toggle of Object.values(toggles)) {
      const markup = await renderToString(createSSRApp({ render: () => h(Toggle, { duration: 750, "data-test": "toggle" }) }));
      if (!markup.includes('<button') || !markup.includes('<svg') || !markup.includes('750ms') || !markup.includes('data-test="toggle"')) throw new Error('Toggle failed to render');
    }
    console.log(Object.keys(toggles).length);
  `,
    ],
    { cwd: packageDir, encoding: "utf8" },
  );
  expect(Number(output.trim())).toBe(14);
  const files = readdirSync(path.join(packageDir, "dist"));
  expect(
    files.filter((file) => file.endsWith(".vue") || /(?<!\.d)\.ts$/.test(file)),
  ).toEqual([]);
  expect(files).toContain("index.d.ts");
  expect(files.filter((file) => file.endsWith(".vue.d.ts"))).toHaveLength(14);
  expect(files).toContain("styles.css");
  expect(
    readFileSync(path.join(packageDir, "dist/index.d.ts"), "utf8"),
  ).toContain("Simple.vue");
}, 30_000);
