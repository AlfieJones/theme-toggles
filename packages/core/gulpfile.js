import dartSass from "sass";
import gulpSass from "gulp-sass";
import gulp from "gulp";
import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import fs from "fs";

const sass = gulpSass(dartSass);

const files = fs
  .readdirSync("./src/toggles")
  .map((file) => file.replace(".scss", ""));

const variants = fs
  .readdirSync("./src/variants")
  .map((file) => file.replace(".scss", ""));

const build = (variant, toggle) => () =>
  gulp
    .src([
      `./src/variants/${variant}.scss`,
      "./src/global/shared.scss",
      `./src/toggles/${toggle}.scss`,
    ])
    .pipe(concat(`${toggle}.scss`))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(`./dist/${variant}/`))
    .pipe(cleanCss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(`./dist/${variant}/`));

export const buildSass = gulp.parallel(
  ...variants.flatMap((variant) =>
    files.flatMap((toggle) => build(variant, toggle))
  )
);
