import path from "node:path";
import { toggles } from "../toggles/src/index";
import {
  packageDirFromMeta,
  renderReactSvg,
  writeFrameworkSources,
} from "../generator/src/index";

const packageDir = packageDirFromMeta(import.meta.url);

await writeFrameworkSources({
  packageDir,
  toggles,
  srcDir: path.join(packageDir, "src"),
  templatesDir: path.join(packageDir, "templates"),
  componentTemplate: "component.liquid",
  componentExtension: "tsx",
  indexTemplate: "index.liquid",
  renderSvg: renderReactSvg,
  prefixClasses: false,
});
