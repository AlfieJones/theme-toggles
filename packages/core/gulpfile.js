import dartSass from "sass";
import gulpSass from "gulp-sass";
import gulp from "gulp";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import fs from "fs";

const sass = gulpSass(dartSass);

const files = fs
  .readdirSync("./src/toggles")
  .map((file) => file.replace(".scss", ""));

const variants = fs
  .readdirSync("./src/variants")
  .map((file) => file.replace(".scss", ""));

const buildBase = (src, variant, toggle) =>
  src
    .pipe(concat(`${toggle}.scss`))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(`./dist/${variant}/`))
    .pipe(autoprefixer())
    .pipe(cleanCss({ level: 0 }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(`./dist/${variant}/`));

const build = (variant, toggle) => () =>
  buildBase(
    gulp.src([
      `./src/variants/${variant}.scss`,
      "./src/global/shared.scss",
      `./src/toggles/${toggle}.scss`,
    ]),
    variant,
    toggle
  );

const buildBundle = (variant) => () =>
  buildBase(
    gulp.src(
      [
        files.map((file) => `./src/toggles/${file}.scss`),
        `./src/variants/${variant}.scss`,
        "./src/global/shared.scss",
      ].flat()
    ),
    variant,
    "bundle"
  );

export async function dev() {
  return gulp.watch(
    "src/**/*.scss",
    { ignoreInitial: false },
    gulp.parallel(
      ...variants.flatMap((variant) => [
        files.flatMap((toggle) => build(variant, toggle)),
        buildBundle(variant),
      ])
    )
  );
}

export default gulp.parallel(
  ...variants.flatMap((variant) => [
    files.flatMap((toggle) => build(variant, toggle)),
    buildBundle(variant),
  ])
);
