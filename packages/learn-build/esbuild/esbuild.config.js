import {build, transform} from 'esbuild'

build({
  entryPoints: {
    a: "./src/index",
  },
  outdir: "./dist",
  banner: {
    js: "// 你好",
  },
  format: "esm",
  platform: "node",
  tsconfig: "./tsconfig.json",
  minify: false,
  target: 'es2015',
}).catch((error) => {
  console.log(error);
  process.exit(1);
});