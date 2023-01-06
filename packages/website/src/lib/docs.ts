import { readdirSync, statSync } from "fs";
import { join } from "path";

// Recursively get all the docs from a directory
// and return them as an array of objects
// eg [["about", "us"], ["home"]]
export function getDocs(dir: string): string[][] {
  const files = readdirSync(dir);
  const docs: string[][] = [];

  for (const file of files) {
    const filePath = join(dir, file);
    const isDirectory = statSync(filePath).isDirectory(),
      isMarkdown = file.endsWith(".mdx");

    if (isDirectory) {
      docs.push(...getDocs(filePath));
    } else if (isMarkdown) {
      docs.push(filePath.slice(0, -4).split(/[/\\]/));
    }
  }
  return docs;
}
