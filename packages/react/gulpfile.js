import { rimraf } from "rimraf";
import gulp from "gulp";
import { optimize } from "svgo";
import { transform as svgr } from "@svgr/core";
import { format } from "prettier";
import fs from "fs";
import { camelCase } from "lodash-es";
import template from "./templates/toggle.js";

async function cleanDir() {
  await rimraf(["./dist", "./src/toggles"]);
  return fs.mkdirSync("./src/toggles");
}

async function Transform(svg, componentName, path) {
  const { data } = optimize(svg, {
    path,
    multipass: true,
    plugins: [
      "preset-default",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ fill: "currentColor" }, { "aria-hidden": true }],
        },
      },
    ],
  });

  const component = await svgr(
    data,
    {
      typescript: true,
      template,
    },
    { componentName }
  );

  fs.writeFileSync(
    `./src/toggles/${componentName}.tsx`,
    format(component, { parser: "babel-ts" })
  );
}

async function compileToggles() {
  const toggles = await fs.readdirSync("../core/assets/svgs");

  await Promise.all([
    ...toggles.map((toggle) => {
      const path = `../core/assets/svgs/${toggle}`;
      const svg = fs.readFileSync(path, "utf8");
      const componentName = camelCase(toggle.replace(".svg", ""));
      return Transform(svg, componentName, path);
    }),
    generateExports(toggles),
  ]);
}

async function generateExports(toggles) {
  let exportString = "";
  toggles.map((toggle) => {
    const componentName = camelCase(toggle.replace(".svg", ""));
    exportString += `export { default as ${componentName} } from "./toggles/${componentName}";\n`;
  });
  fs.writeFileSync(`./src/index.ts`, exportString);
}

const buildToggles = gulp.series(cleanDir, compileToggles);
export default buildToggles;
