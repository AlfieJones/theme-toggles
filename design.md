# Design Guide

This repo stores animated theme toggle designs as SVGs, then turns them into shared toggle definitions and generated framework components.

## Files and folders

- `assets/raw/` contains editable source files for design work.
- `assets/svgs/` contains cleaned SVG assets used as references for implementation.
- `packages/toggles/src/<slug>/baseline.svg` contains the baseline SVG for each shipped toggle.
- `packages/toggles/src/<slug>/index.ts` contains the animated toggle definition.

If you are adding a new toggle, keep those files aligned.

## Design workflow

1. Create or refine the artwork in your design tool.
2. Export a clean SVG.
3. Save the working file in `assets/raw/`.
4. Save the exported SVG in `assets/svgs/`.
5. Add the baseline SVG to `packages/toggles/src/<slug>/baseline.svg`.
6. Implement the animated toggle in `packages/toggles/src/<slug>/index.ts`.
7. Regenerate framework wrappers with `bun run generate`.

## Recommended tools

[Affinity Designer](https://affinity.serif.com/designer/) is a good option for drawing and refining SVG artwork.

If you want a fully free tool, [Inkscape](https://inkscape.org/) is also a solid choice.

## Design constraints

### Size

Toggles should read clearly at `1em × 1em`.

They are intended to scale with `font-size`, so the silhouette needs to stay legible at small sizes as well as larger display sizes.

Use a consistent view box and avoid tiny decorative details that disappear when reduced.

### Simplicity

Start from a strong silhouette before adding motion.

The best toggles in this repo are recognizable in both states even before animation is applied.

### Animation

Design with the transition in mind.

Shapes should have a clear relationship between the untoggled and toggled states so the animation feels intentional rather than arbitrary.

When clip paths are involved, prefer animating the path data rather than relying on transforms alone.

### Accessibility

The icon should remain understandable at small sizes and in a single-color context.

Assume the SVG may be rendered with `currentColor`, so the design should not depend on multiple colors to make sense.

### Performance

Keep paths and groups as simple as possible.

Avoid unnecessary points, masks, and nested structure unless they materially improve the result. Cleaner SVGs are easier to animate and maintain.

## What makes a good toggle here

- Clear light and dark states
- A silhouette that survives at small sizes
- Motion that supports the concept
- SVG structure that is simple enough to animate cleanly

If a design looks good only when large or only after styling, it usually needs another pass before implementation.
