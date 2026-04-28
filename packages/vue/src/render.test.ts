import { describe, expect, it } from "bun:test";
import { readFile } from "node:fs/promises";
import path from "node:path";

async function readComponent(fileName: string) {
  return readFile(path.join(import.meta.dir, `${fileName}.vue`), "utf8");
}

describe("@theme-toggles/vue", () => {
  it("renders the default button contract in the generated source", async () => {
    const source = await readComponent("Simple");

    expect(source).toContain("duration: 500");
    expect(source).toContain('type: "button"');
    expect(source).toContain('title: "Toggle theme"');
    expect(source).toContain('ariaLabel: "Toggle theme"');
    expect(source).toContain('aria-hidden="true"');
    expect(source).toContain(
      ":style=\"{ '--toggles-simple--duration': `${props.duration}ms` }\"",
    );
  });

  it("forwards attrs to the button element", async () => {
    const source = await readComponent("Within");

    expect(source).toContain("const attrs = useAttrs()");
    expect(source).toContain('v-bind="attrs"');
    expect(source).toContain(':type="props.type"');
    expect(source).toContain(':title="props.title"');
    expect(source).toContain(':aria-label="props.ariaLabel"');
  });

  it("generates scoped SVG ids for clipped toggles", async () => {
    const source = await readComponent("Simple");

    expect(source).toContain("const toggleId = `simple-${++nextId}`");
    expect(source).toContain(
      "const clipMainId = `toggles.dev-simple-main-${toggleId}`",
    );
    expect(source).toContain(':id="clipMainId"');
    expect(source).toContain(':clip-path="`url(#${clipMainId})`"');
  });
});
