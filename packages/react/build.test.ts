import { expect, test } from "bun:test";
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageDir = path.dirname(fileURLToPath(import.meta.url));

test("published entry resolves in Node without a TypeScript or JSX loader", () => {
  execFileSync(process.execPath, ["run", "build.ts"], { cwd: packageDir });

  const output = execFileSync(
    "node",
    [
      "--input-type=module",
      "-e",
      `import { createElement } from "react";
       import { renderToStaticMarkup } from "react-dom/server";
       import * as toggles from "@theme-toggles/react";
       for (const Toggle of Object.values(toggles)) {
         const markup = renderToStaticMarkup(createElement(Toggle));
         if (!markup.includes('<button') || !markup.includes('<svg')) {
           throw new Error('Toggle failed to render');
         }
       }
       console.log(Object.keys(toggles).length);`,
    ],
    { cwd: packageDir, encoding: "utf8" },
  );
  expect(Number(output.trim())).toBe(14);

  const distDir = path.join(packageDir, "dist");
  const files = readdirSync(distDir);
  expect(files.filter((file) => /(?<!\.d)\.tsx?$/.test(file))).toEqual([]);
  expect(files).toContain("index.d.ts");
  expect(files).toContain("styles.css");
  const classicStyles = readFileSync(
    path.join(distDir, "styles", "classic.css"),
    "utf8",
  );
  expect(classicStyles).toContain("@layer theme-toggles.theme");
  expect(classicStyles).toContain("@layer theme-toggles.utilities");
  expect(classicStyles).toContain("@layer theme-toggles.properties");
  expect(classicStyles).not.toMatch(
    /@layer (?:theme|utilities|properties)(?=[\s;{])/,
  );
  expect(readFileSync(path.join(distDir, "styles.css"), "utf8")).toContain(
    "@media (prefers-reduced-motion: no-preference)",
  );
  for (const file of files.filter(
    (file) => file.endsWith(".js") && file !== "index.js",
  )) {
    expect(readFileSync(path.join(distDir, file), "utf8")).toStartWith(
      '"use client";',
    );
    expect(files).toContain(file.replace(/\.js$/, ".d.ts"));
  }
}, 30_000);
