import { rimraf } from "rimraf";
import gulp from "gulp";
import fs from "fs";
import { format } from "prettier";
import Toggles from "./toggles.config.mjs";
import Handlebars from "handlebars";
import { kebabCase } from "lodash-es";
import path from "path";

export async function readSVG(name) {
  const data = fs.readFileSync(
    path.join(
      process.cwd(),
      "../packages/core/assets/svgs",
      `${kebabCase(name)}.svg`
    ),
    "utf8"
  );
  console.log(data);
  return data;
}

async function cleanDir() {
  await rimraf(["./src/pages/docs/toggle"]);
  return ["./src/pages/docs/toggle"].forEach((dir) => fs.mkdirSync(dir));
}

async function generateStories() {
  const templateFile = fs.readFileSync("./templates/toggle.hbs", "utf8");
  const template = Handlebars.compile(templateFile);

  const toggles = Object.keys(Toggles);

  toggles.map(async (toggle) => {
    const name = Toggles[toggle].name;
    const svg = await readSVG(name);
    const story = template({ name, svg });

    fs.writeFileSync(`./src/pages/docs/toggle/${name}.mdx`, story);
  });
}

const buildToggles = gulp.series(cleanDir, generateStories);
export default buildToggles;
