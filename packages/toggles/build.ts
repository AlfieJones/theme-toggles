import path from "node:path";
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { packageDirFromMeta } from "../generator/src/index";

const packageDir = packageDirFromMeta(import.meta.url);
const srcDir = path.join(packageDir, "src");
const distDir = path.join(packageDir, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of await readdir(srcDir)) {
  await cp(path.join(srcDir, entry), path.join(distDir, entry), {
    recursive: true,
    force: true,
  });
}
