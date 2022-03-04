const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: false,
    format: "esm",
    external: ['react', 'react-dom'],
    outdir: 'dist',
  plugins: [
    cssModulesPlugin({localsConvention: "dashes", inject: false,})
  ],
}).catch(() => process.exit(1));