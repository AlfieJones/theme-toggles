import { readSVG } from "./utils";
import { format } from "prettier";

export async function HTMLButton(name: string) {
  const svg = await readSVG(name);
  return format(
    `<button
    class="theme-toggle"
    type="button"
    title="Toggle theme"
    aria-label="Toggle theme"
    >${svg}
    </button>`,
    { parser: "html" }
  );
}

export async function HTMLCheckbox(name: string) {
  const svg = await readSVG(name);
  return format(
    `<label class="theme-toggle" title="Toggle theme">
      <input type="checkbox" />
      <span class="theme-toggle-sr">Toggle theme</span>${svg}
    </label>`,
    { parser: "html" }
  );
}
