import { describe, expect, it } from "bun:test";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { compile } from "svelte/compiler";
import { render } from "svelte/server";

async function loadServerComponent(fileName: string) {
  const sourcePath = path.join(import.meta.dir, `${fileName}.svelte`);
  const source = await readFile(sourcePath, "utf8");
  const { js } = compile(source, {
    filename: sourcePath,
    generate: "server",
  });
  const svelteServerUrl = import.meta.resolve("svelte/internal/server");
  const rewrittenCode = js.code
    .replaceAll("'svelte/internal/server'", `'${svelteServerUrl}'`)
    .replaceAll('"svelte/internal/server"', `"${svelteServerUrl}"`);

  const tempDir = await mkdtemp(path.join(import.meta.dir, ".render-test-"));
  const compiledPath = path.join(tempDir, `${fileName}.mjs`);
  await writeFile(compiledPath, rewrittenCode, "utf8");

  const moduleUrl = `${pathToFileURL(compiledPath).href}?t=${Date.now()}`;
  const module = (await import(moduleUrl)) as {
    default: Parameters<typeof render>[0];
  };
  return module.default;
}

describe("@theme-toggles/svelte", () => {
  it("renders the default button contract", async () => {
    const Simple = await loadServerComponent("Simple");
    const { body } = render(Simple);

    expect(body).toContain('type="button"');
    expect(body).toContain('title="Toggle theme"');
    expect(body).toContain('aria-label="Toggle theme"');
    expect(body).toContain('aria-hidden="true"');
    expect(body).toContain("--toggles-simple--duration: 500ms");
  });

  it("forwards props and custom duration", async () => {
    const Within = await loadServerComponent("Within");
    const { body } = render(Within, {
      props: {
        duration: 750,
        class: "demo-toggle",
        title: "Switch theme",
        ariaLabel: "Switch theme",
        "data-theme-toggle": "within",
      },
    });

    expect(body).toContain('class="demo-toggle"');
    expect(body).toContain('title="Switch theme"');
    expect(body).toContain('aria-label="Switch theme"');
    expect(body).toContain('data-theme-toggle="within"');
    expect(body).toContain("--toggles-within--duration: 750ms");
  });

  it("generates distinct SVG ids across renders", async () => {
    const Simple = await loadServerComponent("Simple");
    const first = render(Simple).body;
    const second = render(Simple).body;

    const firstId = first.match(/id="(toggles\.dev-simple-main-[^"]+)"/)?.[1];
    const secondId = second.match(/id="(toggles\.dev-simple-main-[^"]+)"/)?.[1];

    expect(firstId).toBeDefined();
    expect(secondId).toBeDefined();
    expect(firstId).not.toBe(secondId);
    expect(first).toContain(`clip-path="url(#${firstId})"`);
    expect(second).toContain(`clip-path="url(#${secondId})"`);
  });
});
