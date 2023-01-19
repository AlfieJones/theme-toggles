import { rimraf } from "rimraf";
import gulp from "gulp";
import { optimize } from "svgo";
import { transform as svgr } from "@svgr/core";
import { format } from "prettier";
import fs from "fs";
import { camelCase, upperFirst } from "lodash-es";
import esbuild from "esbuild";
import template from "./templates/toggle.js";
import Handlebars from "handlebars";

async function cleanDir() {
  await rimraf(["./dist", "./src/toggles", "./src/stories/toggles"]);
  return ["./src/toggles", "./src/stories/toggles"].forEach((dir) =>
    fs.mkdirSync(dir)
  );
}

async function Transform(svg, componentName, path) {
  const { data } = optimize(svg, {
    path,
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: { overrides: { collapseGroups: false } },
      },
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
      expandProps: false,

      jsx: {
        babelConfig: {
          plugins: [
            ["./plugins/dynamic-id.cjs", { prefix: true }],
            [
              "@svgr/babel-plugin-add-jsx-attribute",
              {
                elements: ["svg"],
                attributes: [
                  {
                    name: "props.svgProps",
                    spread: true,
                    position: "end",
                  },
                ],
              },
            ],
          ],
        },
      },
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
      const componentName = upperFirst(camelCase(toggle.replace(".svg", "")));
      return Transform(svg, componentName, path);
    }),
    generateExports(toggles),
    generateStories(toggles),
  ]);
}

async function generateExports(toggles) {
  let exportString = "";
  toggles.map((toggle) => {
    const componentName = upperFirst(camelCase(toggle.replace(".svg", "")));
    exportString += `export { default as ${componentName} } from "./toggles/${componentName}";\n`;
  });
  fs.writeFileSync(`./src/index.ts`, exportString);
}

async function generateStories(toggles) {
  const templateFile = fs.readFileSync("./templates/story.hbs", "utf8");
  const template = Handlebars.compile(templateFile);

  Handlebars.registerHelper("camelCase", (name) => camelCase(name));
  Handlebars.registerHelper("titleCase", (name) => upperFirst(camelCase(name)));

  toggles.map((toggle) => {
    const name = upperFirst(camelCase(toggle.replace(".svg", "")));
    const story = format(template({ name }), { parser: "babel-ts" });

    fs.writeFileSync(`./src/stories/toggles/${name}.stories.tsx`, story);
  });
}

async function copyCSS() {
  return gulp.src("../core/dist/base/*").pipe(gulp.dest("./css"));
}

async function esBuild() {
  const toggles = await fs.readdirSync("./src/toggles");

  return esbuild.build({
    entryPoints: [
      "./src/index.ts",
      ...toggles.map((toggle) => `./src/toggles/${toggle}`),
      "./src/utils.ts",
    ],
    bundle: false,
    minify: true,
    format: "esm",
    outdir: "./dist",
    platform: "browser",
    plugins: [],
  });
}

const buildToggles = gulp.series(
  cleanDir,
  gulp.parallel(compileToggles, copyCSS),
  esBuild
);
export default buildToggles;
