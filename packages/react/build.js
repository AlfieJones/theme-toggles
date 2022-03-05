const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    format: "esm",
    external: ['react', 'react-dom'],
    outdir: 'dist',
  plugins: [],
}).catch(() => process.exit(1));


esbuild.build({
  entryPoints: ['src/toggles/DarkSide.tsx', 'src/toggles/Classic.tsx', 'src/toggles/InnerMoon.tsx', 'src/toggles/Lightbulb.tsx'],
  bundle: true,
  minify: true,
  format: "esm",
  external: ['react', 'react-dom'],
  outdir: 'dist/css',
plugins: [],
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./../../build/bundle-min.css'],
  bundle: true,
  minify: true,
  format: "esm",
  external: ['react', 'react-dom'],
  outfile: 'dist/css/bundle.css',
plugins: [],
}).catch(() => process.exit(1));