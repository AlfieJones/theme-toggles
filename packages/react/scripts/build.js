const esbuild = require('esbuild');
const { readdirSync } = require('fs');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    format: "esm",
    external: ['react', 'react-dom'],
    outdir: 'dist',
  plugins: [],
}).catch(() => process.exit(1));

const cssDir = "src/toggles/";

const files = readdirSync(cssDir).filter(file => file !== "index.ts").map(file => cssDir.concat(file));

esbuild.build({
  entryPoints: files,
  bundle: true,
  minify: true,
  format: "esm",
  external: ['react', 'react-dom'],
  outdir: 'dist/css',
plugins: [],
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./../../build/bundle.min.css'],
  bundle: true,
  minify: true,
  format: "esm",
  external: ['react', 'react-dom'],
  outfile: 'dist/css/bundle.css',
plugins: [],
}).catch(() => process.exit(1));