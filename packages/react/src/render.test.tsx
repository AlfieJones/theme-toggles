import { describe, expect, it } from "bun:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DarkInner, Simple, Within } from "./index";

describe("@theme-toggles/react", () => {
  it("renders the default button contract", () => {
    const markup = renderToStaticMarkup(React.createElement(Simple));

    expect(markup).toContain('type="button"');
    expect(markup).toContain('title="Toggle theme"');
    expect(markup).toContain('aria-label="Toggle theme"');
    expect(markup).toContain('aria-hidden="true"');
    expect(markup).toContain("--toggles-simple--duration:500ms");
  });

  it("forwards button props and custom duration", () => {
    const markup = renderToStaticMarkup(
      React.createElement(Within, {
        duration: 750,
        className: "demo-toggle",
        title: "Switch theme",
        "aria-label": "Switch theme",
        "data-theme-toggle": "within",
      }),
    );

    expect(markup).toContain('class="demo-toggle"');
    expect(markup).toContain('title="Switch theme"');
    expect(markup).toContain('aria-label="Switch theme"');
    expect(markup).toContain('data-theme-toggle="within"');
    expect(markup).toContain("--toggles-within--duration:750ms");
  });

  it("generates distinct SVG ids for multiple instances in one render", () => {
    const markup = renderToStaticMarkup(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Simple),
        React.createElement(Simple),
      ),
    );

    const ids = [
      ...markup.matchAll(/id="(toggles\.dev-simple-main-[^"]+)"/g),
    ].map(([, id]) => id);

    expect(ids).toHaveLength(2);
    expect(ids[0]).not.toBe(ids[1]);
    expect(markup).toContain(`clip-path="url(#${ids[0]})"`);
    expect(markup).toContain(`clip-path="url(#${ids[1]})"`);
  });

  it("uses Tailwind dark mode by default and supports a controlled state", () => {
    const defaultMarkup = renderToStaticMarkup(React.createElement(DarkInner));
    const toggledMarkup = renderToStaticMarkup(
      React.createElement(DarkInner, { toggled: true }),
    );
    const untoggledMarkup = renderToStaticMarkup(
      React.createElement(DarkInner, { toggled: false }),
    );

    expect(defaultMarkup).toContain("dark:rotate-180");
    expect(toggledMarkup).toContain("rotate-180");
    expect(toggledMarkup).not.toContain("dark:rotate-180");
    expect(untoggledMarkup).not.toContain("rotate-180");
  });
});
